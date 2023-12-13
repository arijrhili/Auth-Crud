import { Fragment } from 'react';

import MainNavigation from './main-navigation';
import Header from '../home/header';
import Navbar from '../home/Navbar';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function Layout(props) {
  return (
    <Fragment>
      <Header/>
      <MainNavigation />
     <Navbar/>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
