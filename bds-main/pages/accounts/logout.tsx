import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";

import { NextPageWithLayout } from '../../page';
import { selectAuthState, setAuthState } from "../../reducers/actions/auth";

import dynamic from 'next/dynamic';
const PrimaryLayout=  dynamic(() => import('../../components/layouts/PrimaryLayout'),{ssr:false})

const LogoutPage:NextPageWithLayout =()=>{
    const dispatch = useDispatch();
    const authState = useSelector(selectAuthState);
    const router = useRouter()
    const login=()=>{
        dispatch(setAuthState(true))
    }
    const register=()=>{
        router.push('/register')
      
    }
    
    return(
        <div className={`w-full flex flex-col   items-center p-0 select-none bg-slate-50 `}>
            <div className=" w-full flex flex-col    space-y-5  ">
                <div className="p-5 bg-white space-y-4 rounded-xl tablet:px-3 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 relative">
                        <Image width="100%" height="100%" layout="fill"   src="/default-user.svg"/>
                    </div>
                    <div className="gap-4 flex w-full">
                        <button onClick={register} className="btn-login  rounded-lg border-purple-600 text-purple-600">Đăng kí</button>
                        <button onClick={login} className="btn-login rounded-lg border-none bg-purple-600 text-white">Đăng nhập</button>
                    </div>
                </div>
                <div className="p-5  bg-white space-y-4 rounded-xl pl-3 pt-0">
                    <div className="divide-y-[1px] ">
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 relative">
                                        <Image width="100%" height="100%" layout="fill"   src="/favorite-desktop.svg" />
                                    </div>
                                    <p>Tin yêu thích</p>
                                </div>
                                <div className="relative h-4 w-4">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 relative">
                                        <Image width="100%" height="100%" layout="fill"  src="/notification.svg" />
                                    </div>
                                    <p>Thông báo</p>
                                </div>
                                <div className="relative h-4 w-4">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div  className="h-4 w-4 relative">
                                        <Image width="100%" height="100%" layout="fill"  src="/huong-dan.svg"/>
                                    </div>
                                    <p>Hướng dẫn</p>
                                </div>
                                <div className="relative h-4 w-4">
                                    <Image width="100%" height="100%" layout="fill"   src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        <div className="w-full p-3 pb-2">
                           <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 relative">
                                        <Image width="100%" height="100%" layout="fill"   src="/lien-he.svg" />
                                    </div>
                                    <p>Liên hệ</p>
                                </div>
                                <div className="relative h-4 w-4">
                                    <Image width="100%" height="100%" layout="fill"   src="/left-icon-path.svg"/>
                                </div>
                           </div>
                        </div>
                        
                        <div></div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
LogoutPage.getLayout = (page) => {
    return <PrimaryLayout name="account">{page}</PrimaryLayout>;
  };
export default LogoutPage