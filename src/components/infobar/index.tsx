"use client";

import React from 'react';
import { Notifications } from '../global/notifications';
import { useUser } from '@/context/UserContext';
import { UserNav } from '@/app/(main)/(pages)/dashboard/components/user-nav';

const InfoBar = () => {
  const { user } = useUser(); // Use o hook personalizado aqui

  return (
    <div className="flex flex-row justify-end gap-2 items-center px-4 py-3 w-full">
      <Notifications />
      <UserNav avatarUrl={user.avatarUrl} />
    </div>
  );
};

export default InfoBar;