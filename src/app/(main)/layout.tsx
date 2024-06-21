import React from 'react';
import Sidebar from '@/components/sidebar';
import InfoBar from '@/components/infobar';
import { UserProvider } from '@/context/UserContext';


type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <UserProvider>
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="w-full h-full">
          <InfoBar />
          {props.children}
        </div>
      </div>
    </UserProvider>
  );
}

export default Layout;