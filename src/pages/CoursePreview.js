import React, { useState }  from 'react';
import { Grid, Paper, Box } from "@material-ui/core";
import { Video, VideoList } from '../components';
import '../assets/scss/WatchContent.scss';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


export default function Course() {
  // const [videos, setVideos] = useState([]);
  const obj = {src:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidCCIV.mp4?alt=media&token=55a87279-4692-4935-8106-8bb91fc7b2a7'
, videoDescription: 'This is a video description about Lucid Trading on CCIV'}
  const [selectedData, setSelectedData] = useState(obj);

  console.log(selectedData)

  return (
    <div>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={12}>     
          <Box m={2} >PREVIEW - Lucid Trading: Effective investing made easy</Box> 
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Box >
            <Video  video = {selectedData.src} />
          </Box>
          <Box m={2}>
            {selectedData.videoDescription}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box >
              <VideoList onVideoSelect={setSelectedData} />
          </Box>
        </Grid>

      </Grid>
    </div>

  );
};