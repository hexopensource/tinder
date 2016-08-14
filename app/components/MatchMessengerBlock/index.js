/**
*
* MatchMessengerBlock
*
*/

import React, { PropTypes } from 'react';
import { getAge, convertDistanceToLocal, parsePingTime } from 'components/MatchCard//helpers';

import styles from './styles.css';

function MatchMessengerBlock(props) {
  const person = props.data.person;
  const age = getAge(person.birth_date);
  const messages = props.data.messages;
  const recentMessage = messages && messages[messages.length - 1] && messages[messages.length - 1].message;
  return (
    <div className={styles.matchBlock}>
      <div className={styles.matchAvatarContainer}>
        <div
          className={styles.matchAvatar}
          style={{
            backgroundImage: `url(${person.photos[0].processedFiles[0].url})`,
          }} />
      </div>
      <div className={styles.matchDetails}>
        <span className={styles.matchName}>{person.name}</span>
        <span className={styles.matchAge}>{age}</span>
        <span className={styles.matchRecentMessage}>{recentMessage}</span>
      </div>
    </div>
  );
}

MatchMessengerBlock.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MatchMessengerBlock;
