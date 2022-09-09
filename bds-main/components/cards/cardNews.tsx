

import Image from 'next/image';
import type { CardNewsProp } from '../../interfaces/interfaces';
const CardNews:React.FC<CardNewsProp>=()=>{
    return(
        <div id="cardNews" className="animationhover rounded-lg flex h-[18rem] flex-[1_0_21%] flex-col  w-1/4 select-none space-y-2">
            <div className="h-[70%] w-[90%] rounded-lg">
                <div className="relative w-full h-full">
                    <Image width="100%" height="100%" layout="fill"   src="/banner.png" className="object-cover h-full w-full rounded-lg"/>
               </div>
            </div>
            <div className=" w-[95%] ">
                <p className="line-clamp-2">6 cách tiết kiệm không gian phòng trọ không thể bỏ sssssssssssssssssssssssss</p>
            </div>
        </div>
    )


}

export default CardNews;