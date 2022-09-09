import Image from 'next/image';
import { useEffect, useState } from 'react';

export type PopUpProps = {
    label?:string,
    page:string,
    className?:string,
    filter?:boolean,
    img?:string,
    children: React.ReactNode; // 👈️ type children
};
export const RenderPopUp=(props: PopUpProps)=>{
    const [isVisible,setIsVisible] = useState(true)
    useEffect(() => {
        if(!isVisible){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
        
     }, [isVisible ]);
    const onOpen=()=>{
        setIsVisible(false)
      }
      const onClose=()=>{
        setIsVisible(true)
      }
    return(
        <div>
            <button type="button" className={` text-placeholder
                    placeholder:text-slate-400  relative text-xs text-left
                    bg-white rounded  py-1  ${!props.img ? "pl-3 pr-1 justify-between" : "pr-3 pl-2 gap-2"}   flex   items-center
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300   ${props.className}`}  
                    onClick={onOpen}
            >
                {props.img && 
                    <div  className="h-6 w-3  relative">
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src={props.img} />
                    </div>
                }
                {props.label}
               
                {!props.img && 
                    <div className="relative ">
                        <div className="relative  h-6 w-6">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                        </div>
                    </div>
                }
                {props.img ==="/khu_vuc.svg" && 
                    <div className="relative ml-auto">
                        <div className="relative  h-6 w-6">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                        </div>
                    </div>
                }
            </button>
            <div className={`${isVisible ? 'hidden' : 'block'} modal  flex justify-center items-center `}>
                <div className="modal-content  tablet:w-full tablet:h-full -translate-y-20  rounded-lg">
                    <div className="w-full  bg-slate-50 flex flex-col  items-center     rounded-lg ">
                        {/* header */}
                        <div  className={`w-full mb-4  bg-white flex flex-col relative justify-center items-center py-5 rounded-t-lg shadow select-none gap-4 `}>
                            <div className="absolute flex inset-x-0 bottom-[25px] px-4  w-[50px]  ">
                                <a onClick={onClose}>
                                    <div className="w-4 h-4 relative cursor-pointer">
                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/arrow-left.svg" />
                                    </div>
                                </a>
                                
                            </div>

                            <h3 className="w-full text-center text-xl font-bold">{props.page}</h3>
                            
                            { !props.filter ?
                            <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[50px]  ">
                                <a onClick={onClose}>
                                    <div className="w-4 h-4 relative cursor-pointer">
                                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/closed-black.svg" />
                                    </div>
                                </a>
                                
                            </div>
                            :
                            <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[5rem]  ">
                                <button onClick={onClose} className="text-pink-600 w-auto h-4">Đặt lại</button>
                            </div>
                            }
                        </div>
                        {props.children}
                    </div>
                </div>
                
            </div>
        </div> 
    )
}