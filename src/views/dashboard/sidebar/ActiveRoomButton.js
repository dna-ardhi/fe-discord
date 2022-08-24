import { Button, Tooltip } from '@mui/material';
import { bool, number, oneOfType, string } from 'prop-types';
import React from 'react';
import Avatar from '../../../components/Avatar';
import * as roomHandler from '../../../rtc/roomHandler';

const ActiveRoomButton = ({
  roomId,
  creatorUserName,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUserName}. Connected: ${amountOfParticipants}`;

  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      roomHandler.joinRoom(roomId);
    }
  };

  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            m: 0,
            padding: 0,
            minWidth: 0,
            mt: '10px',
            color: 'white',
            bgcolor: '#5865f2',
          }}
        >
          <Avatar username={creatorUserName} />
        </Button>
      </div>
    </Tooltip>
  );
};

ActiveRoomButton.propTypes = {
  roomId: oneOfType([number, string]),
  creatorUserName: string,
  amountOfParticipants: number,
  isUserInRoom: bool,
};

export default ActiveRoomButton;
