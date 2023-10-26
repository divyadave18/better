import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill,BsFillCalendarEventFill } from 'react-icons/bs';
import { FaUser,FaShoppingCart,FaGlobeAfrica } from 'react-icons/fa';
import useCurrentUser from '@/hooks/useCurrentUser';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      icon: FaGlobeAfrica,
      label: 'Communities',
      href: '/communities',
      auth: true,
    },
    {
      icon: BsFillCalendarEventFill,
      label: 'Globle Events',
      href: '/events',
      auth: true,
    },
    {
      icon: FaShoppingCart,
      label: 'Merchandise',
      href: '/merch',
      auth: true,
    },
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                alert={item.alert}
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}

            {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
