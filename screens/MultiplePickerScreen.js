import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Button,
  ActivityIndicator
} from "react-native";

import * as MediaLibrary from "expo-media-library";
import SafeAreaView from "react-native-safe-area-view";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

import ImageTile from "../components/ImageTile";
import GameContext from "../Context";

const { width } = Dimensions.get("window");

export default class ImageBrowser extends React.Component {
  static contextType = GameContext;

  state = {
    photos: [],
    selected: [],
    after: null,
    hasNextPage: true,
    value: {}
  };

  navigateToImageSelect = () => {
    this.props.navigation.navigate("Images");
  };
  componentWillMount() {
    this.getPermissionAsync();
  }

  componentDidMount() {
    let value = this.context;
    this.setState({
      value
    });
    this.getPhotos();
    this.setState({
      badgeColor: this.props.badgeColor ? this.props.badgeColor : "#007aff"
    });
  }

  selectImage = index => {
    let newSelected = Array.from(this.state.selected);

    if (newSelected.indexOf(index) === -1) {
      newSelected.push(index);
    } else {
      const deleteIndex = newSelected.indexOf(index);
      newSelected.splice(deleteIndex, 1);
    }

    if (newSelected.length > 4) return;
    if (newSelected.length === 0) newSelected = [];

    this.setState({ selected: newSelected });
  };

  getPermissionAsync = async () => {
    // if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
    // }
  };

  // async getCameraRollPermissions() {
  //   const { Permissions } = Expo;
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   if (status === "granted") {
  //   } else {
  //     /// Handle permissions denied;
  //     Alert.alert("Uh oh! The user has not granted us permission.");
  //   }
  // }

  getPhotos = () => {
    let params = { first: 500 };
    if (this.state.after) params.after = this.state.after;
    if (!this.state.hasNextPage) return;
    MediaLibrary.getAssetsAsync(params).then(assets => {
      this.processPhotos(assets);
      // console.log(assets.assets);
    });
  };

  processPhotos = assets => {
    if (this.state.after === assets.endCursor) return;

    let displayAssets;
    if (this.props.mediaSubtype == null) {
      displayAssets = assets.assets;
    } else {
      displayAssets = assets.assets.filter(asset => {
        return asset.mediaSubtypes.includes(this.props.mediaSubtype);
      });
    }

    this.setState({
      photos: [...this.state.photos, ...displayAssets],
      after: assets.endCursor,
      hasNextPage: assets.hasNextPage
    });
  };

  getItemLayout = (data, index) => {
    let length = width / 4;
    return { length, offset: length * index, index };
  };

  prepareCallback = () => {
    let { selected, photos } = this.state;
    const selectedPhotos = selected.map(i => photos[i].uri);
    //   const assetsInfo = Promise.all(
    //     selectedPhotos.map(i => MediaLibrary.getAssetInfoAsync(i))
    //   );
    //   console.log(assetsInfo);
    this.state.value.setListFromMultipleImages(selectedPhotos);

    this.navigateToImageSelect();

    console.log(selectedPhotos);
  };

  renderHeader = () => {
    let selectedCount = this.state.selected.length;

    let headerText = `${selectedCount} ${
      this.props.headerSelectText ? this.props.headerSelectText : "Selected"
    }`;
    if (selectedCount === this.props.max) headerText = headerText + " (Max)";
    const headerCloseText = this.props.headerCloseText
      ? this.props.headerCloseText
      : "Close";
    const headerDoneText = this.props.headerDoneText
      ? this.props.headerDoneText
      : "Done";
    const headerButtonColor = this.props.headerButtonColor
      ? this.props.headerButtonColor
      : "#007aff";

    return (
      <SafeAreaView forceInset={{ top: "always" }} style={{ height: 52 }}>
        <View style={styles.header}>
          <Button
            color={headerButtonColor}
            title={headerCloseText}
            onPress={() => this.navigateToImageSelect()}
          />
          <Text style={styles.headerText}>{headerText}</Text>
          <Button
            color={headerButtonColor}
            title={headerDoneText}
            onPress={() => this.prepareCallback()}
          />
        </View>
      </SafeAreaView>
    );
  };

  renderImageTile = ({ item, index }) => {
    const selected = this.state.selected.indexOf(index) !== -1;
    const selectedItemCount = this.state.selected.indexOf(index) + 1;

    return (
      <ImageTile
        item={item}
        selectedItemCount={selectedItemCount}
        index={index}
        camera={false}
        selected={selected}
        selectImage={this.selectImage}
        badgeColor={this.state.badgeColor}
      />
    );
  };

  renderLoading = () => {
    return (
      <View style={styles.emptyContent}>
        <ActivityIndicator
          size="large"
          color={this.props.loadingColor ? this.props.loadingColor : "#bbb"}
        />
      </View>
    );
  };

  renderEmpty = () => {
    return (
      <View style={styles.emptyContent}>
        <Text style={styles.emptyText}>
          {this.props.emptyText ? this.props.emptyText : "No images"}
        </Text>
      </View>
    );
  };

  renderImages = () => {
    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={this.state.photos}
        numColumns={4}
        renderItem={this.renderImageTile}
        keyExtractor={(_, index) => index}
        onEndReached={() => {
          this.getPhotos();
        }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={this.renderEmpty}
        initialNumToRender={24}
        getItemLayout={this.getItemLayout}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderImages()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: width,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19
  },
  emptyContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    color: "#bbb",
    fontSize: 20
  }
});
