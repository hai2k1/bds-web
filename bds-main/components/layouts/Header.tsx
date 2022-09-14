import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import useBlur from '../../hooks/useBlur';
import type { IHeader } from '../../interfaces/interfaces';
import {selectAuthState, selectUser, setAuthState} from "../../reducers/actions/auth";
import { RangeSlider } from '../button';
import { RenderPopUp } from '../renderHeader';



const cities=new Array(120).fill({
    name:"Hồ Chí Minh"
})


const Header : React.FC<IHeader>=({ ...headerProps })=>{
    const router = useRouter()
    const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    const [patnName,setPathName]=useState<boolean>(true)
    const [change,setChange]= useState('')
    const [popUp,setPopUp] = useState<number>(1) //change pop khu vực
    const [city,setCity]=useState<string>('')
    const [district,setDistrict]=useState<string>('')
    const [ward,setWard]=useState<string>('')
    const [location,setLocation]=useState<string>('')
    const user = useSelector(selectUser)
    useEffect(()=>{
        const setPath=()=>{
            if(router.pathname==='/'){
                setPathName(true)
            }else if(router.pathname==='/query/[id]'){
                setPathName(true)
            }else if(router.pathname==='/product-detail'){
                setPathName(true)
            }else{
                setPathName(false)
            }
        }
        setPath()
    },[router])
    const handleClick=()=>{
        setIsComponentVisible(!isComponentVisible)
    }
    const submitLogout=()=>{
        dispatch(setAuthState(false))
        setIsComponentVisible(false)
    }
    const naviGate=(link:string)=>{
        router.push(link)
    }
    const resetFilter=()=>{
        router.push('/query/1')
    }

    // @ts-ignore
    // @ts-ignore
    return(
        <header
            {...headerProps}
            className={`w-full fixed bg-white  flex flex-col px-10 justify-center  items-center p-5 shadow z-[80] select-none `}
        >
            <div className=" w-9/12 flex bigger:w-7/12 items-center justify-between ">

                <div className="flex  w-2/3  space-x-4  ">
                    <Link href="/" >
                        <a className="w-[15rem] h-[3rem]">
                            <div className="w-full h-full relative " >
                                <Image  layout="fill"  src="/logo.svg"  alt="Logo"  />
                            </div>
                        </a>
                    </Link>
                    <label className="relative laptop:hidden">
                        <input
                            className="
                                w-full
                                bg-white rounded-3xl pl-3 py-3 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 w-full focus:ring-sky-500 focus:ring-1
                                border border-slate-300 "
                            placeholder="Tìm kiếm khu vực,dự án"
                            type="text"
                            name="search"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center pl-2">
                            <div className="w-5 h-5 relative">
                                <Image  layout="fill" objectFit="contain"  src="/search_black.svg" className="w-5 h-5"/>
                            </div>
                        </span>
                    </label>
                </div>
                <div  className={`  cardInfo navBarButton `}>
                    <div className="flex  w-full items-center font-medium gap-3">

                            <div  className="flex rounded-lg items-center justify-center">

                                    <a >
                                        <div  className="w-6 h-6 me-3 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/favorite-desktop.svg"  className="w-6 h-full "/>
                                        </div>
                                    </a>

                            </div>
                            {authState && <div  className="flex  rounded-lg items-center justify-center">

                                    <a >
                                        <div  className="w-6 h-6 me-3 ms-3 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/notification.svg"  className="w-6 h-full "/>
                                        </div>
                                    </a>

                            </div>}

                        {!authState ?

                            <>
                            <div className="flex flex-shrink rounded-lg  items-center justify-center">
                                <Link href="/register">
                                    <a className="btn-primary">Đăng kí</a>
                                </Link>
                            </div>
                            <div className="flex flex-shrink rounded-lg items-center justify-center">
                                <Link href="/login">
                                    <a className="btn-primary ">Đăng nhập</a>
                                </Link>
                            </div>
                            </>
                            :
                            <>

                            <div  className='flex space-x-2 h-full  items-center relative'>
                                <div className="flex items-center w-6 space-x-4 h-full ">
                                    <div className="relative   w-auto auto">
                                        <div  className="w-6 h-6 rounded-full p-1 ring-2 ring-sky-300    overflow-hidden relative">
                                            <Image width="100%" height="100%" layout="fill"   objectFit="contain"

                                                src="/user-toolbar-footer.svg"
                                            />
                                        </div>

                                        <span className="-bottom-1 -right-1 bg-green-400 absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800"></span>
                                    </div>
                                </div>

                                <div  className="labelDrop  relative group " ref={ref}>

                                        <div className="w-fit flex items-center">

                                            <button onClick={handleClick} className="flex items-center truncate ">

                                            </button>

                                            <div className="cursor-pointer h-4 w-3 ml-2 relative" onClick={handleClick} >
                                                <Image width="100%" height="100%" layout="fill" objectFit="contain"    src="/down_button_black.svg" className="cursor-pointer h-4 w-3 ml-2"/>
                                            </div>
                                        </div>

                                        {isComponentVisible &&<div  className={`dropbackground w-[350px] rounded-lg   block"}`}>
                                            <div  className="py-4 px-4 text-sm h-[130px]  text-gray-700 dark:text-gray-200">
                                                   <div className="w-full h-full flex  justify-between gap-2 ">
                                                        <div className="bg-gray-100 flex-[1_0_50%] py-4 p-2 h-full rounded-lg space-y-2">
                                                            <div className="flex items-center gap-1">
                                                                <div className="h-5 w-5 relative">
                                                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/du_an.svg" />
                                                                </div>
                                                                <p>Số tin đăng</p>
                                                            </div>
                                                            <div className="text-lg font-semibold ">0 tin</div>
                                                        </div>
                                                        <div className="bg-gray-100 flex-[1_0_50%] py-4 p-2 h-full rounded-lg space-y-2">
                                                            <div className="flex items-center gap-1">
                                                                <div className="h-5 w-5 relative">
                                                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/du_an.svg"/>
                                                                </div>
                                                                <p>Số tin đăng</p>
                                                            </div>
                                                            <div className="text-lg font-semibold">0 tin</div>
                                                        </div>

                                                   </div>

                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Quản lí tin đăng</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Nạp tiền</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Lịch sử nạp tiền</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Quản lý khuyến mãi</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={()=>naviGate('/profile')} className="w-full">Thông tin tài khoản</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Thay đổi mật khẩu</div>
                                            </div>
                                            <div className="dropItem">
                                                <div onClick={submitLogout} className="w-full">Đăng xuất</div>
                                            </div>
                                        </div>}
                                </div>


                            </div>
                            </>

                        }
                        <div className="flex  bg-pink-700 rounded-lg  items-center justify-center">
                            <Link href="/upload">
                                <a className="btn-primary hover:bg-pink-700 text-white flex flex-row space-x-2  items-center">
                                    <span className="items-center">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/white-edit.svg" className="w-auto h-auto" />
                                        </div>
                                    </span>
                                    <p>Đăng tin</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {patnName  &&
                <div className="w-9/12 bigger:w-7/12 flex flex-row  pt-7  items-center flex-wrap gap-2 ">



                    {/*chọn location*/}
                    <RenderPopUp label="Toàn quốc" className="w-[9rem]" page="Chọn khu vực" img="/khu_vuc.svg">
                        <div className="w-full  bg-slate-50 flex flex-col  items-center     rounded-lg ">
                            {/*slug*/}
                            <div className="w-full flex  px-5 pt-1 gap-3  bg-white">
                                {popUp===1 ?
                                    <div  className="cursor-pointer border-solid border-b-[1px] border-purple-600">
                                        <p className="text-purple-600">Tỉnh/Thành</p>
                                    </div>
                                    :
                                    <div className="cursor-pointer" onClick={()=>setPopUp(1)}>
                                        <p>Tỉnh/Thành</p>
                                    </div>
                                }
                                {popUp===2 ?
                                    <div  className="cursor-pointer border-solid border-b-[1px] border-purple-600">
                                        <p className="text-purple-600">Quận/Huyện</p>
                                    </div>
                                    :
                                    <div className="cursor-pointer" onClick={()=>setPopUp(2)}>
                                        <p>Quận/Huyện</p>
                                    </div>
                                }
                                {popUp===3 ?
                                    <div  className="cursor-pointer border-solid border-b-[1px] border-purple-600">
                                        <p className="text-purple-600">Phường/Xã</p>
                                    </div>
                                    :
                                    <div className="cursor-pointer" onClick={()=>setPopUp(3)}>
                                        <p>Phường/Xã</p>
                                    </div>
                                }

                            </div>
                            {/* body */}
                           <div className={`${popUp===1 ? "flex" :"hidden"} w-full  flex-col   p-5 bg-white rounded-b-lg `}>
                                <div className=" w-full flex flex-col  space-y-4  ">

                                    <div className="relative w-full">
                                        <input   placeholder="Chọn Tỉnh/Thành" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                            className="
                                                w-full text-placeholder
                                                placeholder:text-slate-400
                                                bg-gray-100 pl-9 py-2 pr-10
                                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                border border-slate-300 rounded-lg"
                                                />

                                        <button type="button"

                                            className={`absolute z-[4] top-2 left-2 flex  items-center`}>
                                            <div className="w-6 h-7 relative">
                                                <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                            </div>

                                        </button>
                                    </div>
                                    <div className="overflow-y-auto h-[50vh]    w-full relative ">
                                        <ul className=" p-2 grid gap-1 ">

                                            {cities.map((item:any,index:any):any=>{
                                                return(
                                                    <Fragment key={index}>
                                                        <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                                        >
                                                            <input type="radio" id={"du_an"+index} name="du_an" className=" appearance-none
                                                                    border-[2px] border-gray-300  w-4 h-4
                                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                            <label htmlFor={"du_an"+index} className='font-[500] cursor-pointer w-full  py-2'>
                                                                {item.name}

                                                                <div className={` absolute z-[4] top-2 right-2 flex  items-center`}>
                                                                    <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                                        <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                                    </div>
                                                                </div>
                                                            </label>

                                                        </li>
                                                        <div className=" h-px bg-gray-200 "></div>

                                                    </Fragment>
                                                )
                                            })}


                                        </ul>





                                    </div>
                                </div>
                            </div>
                            <div className={`${popUp===2 ? "flex" :"hidden"} w-full  flex-col   p-5 bg-white rounded-b-lg `}>
                                <div className=" w-full flex flex-col  space-y-4  ">

                                    <div className="relative w-full">
                                        <input   placeholder="Chọn Quận/Huyện" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                            className="
                                                w-full text-placeholder
                                                placeholder:text-slate-400
                                                bg-gray-100 pl-9 py-2 pr-10
                                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                border border-slate-300 rounded-lg"
                                                />

                                        <button type="button"

                                            className={`absolute z-[4] top-2 left-2 flex  items-center`}>
                                            <div className="w-6 h-7 relative">
                                                <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                            </div>

                                        </button>
                                    </div>
                                    <div className="overflow-y-auto h-[50vh]    w-full relative ">
                                    <ul className=" p-2 grid gap-1 ">

                                        {cities.map((item:any,index:any):any=>{
                                            return(
                                                <Fragment key={index}>
                                                    <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                                    >
                                                        <input type="radio" id={"du_an"+index} name="du_an" className=" appearance-none
                                                                border-[2px] border-gray-300  w-4 h-4
                                                                check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                                checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                        <label htmlFor={"du_an"+index} className='font-[500] cursor-pointer w-full  py-2'>
                                                            {item.name}

                                                            <div className={` absolute z-[4] top-2 right-2 flex  items-center`}>
                                                                <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                                    <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                                </div>
                                                            </div>
                                                        </label>

                                                    </li>
                                                    <div className=" h-px bg-gray-200 "></div>

                                                </Fragment>
                                            )
                                        })}


                                    </ul>





                                    </div>
                                </div>
                            </div>
                            <div className={`${popUp===3 ? "flex" :"hidden"} w-full  flex-col   p-5 bg-white rounded-b-lg `}>
                                <div className=" w-full flex flex-col  space-y-4  ">

                                    <div className="relative w-full">
                                        <input   placeholder="Chọn Phường/Xã" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                            className="
                                                w-full text-placeholder
                                                placeholder:text-slate-400
                                                bg-gray-100 pl-9 py-2 pr-10
                                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                                border border-slate-300 rounded-lg"
                                                />

                                        <button type="button"

                                            className={`absolute z-[4] top-2 left-2 flex  items-center`}>
                                            <div className="w-6 h-7 relative">
                                                <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                            </div>

                                        </button>
                                    </div>
                                    <div className="overflow-y-auto h-[50vh]    w-full relative ">
                                    <ul className=" p-2 grid gap-1 ">

                                        {cities.map((item:any,index:any):any=>{
                                            return(
                                                <Fragment key={index}>
                                                    <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                                    >
                                                        <input type="radio" id={"du_an"+index} name="du_an" className=" appearance-none
                                                                border-[2px] border-gray-300  w-4 h-4
                                                                check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                                checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                        <label htmlFor={"du_an"+index} className='font-[500] cursor-pointer w-full  py-2'>
                                                            {item.name}

                                                            <div className={` absolute z-[4] top-2 right-2 flex  items-center`}>
                                                                <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                                    <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                                </div>
                                                            </div>
                                                        </label>

                                                    </li>
                                                    <div className=" h-px bg-gray-200 "></div>

                                                </Fragment>
                                            )
                                        })}


                                    </ul>





                                    </div>
                                </div>
                            </div>
                        </div>
                    </RenderPopUp>

                    {/*chọn prices*/}
                    <RenderPopUp label="Giá thuê" page="Giá cho thuê" className="w-[5.75rem]" filter={true}>
                            <div className="w-full  space-y-8 flex flex-col  p-5 bg-white rounded-b-lg ">
                                <RangeSlider
                                        initialMin={0}
                                        initialMax={2000}
                                        min={0}
                                        max={2000}
                                        step={100}
                                        priceGap={100}
                                        label="Từ 0 - 50 triệu"
                                />
                                <div className="h-[50vh] relative">
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="flex-shrink text-[14px] text-gray-400   font-light">Hoặc chọn nhanh khoảng giá</span>
                                            <div className="flex-grow h-px bg-gray-200 "></div>
                                        </div>
                                    </div>
                                    <ul className="p-2 grid grid-cols-3 ">
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500  "
                                        >
                                            <input type="radio" id="0."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="0." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                Tất cả
                                            </label>
                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500  "
                                        >
                                            <input type="radio" id="1."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="1." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                Dưới 3 triệu
                                            </label>
                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500  "
                                        >
                                            <input type="radio" id="2."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="2." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                3 - 5 triệu
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="3."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="3." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                5 - 7 triệu
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="4."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="4." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                7 - 10 triệu
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="5."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="5." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                10 - 15 triệu
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="6."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="6." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                15 - 30 triệu
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="7."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="7." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                30 - 50 triệu
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="8."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="8." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                Trên 50 triệu
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="9."  name="prices" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="9." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                Thỏa thuận
                                            </label>

                                        </li>




                                    </ul>
                                   <div className="absolute bottom-0 w-full">
                                            <button className="w-full  text-white font-semibold rounded-full p-2 bg-pink-500">Áp dụng</button>
                                   </div>
                                </div>
                            </div>
                    </RenderPopUp>

                    {/*chọn ares*/}
                    <RenderPopUp label="Diện tích" page="Diện tích" className="w-[5.75rem]" filter={true}>
                            <div className="w-full  space-y-8 flex flex-col  p-5 bg-white rounded-b-lg ">
                                <RangeSlider
                                    initialMin={0}
                                    initialMax={2100}
                                    min={0}
                                    max={2100}
                                    step={105}
                                    priceGap={106}
                                    label="Từ 0 - 500 m2"
                                />
                                <div className="h-[50vh] relative">
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="flex-shrink text-[14px] text-gray-400   font-light">Hoặc chọn nhanh diện tích</span>
                                            <div className="flex-grow h-px bg-gray-200 "></div>
                                        </div>
                                    </div>
                                    <ul className="p-2 grid grid-cols-3 ">
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500  "
                                        >
                                            <input type="radio" id="0."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="0." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                Tất cả
                                            </label>
                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500  "
                                        >
                                            <input type="radio" id="1.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="1.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                Dưới 30 m<sup>2</sup>
                                            </label>
                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500  "
                                        >
                                            <input type="radio" id="2.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="2.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                30 - 50 m<sup>2</sup>
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="3.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="3.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                50 - 70 m<sup>2</sup>
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="4.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="4.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                70 - 100 m<sup>2</sup>
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="5.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="5.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                100 - 150 m<sup>2</sup>
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="6.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="6.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                150 - 200 m<sup>2</sup>
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="7.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="7.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                200 - 300 m<sup>2</sup>
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="8.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="8.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                300 - 500 m<sup>2</sup>
                                            </label>

                                        </li>
                                        <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer  hover:text-purple-500 "
                                        >
                                            <input type="radio" id="9.."  name="areas" className=" appearance-none
                                                    border-[2px] border-gray-300  w-4 h-4
                                                    check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                    checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                            <label htmlFor="9.." className='font-[500] text-[15px] cursor-pointer w-full  py-2'>
                                                Trên 500 m<sup>2</sup>
                                            </label>

                                        </li>




                                    </ul>
                                    <div className="absolute bottom-0 w-full">
                                        <button className="w-full  text-white font-semibold rounded-full p-2 bg-pink-500">Áp dụng</button>
                                   </div>
                                </div>
                            </div>
                    </RenderPopUp>

                    {/*chọn room*/}
                    <RenderPopUp label="Số phòng ngủ" page="Số phòng ngủ" className="w-[7.5rem] " filter={true}>
                        <div className="w-full  space-y-8 flex flex-col  p-5 bg-white rounded-b-lg ">
                            <div className="h-[60vh] relative">
                                <div>
                                    <div className="flex items-center gap-1">
                                        <span className="flex-shrink text-[14px] text-gray-400   font-light">Chọn số phòng ngủ</span>

                                    </div>
                                </div>
                                <ul className="py-2 grid grid-cols-1 gap-3">
                                    <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer bg-sky-50 border-gray-100 border-solid border-[2px] rounded-lg px-3 hover:text-purple-500 "
                                    >
                                        <input type="checkbox" id="0...."  name="room" className=" appearance-none
                                                border-[2px] border-gray-300  w-5 h-5 rounded-md
                                                 text-purple-500 bg-white focus:ring-purple-500
                                                checked:border-none  checked:!bg-purple-500  peer"/>
                                        <label htmlFor="0...." className='font-[500] text-[15px] cursor-pointer w-full peer-checked:font-bold  py-2'>
                                            1 phòng ngủ
                                        </label>

                                    </li>
                                    <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer bg-sky-50 border-gray-100 border-solid border-[2px] rounded-lg px-3 hover:text-purple-500 "
                                    >
                                        <input type="checkbox" id="1...."  name="room" className=" appearance-none
                                                border-[2px] border-gray-300  w-5 h-5 rounded-md
                                                 text-purple-500 bg-white focus:ring-purple-500
                                                checked:border-none  checked:!bg-purple-500  peer"/>
                                        <label htmlFor="1...." className='font-[500] text-[15px] cursor-pointer w-full peer-checked:font-bold  py-2'>
                                            2 phòng ngủ
                                        </label>

                                    </li>
                                    <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer bg-sky-50 border-gray-100 border-solid border-[2px] rounded-lg px-3 hover:text-purple-500 "
                                    >
                                        <input type="checkbox" id="2...."  name="room" className=" appearance-none
                                                border-[2px] border-gray-300  w-5 h-5 rounded-md
                                                 text-purple-500 bg-white focus:ring-purple-500
                                                checked:border-none  checked:!bg-purple-500  peer"/>
                                        <label htmlFor="2...." className='font-[500] text-[15px] cursor-pointer w-full peer-checked:font-bold  py-2'>
                                            3 phòng ngủ
                                        </label>

                                    </li>
                                    <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer bg-sky-50 border-gray-100 border-solid border-[2px] rounded-lg px-3 hover:text-purple-500 "
                                    >
                                        <input type="checkbox" id="3...."  name="room" className=" appearance-none
                                                border-[2px] border-gray-300  w-5 h-5 rounded-md
                                                 text-purple-500 bg-white focus:ring-purple-500
                                                checked:border-none  checked:!bg-purple-500  peer"/>
                                        <label htmlFor="3...." className='font-[500] text-[15px] cursor-pointer w-full peer-checked:font-bold  py-2'>
                                            4 phòng ngủ
                                        </label>

                                    </li>
                                    <li className=" flex items-center gap-2
                                          text-base relative cursor-pointer bg-sky-50 border-gray-100 border-solid border-[2px] rounded-lg px-3 hover:text-purple-500 "
                                    >
                                        <input type="checkbox" id="4...."  name="room" className=" appearance-none
                                                border-[2px] border-gray-300  w-5 h-5 rounded-md
                                                 text-purple-500 bg-white focus:ring-purple-500
                                                checked:border-none  checked:!bg-purple-500  peer"/>
                                        <label htmlFor="4...." className='font-[500] text-[15px] cursor-pointer w-full peer-checked:font-bold  py-2'>
                                            5+ phòng ngủ
                                        </label>

                                    </li>
                                </ul>

                                <div className="absolute bottom-0 w-full">
                                        <button className="w-full  text-white font-semibold rounded-full p-2 bg-pink-500">Áp dụng</button>
                                </div>
                            </div>
                        </div>
                    </RenderPopUp>

                    {/*chọn du_an*/}
                    <RenderPopUp label="Dự án" page="Dự án" className="w-[5rem]" filter={true}>
                        <div className="w-full  space-y-8 flex flex-col  p-5  bg-white rounded-b-lg ">

                            <div className=" w-full flex flex-col  space-y-4  ">
                                <div className="relative w-full">
                                    <input   placeholder="Tìm dự án" type="text" onChange={e => setChange(e.target.value)}  value={change} autoComplete="off"
                                        className="
                                            w-full text-placeholder
                                            placeholder:text-slate-400
                                            bg-gray-100 pl-9 py-2 pr-10
                                            shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                            border border-slate-300 rounded-lg"
                                            />

                                    <button type="button"

                                        className={`absolute z-[4] top-2 left-2 flex  items-center`}>
                                        <div className="w-6 h-7 relative">
                                            <Image  layout="fill" objectFit="contain"   src="/search_grey.svg" />
                                        </div>

                                    </button>
                                </div>
                                <div className="overflow-y-auto h-[50vh]    w-full relative ">
                                    <ul className=" p-2 grid gap-1 ">

                                        {cities.map((item:any,index:any):any=>{
                                            return(
                                                <Fragment key={index}>
                                                    <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                                    >
                                                        <input type="radio" id={"du_an"+index} name="du_an" className=" appearance-none
                                                                border-[2px] border-gray-300  w-4 h-4
                                                                check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                                checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                        <label htmlFor={"du_an"+index} className='font-[500] cursor-pointer w-full  py-2'>
                                                            {item.name}

                                                            <div className={` absolute z-[4] top-2 right-2 flex  items-center`}>
                                                                <div className="w-4 h-7 relative -rotate-90 opacity-50">
                                                                    <Image  layout="fill" objectFit="contain"   src="/down_button_black.svg" />
                                                                </div>
                                                            </div>
                                                        </label>

                                                    </li>
                                                    <div className=" h-px bg-gray-200 "></div>

                                                </Fragment>
                                            )
                                        })}


                                    </ul>
                                </div>
                            </div>

                        </div>
                    </RenderPopUp>

                    {/*loại hình căn hộ*/}
                    <RenderPopUp label="Loại hình căn hộ" page="Loại hình căn hộ" className="w-[8.5rem]" filter={true}>
                        <div className="w-full  space-y-8 flex flex-col  p-5  bg-white rounded-b-lg ">
                            <div className=" w-full flex flex-col  space-y-4  ">
                                <div className="overflow-y-auto h-[60vh]    w-full relative ">
                                    <ul className=" p-2 grid gap-1 ">
                                        <Fragment >
                                            <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                            >
                                                <input type="radio" id={"TypeOfApartment"+0} name="TypeOfApartment" className=" appearance-none
                                                        border-[2px] border-gray-300  w-4 h-4
                                                        check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                        checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                <label htmlFor={"TypeOfApartment"+0} className='font-[500] cursor-pointer w-full  py-2'>
                                                    Tất cả
                                                </label>

                                            </li>
                                            <div className=" h-px bg-gray-200 "></div>

                                            <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                            >
                                                <input type="radio" id={"TypeOfApartment"+1} name="TypeOfApartment" className=" appearance-none
                                                        border-[2px] border-gray-300  w-4 h-4
                                                        check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                        checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                <label htmlFor={"TypeOfApartment"+1} className='font-[500] cursor-pointer w-full  py-2'>
                                                    Chung cư
                                                </label>

                                            </li>
                                            <div className=" h-px bg-gray-200 "></div>

                                            <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                            >
                                                <input type="radio" id={"TypeOfApartment"+2} name="TypeOfApartment" className=" appearance-none
                                                        border-[2px] border-gray-300  w-4 h-4
                                                        check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                        checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                <label htmlFor={"TypeOfApartment"+2} className='font-[500] cursor-pointer w-full  py-2'>
                                                    Duplex
                                                </label>

                                            </li>
                                            <div className=" h-px bg-gray-200 "></div>

                                            <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                            >
                                                <input type="radio" id={"TypeOfApartment"+3} name="TypeOfApartment" className=" appearance-none
                                                        border-[2px] border-gray-300  w-4 h-4
                                                        check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                        checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                <label htmlFor={"TypeOfApartment"+3} className='font-[500] cursor-pointer w-full  py-2'>
                                                    Penthouse
                                                </label>

                                            </li>
                                            <div className=" h-px bg-gray-200 "></div>

                                            <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                            >
                                                <input type="radio" id={"TypeOfApartment"+4} name="TypeOfApartment" className=" appearance-none
                                                        border-[2px] border-gray-300  w-4 h-4
                                                        check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                        checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                <label htmlFor={"TypeOfApartment"+4} className='font-[500] cursor-pointer w-full  py-2'>
                                                    Căn hộ dịch vụ, mini
                                                </label>

                                            </li>
                                            <div className=" h-px bg-gray-200 "></div>

                                            <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                            >
                                                <input type="radio" id={"TypeOfApartment"+5} name="TypeOfApartment" className=" appearance-none
                                                        border-[2px] border-gray-300  w-4 h-4
                                                        check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                        checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                <label htmlFor={"TypeOfApartment"+5} className='font-[500] cursor-pointer w-full  py-2'>
                                                   Tập thể, cư xá
                                                </label>

                                            </li>
                                            <div className=" h-px bg-gray-200 "></div>

                                            <li className=" flex  items-center gap-2  text-base relative cursor-pointer  hover:text-purple-500 hover:bg-gray-200 hover:rounded-lg"
                                            >
                                                <input type="radio" id={"TypeOfApartment"+6} name="TypeOfApartment" className=" appearance-none
                                                        border-[2px] border-gray-300  w-4 h-4
                                                        check-shadow text-purple-500 bg-white focus:ring-purple-500
                                                        checked:border-purple-500 checked:!bg-purple-500  checked:check-shadow "/>
                                                <label htmlFor={"TypeOfApartment"+6} className='font-[500] cursor-pointer w-full  py-2'>
                                                   Officetel
                                                </label>

                                            </li>
                                            <div className=" h-px bg-gray-200 "></div>

                                        </Fragment>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </RenderPopUp>


                    {/*lọc thêm*/}
                    <RenderPopUp label="Lọc thêm" page="Lọc thêm" className="w-[5.75rem]" filter={true} img="/fillter-black.svg">
                        <div className="w-full  space-y-8 flex flex-col  p-5 pt-0 bg-white rounded-b-lg ">
                            <div className=" w-full flex flex-col  space-y-4  ">
                                <div className="overflow-y-auto h-[60vh]    w-full relative ">
                                    <div className="space-y-3 py-4">
                                        <p className="font-semibold  text-[14px]">Số phòng vệ sinh</p>
                                        <div className="gap-2 flex select-none w-full">
                                            <div className="">
                                                <input type="checkbox" id="wc1" name="wc" className=" peer hidden"  />
                                                <label htmlFor="wc1" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>1</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="wc2" name="wc"  className=" peer hidden"  />
                                                <label htmlFor="wc2" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>2</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="wc3" name="wc"  className=" peer hidden"  />
                                                <label htmlFor="wc3" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>3</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="wc4" name="wc"  className=" peer hidden"  />
                                                <label htmlFor="wc4" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>4</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="wc5" name="wc"  className=" peer hidden"  />
                                                <label htmlFor="wc5" className="cursor-pointer text-[12px] h-10 w-10 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>5 +</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" h-px bg-gray-200 "></div>

                                    <div className="space-y-3 py-4">
                                        <p className="font-semibold  text-[14px]">Tình trạng nội thất</p>
                                        <div className="gap-2 flex flex-wrap select-none w-full">
                                            <div className="">
                                                <input type="radio" id="status1" name="status" className=" peer hidden"  />
                                                <label htmlFor="status1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>Tất cả</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="status2" name="status"  className=" peer hidden"  />
                                                <label htmlFor="status2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Cao cấp</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="status3" name="status"  className=" peer hidden"  />
                                                <label htmlFor="status3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100  rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Đầy đủ</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="status4" name="status"  className=" peer hidden"  />
                                                <label htmlFor="status4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Cơ bản</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="status5" name="status"  className=" peer hidden"  />
                                                <label htmlFor="status5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Chưa có</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" h-px bg-gray-200 "></div>

                                    <div className="space-y-3 py-4">
                                        <p className="font-semibold  text-[14px]">Hướng cửa chính</p>
                                        <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction1" name="main_door_direction" className=" peer hidden"  />
                                                <label htmlFor="main_door_direction1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>Tất cả</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction2" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Đông</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction3" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100  rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Tây</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction4" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Nam</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction5" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Bắc</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction6" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction6" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Đông Bắc</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction7" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction7" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Đông Nam</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction8" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction8" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Tây Nam</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="main_door_direction9" name="main_door_direction"  className=" peer hidden"  />
                                                <label htmlFor="main_door_direction9" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Tây Bắc</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" h-px bg-gray-200 "></div>

                                    <div className="space-y-3 py-4">
                                        <p className="font-semibold  text-[14px]">Hướng ban công</p>
                                        <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction1" name="balcony_direction" className=" peer hidden"  />
                                                <label htmlFor="balcony_direction1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>Tất cả</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction2" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Đông</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction3" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100  rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Tây</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction4" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Nam</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction5" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Bắc</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction6" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction6" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Đông Bắc</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction7" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction7" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Đông Nam</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction8" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction8" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Tây Nam</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="balcony_direction9" name="balcony_direction"  className=" peer hidden"  />
                                                <label htmlFor="balcony_direction9" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Tây Bắc</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" h-px bg-gray-200 "></div>


                                    <div className="space-y-3 py-4">
                                        <p className="font-semibold  text-[14px]">Đặc điểm căn hộ</p>
                                        <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                            <div className="">
                                                <input type="checkbox" id="dac_diem1" name="dac_diem" className=" peer hidden"  />
                                                <label htmlFor="dac_diem1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>Căn góc</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="checkbox" id="dac_diem2" name="dac_diem"  className=" peer hidden"  />
                                                <label htmlFor="dac_diem2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Tin có video</p>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" h-px bg-gray-200 "></div>

                                    <div className="space-y-3 py-4">
                                        <p className="font-semibold  text-[14px]">Người đăng tin</p>
                                        <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                            <div className="">
                                                <input type="radio" id="individual_broker1" name="individual_broker" className=" peer hidden"  />
                                                <label htmlFor="individual_broker1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>Môi giới</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="individual_broker2" name="individual_broker"  className=" peer hidden"  />
                                                <label htmlFor="individual_broker2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>Cá nhân</p>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" h-px bg-gray-200 "></div>

                                    <div className="space-y-3 py-4">
                                        <p className="font-semibold  text-[14px]">Ngày đăng tin</p>
                                        <div className="gap-x-2 gap-y-4 flex flex-wrap select-none w-full">
                                            <div className="">
                                                <input type="checkbox" id="time_day1" name="time_day" className=" peer hidden"  />
                                                <label htmlFor="time_day1" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-full font-normal peer-hover:bg-red-200">
                                                    <p>Tất cả</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="time_day2" name="time_day"  className=" peer hidden"  />
                                                <label htmlFor="time_day2" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>1 ngày</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="time_day3" name="time_day"  className=" peer hidden"  />
                                                <label htmlFor="time_day3" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>3 ngày</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="time_day4" name="time_day"  className=" peer hidden"  />
                                                <label htmlFor="time_day4" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>5 ngày</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="time_day5" name="time_day"  className=" peer hidden"  />
                                                <label htmlFor="time_day5" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>7 ngày</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="time_day6" name="time_day"  className=" peer hidden"  />
                                                <label htmlFor="time_day6" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>15 ngày</p>
                                                </label>
                                            </div>
                                            <div className="">
                                                <input type="radio" id="time_day7" name="time_day"  className=" peer hidden"  />
                                                <label htmlFor="time_day7" className="cursor-pointer text-[12px] h-10 px-4 py-2 flex justify-center items-center peer-checked:bg-red-200   bg-slate-100   rounded-3xl font-normal peer-hover:bg-red-200">
                                                    <p>30 ngày</p>
                                                </label>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="space-y-3 py-4">

                                        <button className="w-full  text-white font-semibold rounded-full p-2 bg-pink-500">Áp dụng</button>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </RenderPopUp>

                    <div className="h-full flex flex-shrink">

                        <button onClick={resetFilter} className="  btn-primary flex border-gray-400 ">
                            <div  className="h-5 w-5 mr-2 relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/reset_fillter.svg" className="h-5 w-5 mr-2"/>
                            </div>
                        Đặt lại</button>
                    </div>

                </div>
            }


        </header>
    )
}
export default Header;
