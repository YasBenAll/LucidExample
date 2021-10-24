import React from "react";
import { Grid, Box, Card, Paper} from "@material-ui/core";

const VideoItem = ({ thumbnail, number, name, videoLength, onVideoSelect, src, videoDescription }) => {

  return (
    <Box bgcolor = "Blue" width = "100%">
    <Grid container onClick={() => onVideoSelect({src:src, videoDescription:videoDescription})}>
      <Grid item xs = {4} sm = {4} >
        <img alt="thumbnail" src={thumbnail} width="112" height="63"  />
      </Grid>
      <Grid item xs = {4} sm = {4}>{name}</Grid>
      <Grid item xs = {4} sm = {4}>{videoLength}</Grid>
    </Grid>
    </Box>
  );
}

export default VideoItem;