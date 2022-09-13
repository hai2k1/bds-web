
import { Device } from '../Device';
import { NextPageWithLayout } from '../page';




import dynamic from 'next/dynamic';
import {useEffect} from "react";
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'),{ssr:false})
const HomeDesktop = dynamic(() => import('./desktop/HomeDesktop'),{ssr:false})

const Home: NextPageWithLayout = (props) => {

  return (
    <>
    <Device desktop>
       <HomeDesktop />
    </Device>
    <Device mobile>
       <HomeDesktop />
    </Device>
    </>
  );
};
Home.getLayout = (page) => {
  return <PrimaryLayout name="home">{page}</PrimaryLayout>;
};
export default Home;
