'use strict';

import { mails } from '@/app/(main)/(pages)/chat/data';
import React, { useState, useEffect } from 'react';
import { Chat } from './chat';

type Props = {
  user: number;
}

const ChatLayout: React.FC<Props> = ({ user }) => {
  const [selectedUser, setSelectedUser] = useState(mails[user]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (mails[user]) {
      setSelectedUser(mails[user]);
    } else {
    }
  }, [user]);

  return (
    <Chat 
      messages={selectedUser.messages}
      selectedUser={selectedUser}
      isMobile={isMobile}
    />
  );
}

export default ChatLayout;