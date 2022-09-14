import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../reducers/actions/auth";
interface ItabName extends React.ComponentPropsWithoutRef<"div">{
    name?:string
}

const BottomTab:React.FC<ItabName>=(props)=>{
    const {name} = props;

    const authState = useSelector(selectAuthState);

    const router=useRouter()
    const [activeTabs, setActiveTabs] = useState(name)
    useEffect(()=>{
        if(name!==activeTabs){
            setActiveTabs('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name])

    useEffect(() => {
            switch (activeTabs) {
                case 'home':
                    router.push('/')
                    break;
                case 'register':
                    router.push('/register')
                    break;
                case 'login':
                    router.push('/login')
                    break;
                case 'upload':
                    router.push('/upload')
                    break;
                case 'account':

                    {authState ? router.push('/accounts/login') :  router.push('/accounts/logout')}

                    break;
                default:
                    break;
            }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTabs,authState])
    return(

        <div className="bottomNav gap-2  shadow-sm-light bg-white shadow-slate-800 select-none">
            <div className="bnTab ">
                {activeTabs ==='home'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                    onClick={() => setActiveTabs('home')}
                >
                    <div  className="h-5 w-5 relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/home_toolbar_footer_fill.svg"/>
                    </div>
                Trang chủ</button>
                ):(
                    <button type="button" className="btn-nav-bar"
                    onClick={() => setActiveTabs('home')}
                >
                    <div  className="h-5 w-5 relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/home_toolbar_footer.svg" className="h-5 w-5"/>
                    </div>
                    Trang chủ</button>
                )}

            </div>
            <div className="bnTab">

                {activeTabs ==='manager'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <div  className="h-5 w-5 relative">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/listing_manage_fill.svg" />
                       </div>
                        Quản lí tin</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <div  className="h-5 w-5 relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/listing-manager.svg" />
                        </div>
                        Quản lí tin</button>
                )}
            </div>
            <div className="bnTab relative ">
                {activeTabs ==='upload'  ? (
                    <>
                        <div onClick={() => setActiveTabs('upload')} className="absolute    circle-nav shadow-under boder-white bg-white  flex items-center justify-center -translate-y-1/2">
                            <div className="text-lg text-purple-600">+</div>
                        </div>

                        <button type="button" className="btn-nav-bar text-purple-600  translate-y-[1em]"

                    >

                        Đăng tin</button>
                        </>
                    ):(
                        <>
                        <div onClick={() => setActiveTabs('upload')} className="absolute    circle-nav shadow-under boder-white bg-white  flex items-center justify-center -translate-y-1/2">
                            <div className="text-lg text-purple-600 ">+</div>
                        </div>

                        <button type="button" className="btn-nav-bar   translate-y-[1em]"

                    >

                        Đăng tin</button>
                        </>
                    )}
            </div>
            <div className="bnTab">
            {activeTabs ==='favorite'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <div  className="h-5 w-5 relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/favorite-mobile.svg" className="h-5 w-5"/>
                        </div>
                        Yêu thích</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        // onClick={() => setActiveTabs('home')}
                    >
                        <div  className="h-5 w-5 relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/favorite-desktop.svg" className="h-5 w-5"/>
                        </div>
                        Yêu thích</button>
                )}
            </div>
            <div className="bnTab">

                {activeTabs ==='account'  ? (
                    <button type="button" className="btn-nav-bar text-purple-600"
                        onClick={() => setActiveTabs('account')}
                    >
                        {authState ?

                            <div className="flex items-center space-x-4 ">
                                <div className="relative w-auto h-auto">
                                    <div  className="w-5 h-5 rounded-full p-1 ring-2 ring-sky-300    overflow-hidden relative">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain"

                                            src="/user-toolbar-footer.svg"
                                        />
                                    </div>
                                    <span className="-bottom-1 -right-1 bg-green-400 absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800"></span>
                                </div>
                            </div>

                            :
                            <div className="h-5 w-5 relative" >
                                <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/user-toolbar-footer.svg" />
                            </div>
                                }

                        Tài khoản</button>
                    ):(
                        <button type="button" className="btn-nav-bar"
                        onClick={() => setActiveTabs('account')}
                    >
                        <div className="h-5 w-5 relative" >
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/user-toolbar-footer.svg" className="h-5 w-5"/>
                        </div>
                        Tài khoản</button>
                )}
            </div>

        </div>
    )
}
export default BottomTab;
