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
export type DropProps={
    label?:string,
    value?:string,
    children: React.ReactNode;
}
export const RenderPopUp=(props: PopUpProps)=>{
    const [isVisible,setIsVisible] = useState(true)

    const onOpen=()=>{
        setIsVisible(false)
      }
      const onClose=()=>{
        setIsVisible(true)
      }
      useEffect(() => {
        if(!isVisible){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
        
     }, [isVisible ]);
    return(
        <div>
            <button type="button" className={` text-placeholder
                    placeholder:text-slate-400  relative  text-left
                    bg-white rounded  py-2  ${!props.img ? "pl-3 pr-1 justify-between" : "pr-3 pl-2 gap-2"}   flex   items-center
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300   ${props.className}`}  
                    onClick={onOpen}
            >
                {(props.img && props.img!=="/search_pink.svg") && 
                    <div  className="h-6 w-4  relative">
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
                {props.img ==="/search_pink.svg" && 
                    <div className="relative ml-auto">
                        <div className="relative  h-6 w-6">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/search_pink.svg" />
                        </div>
                    </div>
                }
            </button>
            <div className={`${isVisible ? 'hidden' : 'block'} modal  flex justify-center items-center `}>
                <div className="modal-content  tablet:w-full tablet:h-full   ">
                    <div className="w-full  bg-slate-50 flex flex-col  items-center      ">
                        {/* header */}
                        <div  className={`w-full mb-4  bg-white flex flex-col relative justify-center items-center py-5  shadow select-none gap-4 `}>
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
export const RenderDrop=(props:DropProps)=>{
    const [isHidden,setIsHidden] = useState(true)


    const changeDrop=()=>{
        setIsHidden(!isHidden)
    }
    return(
        <div >
            <button type="button" className={` text-placeholder
                    placeholder:text-slate-400  relative  text-left
                        rounded   py-4 px-5  flex   items-center
                        group
                        w-full h-full `}  
                        onClick={changeDrop}
            >
                <p className="font-bold w-[70%]">{props.label}</p>
            
        
                <div className="relative ml-auto w-fit flex items-center">
                    <p className="text-[12px] text-purple-500">{props.value}</p>
                    <div className={`relative ${isHidden && "-rotate-90"} transition-transform duration-700 transition-a h-6 w-6`}>
                        <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
                    </div>
                </div>
                
                
            </button>
            <div className={`${isHidden && "hidden"} transition delay-700 duration-300 ease-in-out`}>
                {props.children}
            </div>
        </div>
    )
}