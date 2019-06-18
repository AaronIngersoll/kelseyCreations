import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
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
    var API_KEY = process.env.API_KEY;
    var CHANNEL_ID = process.env.CHANNEL_ID;

    var maxResults = 20;
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      API_KEY +
      "&channelId=" +
      CHANNEL_ID +
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
              <ListSubheader component="div">VIDEOS</ListSubheader>
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
                    >
                      <IconButton>
                        <InfoIcon />
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
