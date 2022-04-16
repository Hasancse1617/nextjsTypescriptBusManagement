import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({children}:any) {
  const router = useRouter();
  return (
    <>
          {router.pathname !== '/admin/login'?<><Header/><Sidebar/></>:''}
             <main>{children}</main>
          {router.pathname !== '/admin/login'?<Footer/>:''}
    </>
  )
}

export default Layout