import { Outlet } from 'react-router-dom';

import TopNav from 'components/TopNav';

const SharedLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};
export default SharedLayout;