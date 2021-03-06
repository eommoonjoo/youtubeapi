import React from 'react';
import styles from '../video_item/VideoItem.module.css';

function VideoItem({ video: { snippet } }) {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img src={snippet.thumbnails.medium.url} alt='video thumbnail' />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
