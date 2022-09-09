
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '../fakedata';
import useDevice from '../hooks/useDevice';
import { NextPageWithLayout } from '../page';
const CardHome=  dynamic(() => import('../components/cards/card'),{ssr:false})
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'),{ssr:false})

type RenderPopUp = {

    children: React.ReactNode;
}

const RenderPopUp=()=>{
    return(
        <div className="col-span-6 h-48 ">
            <div className="relative w-full h-full">
                <div className="absolute inset-y-[38%] inset-x-[40%] right-[1rem] z-[2] w-[4rem] h-[4rem] rounded-full  flex justify-center items-center">
                    <div className="relative h-full w-full">
                        <Image layout="fill" src="/play-button.svg" className="rounded-lg"/>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <Image layout="fill" src="/test.jpg" className="rounded-lg"/>
                </div>
                <div className=" absolute  bottom-2 right-2 opacity-90">
                    <div className="gap-2 flex ">
                        <div className="bg-gray-700  rounded-md p-1  flex items-end">
                            <div className="flex  items-center gap-1">
                                <div className="h-5 w-3 relative">
                                    <Image layout='fill' src="/video_thumb_white.svg" className="h-5 w-3 rounded-md mb-[2px]"/>
                                </div>
                                <p className="text-white opacity-80 cardText ">2</p>
                            </div>

                        </div>
                        <div className="bg-gray-700 rounded-md p-1 flex items-end" >
                            <div className="flex  items-center gap-1">
                                <div className="h-4 w-3 relative">
                                    <Image layout='fill' src="/images_thumb_white.svg" className="h-4 w-3 rounded-md"/>
                                </div>
                                <p className="text-white opacity-80 cardText">2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const ProductDetailPage:NextPageWithLayout=()=>{
    const {isMobile} =useDevice()
    return(
        <div className={`flex flex-col ${!isMobile&&"mt-[5.5rem]"}  justify-center  mb-[6rem] `}>
            <div className="home-row py-2 mb-3 tablet:mb-0 tablet:py-3">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} flex items-center  gap-4`}>
                    <button className="text-[14px] tablet:hidden flex items-center border-solid border-gray-300 border-[1px] p-1 rounded-lg px-2 pl-0">
                        <div className="relative h-6 w-6  rotate-90">
                            <Image  layout="fill" objectFit="contain" src="/down_button_grey.svg"/>
                        </div>
                        Về danh sách
                    </button>
                    <ol className="  flex items-center text-sm mt-1">
                        <li className="pathMenu ">

                            <Link href="/" >
                                <a className="text-purple-600 tablet:text-[10px]">Cho thuê căn hộ</a>
                            </Link>
                        </li>
                        <li className="pathMenu ">

                            <Link href="/" >
                                <a className="text-purple-600 tablet:text-[10px]">Hồ Chí Minh</a>
                            </Link>
                        </li>
                        <li className="pathMenu ">

                            <Link href="/" >
                                <a className="text-purple-600 tablet:text-[10px]">Quận 9</a>
                            </Link>
                        </li>
                        <li className="">


                            <a className="text-purple-600 tablet:text-[10px]">Vinhomes Grand Park</a>

                        </li>


                    </ol>

                </div>

            </div>

            <div className="home-row py-2  tablet:px-0 tablet:py-1 ">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} grid grid-cols-6   rounded-lg gap-4 `}>
                    {!isMobile ?
                        <>
                        <div className="col-span-4  rounded-lg">
                            <video controls  className="rounded-lg w-full h-full">
                                <source src="/testvideo.mkv" />
                            </video>


                        </div>
                        <div className="col-span-2  rounded-lg">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-y-[46%] right-[1rem] z-[2] w-7 h-7 rounded-full bg-white flex justify-center items-center">
                                    <div className="relative h-6 w-6 -rotate-90">
                                        <Image layout="fill" src="/down_button_grey.svg" className="rounded-lg"/>
                                    </div>
                                </div>
                                <div className="relative w-full h-full">
                                    <Image layout="fill" src="/test.jpg" className="rounded-lg"/>
                                </div>
                            </div>

                        </div>
                        </>
                        :
                        <div className="col-span-6 h-48 ">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-y-[38%] inset-x-[40%] right-[1rem] z-[2] w-[4rem] h-[4rem] rounded-full  flex justify-center items-center">
                                    <div className="relative h-full w-full">
                                        <Image layout="fill" src="/play-button.svg" className="rounded-lg"/>
                                    </div>
                                </div>
                                <div className="relative w-full h-full">
                                    <Image layout="fill" src="/test.jpg" className="rounded-lg"/>
                                </div>
                                <div className=" absolute  bottom-2 right-2 opacity-90">
                                    <div className="gap-2 flex ">
                                        <div className="bg-gray-700  rounded-md p-1  flex items-end">
                                            <div className="flex  items-center gap-1">
                                                <div className="h-5 w-3 relative">
                                                    <Image layout='fill' src="/video_thumb_white.svg" className="h-5 w-3 rounded-md mb-[2px]"/>
                                                </div>
                                                <p className="text-white opacity-80 cardText ">2</p>
                                            </div>

                                        </div>
                                        <div className="bg-gray-700 rounded-md p-1 flex items-end" >
                                            <div className="flex  items-center gap-1">
                                                <div className="h-4 w-3 relative">
                                                    <Image layout='fill' src="/images_thumb_white.svg" className="h-4 w-3 rounded-md"/>
                                                </div>
                                                <p className="text-white opacity-80 cardText">2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>
            <div className="home-row py-2 mb-6 ">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} grid grid-cols-6 gap-4 `}>
                    <div className={`${!isMobile ? "col-span-4" : "col-span-6"} space-y-4`}>
                        <div className="w-full">
                            <p className="font-bold text-[18px] tablet:text-[16px] mb-6 tablet:mb-3">Cho thuê căn hộ cao cấp tại Vinhomes Grand Parks Q9, giá rẻ nhất hộ cao cấp tại Vinh thị trường</p>
                            {isMobile &&
                                <p className="text-gray-500 mb-3">Thứ Hai, 1/8/2022 <sup>. </sup> 08:57</p>
                            }
                            <div className="flex justify-between tablet:mb-3">
                                <h2 className="text-[18px]  text-base font-semibold text-purple-600  ">5 triệu/tháng</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {!isMobile ?
                                        <>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/favorite-desktop.svg"/>
                                            </div>
                                                Lưu tin
                                            </button>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/share.svg"/>
                                            </div>
                                            Chia sẻ</button>
                                        </>
                                        :
                                        <>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                        <div className="relative h-4 w-4">
                                            <Image  layout="fill" src="/favorite-desktop.svg"/>
                                        </div>

                                        </button>
                                        <button className="bg-white font-[500]  flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/share.svg"/>
                                            </div>
                                            </button>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="w-full mb-6 tablet:mb-4">
                                <div className="flex gap-8">
                                    <div className="flex  items-center gap-2">
                                        <div className="relative h-4 w-4">
                                            <Image layout="fill" src="/bedroom_small.svg"/>
                                        </div>
                                        <p className="font-semibold"> 2 PN</p>
                                    </div>
                                    <div className="flex  items-center gap-2">
                                        <div className="relative h-4 w-4">
                                            <Image layout="fill" src="/phong_tam.svg"/>
                                        </div>
                                        <p className="font-semibold"> 2 WC</p>
                                    </div>
                                    <div className="flex  items-center gap-2">
                                        <div className="relative h-4 w-4">
                                            <Image layout="fill" src="/dien_tich.svg"/>
                                        </div>
                                        <p className="font-semibold"> 65  m<sup>2</sup></p>
                                    </div>
                                </div>
                            </div>
                            {!isMobile && <div className="w-full flex items-center gap-2 mb-4">
                                <div className="relative h-4 w-5">
                                    <Image layout="fill"  src="/time-icon.svg"/>
                                </div>
                                <p className="text-gray-500">Thứ Hai, 1/8/2022 <sup>. </sup> 08:57</p>
                            </div>}
                            <div className="w-full flex gap-2  mb-6">
                                {!isMobile && <div className=" relative h-5 w-5">
                                    <Image layout="fill"  src="/location_icon.svg"/>
                                </div>}
                                <p className="text-gray-500 ">Dự á Vinhomes Grand Parks, Đường Nguyễn Xiển, Phường Long Thạnh Mỹ, Quận 9, Hồ Chí Minh</p>
                            </div>

                        </div>
                        <div className=" h-px bg-gray-200 "></div>

                        <div className="w-full">
                            <p className="font-bold text-[18px] tablet:text-[16px] mb-6">Thông tin chi tiết</p>

                            <div className={`w-full grid ${!isMobile ? "grid-cols-3" : "grid-cols-2"} gap-4 tablet:text-[16px]`}>

                                    <div>
                                        <p className="text-gray-500">Kiểu người đăng tin</p>
                                        <p className="text-lg">Môi giới</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Số phòng ngủ</p>
                                        <p className="text-lg ">2</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Đặc điểm căn hộ</p>
                                        <p className="text-lg">Căn góc</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Hướng cửa ban công</p>
                                        <p className="text-lg">Tây</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Thời gian thuê tối thiểu</p>
                                        <p className="text-lg"> 6 tháng</p>
                                    </div>


                                    <div>
                                        <p className="text-gray-500">Loại hình căn hộ</p>
                                        <p className="text-lg">Chung cư</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Số phòng vệ sinh</p>
                                        <p className="text-lg">1</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Tiền đặt cọc</p>
                                        <p className="text-lg">14,5 triệu</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Tầng thứ</p>
                                        <p className="text-lg">12</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Kì thanh toán</p>
                                        <p className="text-lg"> 1 tháng/lần</p>
                                    </div>


                                    <div>
                                        <p className="text-gray-500">Diện tích</p>
                                        <p className="text-lg">250 m<sup>2</sup></p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Tình trạng nội thất</p>
                                        <p className="text-lg">Đầy đủ</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Hướng cửa chính</p>
                                        <p className="text-lg">Đông Bắc</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Block/Tháp</p>
                                        <p className="text-lg">S3.01</p>
                                    </div>


                            </div>
                        </div>
                        <div className=" h-px bg-gray-200 "></div>


                        <div className="w-full">
                            <p className="font-bold text-[18px] tablet:text-[16px] mb-4">Thông tin mô tả</p>
                            <div className="tablet:text-[14px]">
                                <p >
                                    Cần cho thuê căn hộ cao cấp tại Vinhomes Grand Park Quận 9 hướng mát không bắt nắng nhiều
                                    <br/>
                                    View đẹp, hướng mát không bắt nắng
                                    <br/>
                                    Gần làng đại học Thủ Đức, đại học Sư phạm kỹ thuật, FPT, khu công nghệ đại học Thủ Đức, đại học cao,....
                                    <br/>
                                    Đầy đủ wifi, máy lạnh,... thuê căn hộ cao cấp tại Vinhomes Grand Park Quận 9 hướng mát không
                                    <br/>
                                    Được hưởng nhiều tiện ích: hồ bơi miễn phí, các sân tập thể thao, khu vui chơi giấc tự do, an ninh trẽ em nội khu,....
                                    <br/>
                                    Giờ giấc tự do, an ninh 24/7, có thẻ pass ra vào cửa <span className="bg-gray-200 p-1 px-2">0847 589 *** <button className="bg-purple-800 text-white rounded-md px-2">Hiện số</button></span>
                                    <br/>
                                    Có các loại căn:
                                    <br/>
                                    - Studio: 4tr-6tr5
                                    <br/>
                                    - 1pn: 5tr-7tr5
                                    <br/>
                                    - 2pn: 5tr5-10tr
                                    <br/>
                                    - 3pn: 7tr-15tr

                                </p>
                            </div>
                        </div>
                        <div className=" h-px bg-gray-200 "></div>

                        <div className="w-full">
                            <div className="flex">
                                <div className="flex gap-2">
                                    <div className="relative h-6 w-6">
                                        <Image layout="fill"  src="/location_icon.svg"/>
                                    </div>
                                    <p className="text-purple-500 font-semibold tablet:text-[16px]">Xem trên bản đồ</p>
                                </div>
                                <div className="relative h-6 w-6 -rotate-90 ml-auto">
                                        <Image layout="fill"  src="/down_button_grey.svg"/>
                                </div>
                            </div>
                        </div>
                        <div className=" h-px bg-gray-200 "></div>

                        <div className="w-full ">
                            <p className="font-bold text-[18px] tablet:text-[16px]">Tìm căn hộ theo từ khóa</p>
                            <div className="w-full py-6">
                                <ul className="flex flex-wrap w-full gap-x-2 gap-y-5 tablet:text-[14px]">
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thuê căn hộ Vinhomes Grand Parks Quận 9</a>
                                    </li>
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thuê căn hộ Quận 9</a>
                                    </li>
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thuê căn hộ Hồ Chí Minh</a>
                                    </li>
                                    <li>
                                        <a className="bg-gray-200 px-4 py-2 rounded-full">Cho thuê căn hộ Phường Long Thạnh Mỹ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full border-solid border-gray-300 rounded-lg border-[1px] p-4 px-6 ">
                            <div className={`flex items-center ${isMobile && "flex-col gap-3"} justify-between`}>
                                <div className="flex gap-2 items-center">
                                    <div className="relative h-9 w-9 ">
                                        <Image layout="fill"  src="/verified.svg"/>
                                    </div>
                                    <div>
                                        <p className="text-[15px] tablet:text-[14px]"><span className="text-green-500">Mã tin 68095286 </span>này đã được duyệt đăng</p>
                                        <p className="text-[15px] tablet:text-[14px]">Nếu bạn gặp vấn đề vui lòng báo vi phạm </p>
                                    </div>

                                </div>
                                <button className={`bg-white ${isMobile && "w-full justify-center"} font-[500] flex gap-2 items-center text-black border-solid border-[1px] border-gray-300 p-1 px-3 rounded-lg`}>
                                        <div className="relative h-5 w-5">
                                            <Image  layout="fill" src="/report.svg"/>
                                        </div>
                                        Báo vi phạm</button>
                            </div>
                        </div>

                    </div>

                    <div className={`col-span-2 ${isMobile && "hidden"}`}>
                        <div className="w-fit p-2 ml-auto flex items-center gap-2 font-[500] text-[12px] bg-slate-200 rounded-t-md">
                            <div className="relative h-4 w-4">
                                <Image  layout="fill" src="/nguoi_dang_tin.svg"/>
                            </div>
                            Người đăng
                        </div>
                        <div className="shadow-e2  w-[85%] ml-auto bg-[#fefefe] p-4 py-6 rounded-l-md rounded-b-md mt-4">
                            <div className="relative w-auto h-auto space-y-4">
                                <div className="flex  space-x-4 ">
                                    <div className="relative w-auto h-full">
                                        <div  className="w-[4rem] h-[4rem] rounded-full  p-1 ring-2 ring-sky-300 overflow-hidden relative">
                                            <Image  layout="fill" objectFit="contain"
                                                src="/user-toolbar-footer.svg"
                                            />
                                        </div>
                                        <span className="-bottom-0 -right-0 bg-green-400 absolute h-4 w-4 rounded-full border-2 border-white dark:border-gray-800"></span>
                                    </div>
                                    <div >
                                        <h2 className="font-bold">Vũ Nhi</h2>
                                        <p className="text-[14px]">9 tin đang rao</p>
                                        <p className="text-purple-500 text-[14px]">Xem trang cá nhân</p>
                                    </div>
                                </div>
                                <div className="w-full space-y-4">
                                    <button className="text-[12px] grid grid-cols-2 w-full tablet:text-[10px] p-3  gap-2  bg-purple-600 text-white font-semibold rounded-lg text-center  ">
                                        <div className="flex items-center gap-1">
                                            <div className="relative h-4 w-4">
                                                <Image  layout="fill" src="/phone_purple.svg"/>
                                            </div>
                                            0961 643 xxx
                                        </div>
                                        <div className=" tablet:text-[10px]">
                                            Bấm để hiện số
                                        </div>
                                    </button>
                                    <button className="text-[12px] flex justify-center items-center w-full tablet:text-[10px] p-2 px-3  gap-2  bg-white border-solid border-gray-300 border-[1px] font-semibold rounded-lg text-center  ">

                                        <div className="relative h-4 w-4">
                                            <Image  layout="fill" src="/zalo.svg"/>
                                        </div>
                                        Gửi yêu cầu
                                    </button>
                                    <button className="text-[12px] flex justify-center items-center w-full tablet:text-[10px] p-2 px-3  gap-2  bg-white border-solid border-gray-300 border-[1px] font-semibold rounded-lg text-center  ">

                                        <div className="relative h-4 w-4">
                                            <Image  layout="fill" src="/zalo.svg"/>
                                        </div>
                                        Nhắn tin Zalo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div  className="home-row py-2 mb-4">
                <div className={`${!isMobile ? "w-9/12" : "w-full"} h-px bg-gray-200 `}></div>
            </div>

            <div className="home-row py-2 mb-6 ">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12">
                    <div className="flex  w-full justify-between">


                        <div className="flex flex-row items-center space-x-2">
                            <div  className="w-5 h-5 relative" >
                            <Image  layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                            </div>
                            <h2 className="font-bold">Tin đăng cùng khu vực</h2>
                        </div>



                        <div className="flex items-center">
                            <Link href="/tin-tuc">
                                <a className="text-sm font-bold text-purple-700 flex gap-2">Xem tất cả
                                    <div className="h-5 w-4  relative">
                                        <Image  layout="fill"  src="/arrow-red.svg" className="h-5 w-8 rotate-180"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto  ">
                        <div className={`${!isMobile ? "grid grid-cols-4 gap-x-4 gap-y-8  bigger:gap-8" :"tablet:min-w-[900px] flex gap-x-4 bigger:gap-8"}   `}>
                            <CardHome data={data[0]} notchange={true}/>
                            <CardHome data={data[1]} notchange={true}/>
                            <CardHome data={data[2]} notchange={true}/>
                            <CardHome data={data[3]} notchange={true}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="home-row py-2 mb-6 ">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12">
                    <div className="flex  w-full justify-between">


                        <div className="flex flex-row items-center space-x-2">
                            <div  className="w-5 h-5 relative" >
                            <Image  layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                            </div>
                            <h2 className="font-bold">Tin đăng cùng dự án</h2>
                        </div>



                        <div className="flex items-center">
                            <Link href="/tin-tuc">
                                <a className="text-sm font-bold text-purple-700 flex gap-2">Xem tất cả
                                    <div className="h-5 w-4  relative">
                                        <Image  layout="fill"  src="/arrow-red.svg" className="h-5 w-8 rotate-180"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto  ">
                        <div className={`${!isMobile ? "grid grid-cols-4 gap-x-4 gap-y-8  bigger:gap-8" :"tablet:min-w-[900px] flex gap-x-4 bigger:gap-8"}   `}>
                            <CardHome data={data[4]} notchange={true}/>
                            <CardHome data={data[5]} notchange={true}/>
                            <CardHome data={data[6]} notchange={true}/>
                            <CardHome data={data[7]} notchange={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ProductDetailPage.getLayout = (page) => {
    return <PrimaryLayout name="productDetail">{page}</PrimaryLayout>;
  };
export default ProductDetailPage
