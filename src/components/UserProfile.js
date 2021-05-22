import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';

// Dialog componets & css
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated, config } from 'react-spring';
import '@reach/dialog/styles.css';
import 'css/dialog.css';

import { Unit, copyTextToClipboard } from 'components/util';

export default function UserProfile() {
  // Modal Controls
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => {
    setShowDialog(true);
  };
  const close = () => setShowDialog(false);

  return (
    <div>
      <button
        onClick={open}
        className='btn btn-unstyled'
        style={{
          color: 'white',
          zIndex: 0,
          padding: '0',
          borderRadius: 'unset',
          width: '100%',
        }}>
        {UserHeader()}
      </button>

      {/* Wallet Modal */}
      <Modal open={showDialog} onClose={close}>
        {UserHeader()}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis
          aliquam odit accusamus eum id vero voluptatibus voluptate consequatur,
          iste nemo sequi laudantium facere similique necessitatibus in nulla
          quo doloribus.
        </p>
      </Modal>
    </div>
  );
}

const AnimatedDialogOverlay = animated(DialogOverlay);
const AnimatedDialogContent = animated(DialogContent);
function Modal({ children, open, onClose }) {
  const transitions = useTransition(open, null, {
    from: {
      opacity: 0,
      transform: 'translateY(-40px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-40px)',
    },
    config: config.gentle,
  });

  return (
    <>
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <AnimatedDialogOverlay
              key={key}
              style={{ opacity: props.opacity, zIndex: '1000' }}
              onDismiss={onClose}>
              <AnimatedDialogContent style={props} aria-label='rara wallet'>
                {children}
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </>
  );
}

function UserHeader({ user }) {
  const dummyUser = {
    profile: {
      avatarURL: '',
      displayName: '',
    },
    communityName: 'RARA.house',
    ra: 1726,
  };

  return (
    <div className='user-info-grid'>
      <img
        src={user.profile.avatarURL}
        alt='avatar'
        height='48px'
        width='48px'
        style={{ borderRadius: '50%' }}
      />
      <div className='name'>
        {user.profile.displayName}
        <div className='community'>{user.communityName}</div>
      </div>
      <div>
        <span className='balance'>
          <span>
            {user.ra || '0'} <Unit type={'ra'} />
          </span>
        </span>
      </div>
    </div>
  );
}
