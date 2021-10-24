import React from "react";
import VideoItem from "./VideoItem";
import '../assets/scss/RelatedVideos.scss'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 425,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));


const VideoList = ({ onVideoSelect }) => {
  const classes = useStyles();

  // MOET EXTERN OPGESLAGEN WORDEN
  const videos = [
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidCCIV.mp4?alt=media&token=55a87279-4692-4935-8106-8bb91fc7b2a7',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hqdefault.webp?alt=media&token=b84808f1-a323-40a6-8e00-f485dc3e2066',
      name:'Lucid Trading on CCIV',
      videoDescription:"This is a video description about Lucid Trading on CCIV",
      videoLength: '13:16'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidBitcoin.mp4?alt=media&token=6a6ee021-ffbf-4b7d-a89b-095a94f54515',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hq720.webp?alt=media&token=2542748b-306f-4ed9-9db6-b313eb0571b3',
      name: 'Lucid Trading on Bitcoin',
      videoDescription:"This is a video description about Lucid Trading on Bitcoin",
      videoLength: '9:51'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidVirgin.mp4?alt=media&token=bbdb9e58-a6fd-481f-8c45-0b1a10790535',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hqdefault_live.webp?alt=media&token=56ea27e1-5d70-4778-956c-06d528ae3b31',
      name: 'Lucid Trading on Virgin Galactic',
      videoDescription:"This is a video description about Lucid Trading on Virgin Galactic",
      videoLength: '11:44'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidCCIV.mp4?alt=media&token=55a87279-4692-4935-8106-8bb91fc7b2a7',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hqdefault.webp?alt=media&token=b84808f1-a323-40a6-8e00-f485dc3e2066',
      name:'Lucid Trading on CCIV',
      videoDescription:"This is a video description about Lucid Trading on CCIV",
      videoLength: '13:16'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidBitcoin.mp4?alt=media&token=6a6ee021-ffbf-4b7d-a89b-095a94f54515',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hq720.webp?alt=media&token=2542748b-306f-4ed9-9db6-b313eb0571b3',
      name: 'Lucid Trading on Bitcoin',
      videoDescription:"This is a video description about Lucid Trading on Bitcoin",
      videoLength: '9:51'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidVirgin.mp4?alt=media&token=bbdb9e58-a6fd-481f-8c45-0b1a10790535',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hqdefault_live.webp?alt=media&token=56ea27e1-5d70-4778-956c-06d528ae3b31',
      name: 'Lucid Trading on Virgin Galactic',
      videoDescription:"This is a video description about Lucid Trading on Virgin Galactic",
      videoLength: '11:44'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidCCIV.mp4?alt=media&token=55a87279-4692-4935-8106-8bb91fc7b2a7',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hqdefault.webp?alt=media&token=b84808f1-a323-40a6-8e00-f485dc3e2066',
      name:'Lucid Trading on CCIV',
      videoDescription:"This is a video description about Lucid Trading on CCIV",
      videoLength: '13:16'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidBitcoin.mp4?alt=media&token=6a6ee021-ffbf-4b7d-a89b-095a94f54515',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hq720.webp?alt=media&token=2542748b-306f-4ed9-9db6-b313eb0571b3',
      name: 'Lucid Trading on Bitcoin',
      videoDescription:"This is a video description about Lucid Trading on Bitcoin",
      videoLength: '9:51'},
    {
      url:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/LucidVirgin.mp4?alt=media&token=bbdb9e58-a6fd-481f-8c45-0b1a10790535',
      thumbnail:'https://firebasestorage.googleapis.com/v0/b/frb-upl-dwnld-882b6.appspot.com/o/hqdefault_live.webp?alt=media&token=56ea27e1-5d70-4778-956c-06d528ae3b31',
      name: 'Lucid Trading on Virgin Galactic',
      videoDescription:"This is a video description about Lucid Trading on Virgin Galactic",
      videoLength: '11:44'},
    ]
  
  
 
  const courseVideoPreviews = videos.map(video => (
    <ul className={classes.ul}>
      <ListItem>
        <VideoItem
          onVideoSelect={onVideoSelect}
          thumbnail = {video.thumbnail}
          src = {video.url}
          name = {video.name}
          videoLength = {video.videoLength}
          videoDescription = {video.videoDescription}
        />
      </ListItem>
    </ul>
  ));

  return (
    <List className={classes.root} subheader={<li />}>
      <li className={classes.listSection}>
        {courseVideoPreviews}
      </li>
    </List>

  );
}

export default VideoList;