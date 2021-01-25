import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

export default class VidGrid extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    videos: [],
    loading: true
  };

  componentDidMount() {
    var that = this;
    var maxResults = 30;
    const REACT_APP_API_KEY = "AIzaSyCSwNci0V2Nze4POGLpIQCtIxUyD34i8qs";
    const REACT_APP_CHANNEL_ID = "UCoDRD6ug-7jVrtn486E4BQw";
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      REACT_APP_API_KEY +
      "&channelId=" +
      REACT_APP_CHANNEL_ID +
      "&part=snippet,id&order=date&maxResults=" +
      maxResults;

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ videos: data.items, loading: false });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return null;
    }
    return (
      <div className="root">
        <div className="gridList">
          <GridList>
            <GridListTile
              key="Subheader"
              cols={2}
              style={{ height: "auto", alignContent: "center" }}
            >
              <ListSubheader
                component="div"
                style={{ color: "#fcfcfc", textDecoration: "underline" }}
              >
                VIDEOS
              </ListSubheader>
            </GridListTile>
            {console.log(this.state.videos)}
            {this.state.videos.map(video => (
              <GridListTile key={video.snippet.thumbnails.medium.url}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <GridListTileBar
                  title={video.snippet.title}
                  subtitle={<span>type: {video.snippet.title}</span>}
                  actionIcon={
                    <Link
                      to={`/view_video/${video.id.videoId}`}
                      className="icon"
                      style={{ textDecoration: "none" }}
                    >
                      <IconButton style={{ color: "#f19cbb" }}>
                        <i class="fas fa-arrow-circle-right"></i>
                      </IconButton>
                    </Link>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
