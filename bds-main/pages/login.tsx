import Image from 'next/image';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {NextPageWithLayout} from '../page';
import {setAuthState} from "../reducers/actions/auth";
import {login, setToken} from '../api/auth'
import dynamic from 'next/dynamic';
import Link from "next/link";
import Swal from 'sweetalert2'

const PrimaryLayout = dynamic(() => import('../components/layouts/PrimaryLayout'))

const LoginPage: NextPageWithLayout = () => {
    const [isHide, setHide] = useState(true)
    const [email, setEmail] = useState('admin@botble.com')
    const [password, setPassword] = useState('1593572')
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter()
    const register = () => {
        router.push('/register')
    }
    const submitLogin = () => {
        login({
            email: email,
            'password': password
        }).then(function (response: any) {
            if (response.status === 200) {

                setToken(response.data.data.token.plainTextToken)
                dispatch(setAuthState(response.data.data))
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    text: 'Login thanh cong',
                    showConfirmButton: false,
                    backdrop: true,
                    timer: 1500,
                    timerProgressBar: true,
                }).then(() => {
                    router.push('/')
                })
                return true;
            }
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                text: 'Login that bai',
                showConfirmButton: false,
                backdrop: true,
                timer: 1500,
                timerProgressBar: true,
            })
            setError(true)
        })

    }
    return (
        <div className=" bg-slate-200 py-[3.5rem] tablet:p-0">
            <div className=" w-9/12 tablet:w-full relative m-auto ">
                <div className="flex flex-[2_1_0%]">
                    <div className="flex-[6_1_0%] bg-[url('/welcome.png')] bg-no-repeat bg-contain tablet:hidden">

                    </div>

                    <div
                        className="bg-white flex flex-col flex-[6_1_0%] tablet:rounded-none tablet:p-5 mb-12 p-10 shadow-lg shadow-slate-800 rounded-xl max-w-[34rem]">
                        <div className="mb-6">
                            <h1 className=" text-3xl mb-4 text-pink-500 font-medium">Đăng nhập</h1>
                            <p>Chào mừng bạn đến với thuê căn hộ</p>
                        </div>
                        <div className="space-y-3 mb-1 ">
                            <div>
                                <label htmlFor="email ">Số điện thoại hoặc Email</label>
                                <input id="email" type="text" name="email" value={email} onChange={(e) => {
                                    setError(false)
                                    setEmail(e.target.value)
                                }} className={`w-full mt-2
                                placeholder:text-slate-400
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border ${error ? 'border-red-700' : 'border-slate-300'}`}
                                       placeholder="Số điện thoại hoặc Email"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="pass">Mật khẩu</label>
                                <input id="pass" type={"password"} name="pass"
                                       className={`w-full
                                mt-2
                                placeholder:text-slate-400
                                bg-white rounded pl-3 py-2 pr-4
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border ${error ? 'border-red-700' : 'border-slate-300'}`}
                                       placeholder="Mật khẩu của bạn"
                                       value={password} onChange={(e) => {
                                    setError(false)
                                    setPassword(e.target.value)
                                }}
                                />
                            </div>

                            {error ?
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">tài khoản hoặc mật khẩu không
                                    đúng !</p> : <div className="mt-10 block"></div>}
                            <span className="w-full text-sm flex justify-end mb-4 text-purple-600 "><Link
                                href="/register">Quên mật khẩu?</Link></span>
                            <button onClick={submitLogin}
                                    className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full w-full">Đăng
                                nhập
                            </button>
                            <div>
                                <div className="flex items-center py-4">
                                    <div className="flex-grow h-px bg-gray-400"></div>
                                    <span className="flex-shrink text-xs text-gray-500 px-4  font-light">hoặc đăng nhập bằng</span>
                                    <div className="flex-grow h-px bg-gray-400"></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <button type="button" className="btn-login">
                                    <div className="w-5 h-5 mr-2 ml-1 relative">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain"
                                               src="/facebook.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "/>
                                    </div>
                                    Đăng nhập với Facebook
                                </button>
                                <button type="button" className="btn-login">
                                    <div className="w-5 h-5 mr-2 ml-1 relative">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain"
                                               src="/google.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "/>
                                    </div>
                                    Đăng nhập với Google
                                </button>
                                <button type="button" className="btn-login">
                                    <div className="w-5 h-5 mr-2 ml-1 relative">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain"
                                               src="/zalo.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "/>
                                    </div>
                                    Đăng nhập với Zalo
                                </button>
                                <p className="flex justify-center items-center w-full text-sm ">Bạn chưa có tài
                                    khoản <span onClick={register} className="cursor-pointer text-purple-600 ml-2">Đăng kí ngay</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
LoginPage.getLayout = (page) => {
    return <PrimaryLayout name="login">{page}</PrimaryLayout>;
};
export default LoginPage;
