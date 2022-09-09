import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { NextPageWithLayout } from '../page';

import dynamic from 'next/dynamic';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'))

const RegisterPage:NextPageWithLayout=()=>{
    const [isHide,setHide]=useState(true)
    const router= useRouter()
    const changeHide=()=>{
        setHide(!isHide)
    }
    const login=()=>{
        router.push('/login')
    }
    return (
      <div className=" bg-slate-200 py-[3.5rem] tablet:p-0">
      <div className=" w-9/12 tablet:w-full relative m-auto ">
      <div className="flex flex-[2_1_0%] ">
          <div className="flex-[6_1_0%] bg-[url('/welcome.png')] bg-no-repeat bg-contain tablet:hidden">
             
          </div>
          
          <div className="bg-white flex flex-col flex-[6_1_0%]  tablet:rounded-none tablet:p-5  p-10 shadow shadow-slate-800 rounded-xl max-w-[34rem]">
              <div className="mb-6">
                  <h1 className=" text-2xl  text-pink-500 font-medium">Đăng Kí</h1>
                  <p >Nhập đúng email và số điện thoại của bạn để đăng tin miễn phí</p>
              </div>
              <div className="space-y-3 mb-1 ">
                  <div>
                      <label htmlFor="phone">Số điện thoại</label>
                      <input id="phone" type="text" name="phone"
                          className="
                          w-full
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder="Nhập số điện thoại của bạn"
                      />
                  </div>
                  <div>
                      <label htmlFor="email">Địa chỉ Email</label>
                      <input id="email" type="text" name="email"
                          className="
                          w-full
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder="Nhập đúng địa chỉ email của bạn"
                      />
                  </div>
                  <div>
                      <label htmlFor="name">Họ tên</label>
                      <input id="name" type="text" name="name"
                          className="
                          w-full
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder="Nhập họ tên"
                      />
                  </div>
                  <div className="relative">
                  
                      <label htmlFor="pass">Mật khẩu</label>
                      <input id="pass"  type={isHide ===true ?"password" : "text"}name="pass"
                          className="
                          w-full
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder="Nhập mật khẩu có ít nhất 6 kí tự"
                      />
                      <span className="absolute inset-y-1/2 top-2/3 right-3 flex items-center pl-2 cursor-pointer">
                          <button onClick={changeHide}>
                              {isHide ===true ? (
                                <div className="w-6 h-6 relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/password-hide.svg" className="w-auto h-auto"/>
                                </div>
                                ): (
                                <div className="w-6 h-6 relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/password-visble.svg" className="w-auto h-auto"/>
                                </div>
                            )}
                              
                          </button>
                          
                      </span>
                  </div>
               
                  <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full w-full">Đăng kí</button>
                  <div>
                      <div className="flex items-center py-4">
                          <div className="flex-grow h-px bg-gray-400"></div> 
                          <span className="flex-shrink text-xs text-gray-500 px-4  font-light">hoặc đăng kí bằng</span>
                          <div className="flex-grow h-px bg-gray-400"></div>
                      </div>
                  </div>
                  <div className="flex flex-wrap">
                      <button type="button" className="btn-login">
                        <div className="w-5 h-5 mr-2 ml-1 relative">
                            <Image layout='fill' src="/facebook.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "  />
                        </div>
                          Đăng kí với Facebook
                      </button>
                      <button type="button" className="btn-login">
                        <div className="w-5 h-5 mr-2 ml-1 relative">
                        <Image layout='fill' src="/google.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "  />
                          </div>
                          Đăng kí với Google
                      </button>
                      <button type="button" className="btn-login">
                      <div className="w-5 h-5 mr-2 ml-1 relative">
                      <Image layout='fill' src="/zalo.svg" alt="Logo" className="w-5 h-5 mr-2 ml-1 "  />
                      </div>
                          Đăng kí với Zalo
                      </button>
                      <p className="flex justify-center items-center w-full text-sm ">Bạn đã có tài khoản <span onClick={login} className="cursor-pointer text-purple-600 ml-2">Đăng nhập ngay</span></p>
                  </div>
              </div>
              
                  
              
                  
              
          </div>
       
      </div>
      </div>
  </div>
 
      );
}
RegisterPage.getLayout = (page) => {
    return <PrimaryLayout name="register">{page}</PrimaryLayout>;
  };
export default RegisterPage;