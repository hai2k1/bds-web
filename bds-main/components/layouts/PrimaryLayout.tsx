import Head from 'next/head';
import { useRouter } from 'next/router';
import useDevice from '../../hooks/useDevice';
import type { IPrimaryLayout } from '../../interfaces/interfaces';






import dynamic from 'next/dynamic';
import { ScrollButton } from '../button';


const Header = dynamic(() => import('./Header'),{ssr:false})
const Footer = dynamic(() => import('./Footer'),{ssr:false})
const HeaderMobile = dynamic(() => import('./HeaderMobile'),{ssr:false})

const BottomTab = dynamic(() => import('../bottomTab/bottomTab'),{ssr:false})

const PrimaryLayout:React.FC<IPrimaryLayout>=({
    name,
    children,
    ...divProps
})=>{
    const {isMobile} =useDevice()

    
    const router=useRouter();

  
    return( 
        <div {...divProps} className={`min-h-screen flex flex-col  select-none laptop:text-sm tablet:mb-[50px]`}>
            
            <Head>
                <title>NextJs Projects</title>
            </Head>
           
            {!isMobile ? (<Header/>):(<HeaderMobile/>)}
            
            <main className={`${!isMobile && "mt-[80px]"}`}>{children}</main>
            <ScrollButton isMobile={isMobile} className={`bottom-[15%] ${isMobile? "left-[85%]":"left-[90%]"}`}/>
            <div className="m-auto" />
           {!isMobile ? <Footer/> : isMobile && (router.pathname==='/'||router.pathname==='/query/[id]') && <Footer/> }
            
            
            {isMobile &&<BottomTab name={name} />}
            
        </div>
    )
}
export default PrimaryLayout;