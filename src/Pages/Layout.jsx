import { useState } from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { dummyUserData } from '../assets/assets';
import Loading from '../components/Loading';

const Layout = () => {
  const user = dummyUserData;
  const [sideBarOpen, setSideBarOpen] = useState(false);

  if (!user) {
    return <Loading/>;
  }

  return (
    <div className="w-full h-screen relative flex">
      <SideBar  sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>

      <div className="flex-1 bg-slate-50">
        <Outlet />
      </div>

      {sideBarOpen ? (
        <X
          className="absolute top-3 right-3 p-2 z-50 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
          onClick={() => setSideBarOpen(false)}
        />
      ) : (
        <Menu
          className="absolute top-3 right-3 p-2 z-50 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
          onClick={() => setSideBarOpen(true)}
        />
      )}
    </div>
  );
};

export default Layout;

