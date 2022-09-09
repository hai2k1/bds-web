import Image from 'next/image';
import type { Card } from '../../interfaces/interfaces';
const CardHome2:React.FC<Card>=(props)=>{
    const {data} = props
    return(
        <div  className=" w-full select-none h-[17rem] mb-2 border-solid border-[1px] rounded-lg">
             <div  className="flex flex-col   h-full  w-full shadow  rounded-lg flex-grow ">
                <div className="w-full flex-[1_0_45%] grid gap-3">
                    <div className="col-start-1 col-end-4 row-span-2">
                        <div className="w-full h-full   relative">
                            <Image width="100%" height="100%" layout="fill"   src={data.image} className="rounded-l-lg rounded-b-[0px]"/>
                        </div>
                    </div>
                    <div className="col-start-4 col-end-6">
                        <div className="w-full h-full   relative">
                            <Image width="100%" height="100%" layout="fill"   src={data.image} className="rounded-t-lg rounded-l-[0px]"/>
                        </div>
                    </div>
                    <div className="col-start-4 col-end-6">
                        <div className="w-full h-full   relative">
                            <Image width="100%" height="100%" layout="fill"   src={data.image} />
                        </div>
                    </div>
                   
                    
                </div>
                <div className="w-full p-2  ">
                    <div className="  tablet:h-full gap-2 tablet:grid">
                        <div className="flex flex-col gap-2 tablet:col-start-1 tabletcol-end-2 tablet:col-span-2">

                        
                            <h3 className="text-base  font-semibold text-purple-600  ">{`${data.prices} triệu`}<span className="tablet:hidden">{`/${data.followBy}`}</span></h3>
                            <p className=" truncate whitespace-normal text-sm font-bold ">{data.title}</p>
                        </div>
                        <div className="  flex flex-row w-full  flex-wrap tablet:text-xs gap-2  tablet:gap-1 tablet:col-start-1 tabletcol-end-2 ">
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <div className="h-3 w-3 tablet:hidden relative">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/phong_ngu.svg" className="h-3 w-3 tablet:hidden"/>
                                </div>
                                <p> {data.room} pn</p>
                            </div>
                            .
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <div className="h-3 w-3 tablet:hidden relative">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/phong_tam.svg" className="h-3 w-3 tablet:hidden"/>
                                </div>
                                <p> {data.wc} wc</p>
                            </div>
                            .
                            <div className="flex flex-row gap-2 items-center tablet:gap-1">
                                <div className="h-3 w-3 tablet:hidden relative">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/dien_tich.svg" />
                                </div>
                                <p> {data.areas} m2</p>
                            </div>
                        </div>
                        <div className="flex flex-row  tablet:text-xs gap-1 items-center tablet:col-start-2 tabletcol-end-3">
                            <div className="h-4 w-4 tablet:hidden relative">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/location_icon.svg" />
                            </div>
                            <p className="text-xs line-clamp-1"> {data.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CardHome2;