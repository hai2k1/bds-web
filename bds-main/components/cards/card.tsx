
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { Card } from '../../interfaces/interfaces';
const CardHome:React.FC<Card>=(props)=>{
    const {data,isVertical,notchange} = props
    const time="2 phút trước"
    const img=2
    const video=2
    const router = useRouter()
    const naviGate=(link:string)=>{
        router.push(link)
    }
    return(
        <div  className={`  ${!isVertical ? "flex-[1_0_21%] h-80": "h-full p-2 border-solid border-[1px]"}  shadow tablet:p-0 select-none  rounded-lg ${notchange ? "w-[14rem]" :"tablet:w-full"}`}>
            <div  className={`flex ${!isVertical ? "flex-col ":""}   gap-1 ${!notchange && "tablet:h-full tablet:gap-2  tablet:flex-row tablet:p-2"} h-full   w-full    rounded-lg flex-grow` }>
                <div className={` ${!isVertical ? "flex-[1_0_45%]" :"flex-[1_0_20%] "} ${!notchange && "tablet:flex-[1_0_30%]"}   relative  indicator`}>
                    { <div className={` absolute ${!notchange &&"tablet:hidden"} z-[60] bottom-2 left-2 opacity-90`}>
                        <div className="gap-2 flex ">
                            <div className="bg-gray-700  rounded-md p-1  flex items-end">
                                <div className="flex  items-center gap-1">
                                    <div className="h-5 w-3 relative">
                                        <Image layout='fill' src="/video_thumb_white.svg" className="h-5 w-3 rounded-md mb-[2px]"/>
                                    </div>
                                    {video && <p className="text-white opacity-80 cardText ">{video}</p>}
                                </div>
                               
                            </div>
                            <div className="bg-gray-700 rounded-md p-1 flex items-end" >
                                <div className="flex  items-center gap-1">
                                    <div className="h-4 w-3 relative">
                                        <Image layout='fill' src="/images_thumb_white.svg" className="h-4 w-3 rounded-md"/>
                                    </div>
                                    {img && <p className="text-white opacity-80 cardText">{img}</p>}
                                </div>
                            </div>
                        </div>
                    </div>}
                    <Carousel slideInterval={5000} indicators={true} >
                        <div className="w-full h-full reative">
                            <Image layout='fill' src={data.image} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                        </div>
                        <div className="w-full h-full reative">
                            <Image layout='fill' src={data.image2} className="object-cover w-full h-full rounded-t-lg tablet:rounded-lg"/>
                        </div>
                    
                       
                       
                    </Carousel>
                    
                </div>
                <div onClick={()=>naviGate('/product-detail')} className={`cursor-pointer w-full flex  flex-col overflow-hidden   flex-[1_0_45%] ${!notchange && "tablet:flex-[2_0_70%] tablet:px-0"}   px-2 `}>
                    <div className=" cardTitle flex-[1_0_60%]  flex    flex-col      ">
                        <div className="flex flex-col ">

                            <div className="flex justify-between">
                                <h3 className="cardHead text-base font-semibold text-purple-600  ">{`${data.prices} triệu`}<span className={`${!notchange &&"tablet:hidden"}`}>{`/${data.followBy}`}</span></h3>
                                <div className="relative h-6 w-8 top-[0.25rem] -right-[0.55rem]">
                                    <Image layout='fill'  src="/favorite-red.svg" />
                                </div>
                            </div>
                            <p className="cardTitle line-clamp-2 truncate whitespace-normal font-bold tablet:font-semibold">{data.title}</p>
                        </div>
                        <div className={`flex  w-full items-center   mt-2  flex-wrap  gap-x-1 gap-1 ${!notchange && " tablet:w-[1000px] tablet:text-xs tablet:overflow-hidden"}`}>
                            <div className={`flex flex-row  items-center ${!notchange && "tablet:gap-1"}`}>
                               
                                <p className="cardInfo "> {data.room} pn</p>
                            </div>
                            .
                            <div className={`flex flex-row  items-center ${!notchange && "tablet:gap-1"}`}>
                              
                                <p className="cardInfo"> {data.wc} wc</p>
                            </div>
                            .
                            <div className={`flex flex-row  items-center ${!notchange && "tablet:gap-1"}`}>
                             
                                <p className="cardInfo"> {data.areas} m2</p>
                            </div>
                            <span className={`hidden ${!notchange && "tablet:block"}`}>.</span>
                            <div className={`flex flex-row    gap-2 items-center ${!notchange && "tablet:col-start-2 tablet:col-end-3"}`}>
                                
                                <p className=" line-clamp-1 cardInfo truncate"> {data.address}</p>

                            </div>
                    
                           
                        </div>
                       
                    </div>
                    
                    <div className={`boder-solid border-t-[1px] py-1 ${!notchange && "tablet:hidden"} flex justify-between items-center`}>
                        <div className="flex flex-row items-center space-x-1">
                            <div className="h-6 w-6 relative">
                                <Image layout='fill' src="/default-user.svg" />
                            </div>
                            <p className="cardAuthor font-semibold"> {data.author}</p>
                        </div>
                        <div>
                            <p className="cardTime">{time}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CardHome;