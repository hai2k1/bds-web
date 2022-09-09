
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { data } from '../../fakedata';
import useDevice from '../../hooks/useDevice';
import type { HomeDesktopProps } from '../../interfaces/interfaces';

import dynamic from 'next/dynamic';
const CardNews=  dynamic(() => import('../../components/cards/cardNews'),{ssr:false})
const CardHome=  dynamic(() => import('../../components/cards/card'),{ssr:false})
const CardHome2=  dynamic(() => import('../../components/cards/card2'),{ssr:false})

const HomeDesktop:React.FC<HomeDesktopProps>=()=>{
    const {isMobile} =useDevice()
    const [moretext,setMoreText]=useState(false)
    
    const moreText=()=>{
        setMoreText(!moretext)
    }

   
    
    
    
    return(
        <div className="flex flex-col mt-[4.5rem] tablet:mt-3 justify-center placeholder-red-500 mb-8 ">
            {!isMobile &&<div className="home-row tablet:hidden ">
                <div className="w-9/12 bigger:w-7/12">
                   
                    <div className="h-56 laptop:h-40 ">
                       
                        <Carousel slideInterval={5000} indicators={true}>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                            <div className=" h-full relative">
                                <Image width="100%" height="100%" layout="fill" objectFit="contain" 
                                src="/banner.png"
                                alt="..."
                                />
                            </div>
                         
                            
                        </Carousel>
                    </div>
 
                </div>
            </div>}
            
      
     
    
            <div className="home-row">
                <div className="w-9/12 text-center tablet:w-full tablet:text-left bigger:w-7/12">
                    <h1 className="font-bold">Cho thuê căn hộ chung cư giá rẻ, chính chủ, mới nhất T7/2022</h1>
                    <p className="text-sm text-left">Cho thuê căn hộ chung cư mini: Giá rẻ, chất lượng, chính chủ, đầy đủ nội thất, an ninh đảm bảo. Đăng tin cho thuê căn hộ hiệu quả với 1.000.000+ truy cập mỗi tháng</p>
                </div>
            </div>
            
            <div className="home-row "> 
                <div className="w-9/12 space-y-4  tablet:w-full bigger:w-7/12  "> 
                    <div className="flex flex-row items-center space-x-2">
                        <div className="relative h-5 w-5">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/apartment_home.svg"  className="w-5 h-5"/>
                        </div>
                        <h2 className="font-bold">Tìm kiếm nhiều nhất</h2>
                    </div>
                    <div className="bg-slate-100 py-4  shadow-xl   rounded-lg  tablet:overflow-x-auto tablet:overflow-y-hidden">
                        <div className="tablet:min-w-[900px] w-full flex  flex-row ">
                            <div className=" flex-[5_1_0%] ">
                                <div className=" flex space-x-5  h-full">
                                    <div className="w-[45%]  h-full rounded-md relative">
                                        
                                        <Image  layout="fill" src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                     
                                        <div  className="absolute bottom-2 left-2">
                                            <h3>Hà Nội</h3>
                                            <p className="text-sm">49.576 tin đăng</p>
                                        </div>
                                        
                                    </div>
                                    <div className="w-[45%]  h-full rounded-md relative">
                                      
                                            <Image  layout="fill"  src="/banner.png" className="object-cover w-full h-full rounded-md shadow opacity-80" />
                                     
                                        <div  className="absolute bottom-2 left-2">
                                            <h3>Hồ Chí MInh</h3>
                                            <p className="text-sm">69.524 tin đăng</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="text-gray-500  flex-[7_1_0%] text-xs gap-5 flex flex-row tablet:gap-4">
                                <div className="flex-[2_1_0%] flex flex-col gap-1 tablet:flex-none">
                                    <h4 className="font-semibold">Dự án nổi bật</h4>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ The Sun Avenue</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>VinhHomes Ocean Park</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>VinhHomes Grand Park</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Centena Thủ Thiêm</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Đảo Kim Cương - Diamond Island</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ The Sun Avenue</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>VinhHomes Grand Park</p>
                                    </div>
                                </div>
                                <div className="flex-[2_1_0%] flex flex-col gap-1 tablet:flex-none">
                                    <h4 className="font-semibold">Khu vực nổi bật</h4>
                                    
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ Quận 1</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ Quận 7</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ Hoàn Kiếm</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ Thủ Đức</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ Bình Thạnh</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ Ba Đình</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-5 h-5 relative">
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-down-red.svg" className="-rotate-90 w-5 h-5"/>
                                        </div>
                                        <p>Cho thuê căn hộ Đống Đa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-row">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12">
                    <div className="flex flex-row items-center space-x-2">
                        <div className="w-5 h-5 relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                        </div>
                        <h2 className="font-bold">Cho thuê chung cư mới nhất</h2>
                    </div>
                    <div className="grid grid-cols-4 tablet:flex  tablet:flex-col gap-x-4 gap-y-8  bigger:gap-8 tablet:gap-4">
                        {isMobile ? <CardHome2 data={data[0]}/> :  <CardHome data={data[0]}/>}
                        <CardHome data={data[1]} />
                        <CardHome data={data[2]}/>
                        <CardHome data={data[3]}/>
                        {isMobile ? <CardHome2 data={data[4]}/> :  <CardHome data={data[4]}/>}
                        <CardHome data={data[5]}/>
                        <CardHome data={data[6]}/>
                        <CardHome data={data[7]}/>
                    </div>
                </div>
            </div>
            <div className="home-row ">
                <div  className="w-9/12 space-y-4 tablet:w-full bigger:w-7/12 overflow-hidden">
                    <div className="flex  w-full justify-between">

                  
                        <div className="flex flex-row items-center space-x-2">
                            <div  className="w-5 h-5 relative" >
                            <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/apartment_home.svg" className="w-5 h-5"/>
                            </div>
                            <h2 className="font-bold">Tin tức</h2>
                        </div>
                     
                        
                        
                        <div className="flex items-center">
                            <Link href="/tin-tuc">
                                <a className="text-sm font-bold text-purple-700 flex gap-2">Đến trang tin tức
                                    <div className="h-5 w-4  relative">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain" src="/arrow-left.svg" className="h-5 w-8 rotate-180"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="tablet:overflow-x-auto tablet:overflow-y-hidden ">
                        <div className="w-full  tablet:min-w-[900px] flex    flex-wrap ">
                            <CardNews />
                            <CardNews />
                            <CardNews />
                            <CardNews />
                    
                        </div>
                        <div className="border-b-2 border-gray-100 mt-2"></div>
                    </div>
                </div>
            </div>
            <div className="home-row">
                <div  className="w-9/12 space-y-4 px-6 tablet:w-full tablet:px-0 bigger:w-7/12">
                    <div className="w-full bg-[#fefefe] p-5  shadow-md border-[1px] border-solid border-gray-100 rounded-lg">
                        <div className="flex justify-center items-center">
                            <h2 className="font-bold">CHO THUÊ CĂN HỘ CHUNG CƯ - CHO THUÊ CHUNG CƯ MINI</h2>
                        </div>
                       <div className="relative flex flex-col  w-full h-auto gap-7 py-5">
                            {!moretext && <div className="absolute w-full   tablet:bottom-[4.5rem]    bg-gray-50 text-hidden bottom-[4.75rem] opacity-40"><br/><br/></div>}
                            <p className={`${!moretext && "line-clamp-[12]"}  whitespace-normal truncate`}>
                                Thị trường <span className="font-semibold">CHO THUÊ CĂN HỘ</span> chung cư hiện nay đang diễn ra rất là sôi động, nhu cầu thuê căn hộ ngày càng tăng của những gia đình trẻ, những bạn rẻ đang đi làm hoặc thậm chí là những bạn sinh viên đang ngày càng tăng lên rat71 nhiều bởi những tiện ích mang lại là rất nhiều.
                                <br/>
                                <br/>
                                Việc có rất nhiều những căn hộ, căn hộ chung cư được xây dựng và cho thuê sẽ giúp cho bạn có thể dễ dàng tìm được những căn hộ cho thuê, tuy nhiên không phải cũng có thể biết và chọn mình được căn hộ phù hợp nhất.
                                <br/>
                                <br/>
                                Thuecanho123.com chia sẻ những kinh nghiệm, lưu ý để giúp bạn có thể chọn thuê căn hộ tốt nhất.
                                <br/>
                                <br/>
                                <span className="leading-2 font-bold">Những điều lưu ý trước khi thuê căn hộ chung cư</span>
                                <br/>
                                <br/>
                                Hiện nay việc thuê căn hộ, chung cư đang rất được nhiều người ưu chuộng và người mới tìm hiểu.Bởi mang nhiều tiện ích tích hợp trong một căn hộ như: Cửa hàng tiện lợi, Khu Trung tâm Thương mại, Hộ bơi, phòng GYM Yoga, Khu nhà trẻ, Khu vườn cây xanh đi bộ ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

                            </p>
                           {!moretext ? <button onClick={moreText} className="text-purple-600">Xem thêm</button> :  <button onClick={moreText} className="text-purple-600">Rút gọn</button>}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDesktop;