import Image from 'next/image';
import { useState } from 'react';

export interface ScrollButtonProps{
    isMobile?:boolean;
    className?:string;
    isSubmitButton?:boolean;
    submitting?:any;
}

const ScrollButton = (props:ScrollButtonProps) =>{
    const {isMobile,className,isSubmitButton,submitting}=props

    const [visible, setVisible] = useState(false)
    

   
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const body = document.body
        const html = document.documentElement;
        const height = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
        if(!isSubmitButton){
            if (scrolled > 300){
                setVisible(true)
            } 
            else if (scrolled <= 300 ){
                setVisible(false)
            }
     
        }
        else if(isSubmitButton){
            if (scrolled < 0.666*height){
                setVisible(true)
            } 
            else {
                setVisible(false)
            }
        }
    };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
 
  return (
    <div className={` ${visible ? 'inline' : 'hidden'} scroll-button  ${isMobile ? "left-[80%]" :"left-[90%]"} ${className}  h-10`}>
        
            {isSubmitButton ? 
            <div className={`relative w-[100vw]  h-10`}>
                <div className="w-full h-10  flex items-center justify-center">
                 
                        <button id={isSubmitButton && "buttonA"} type="submit" disabled={submitting} className="bg-pink-800 h-auto p-3 rounded-lg text-white text-xs font-bold">Đăng tin</button>
                 
                </div>
            </div>
            :
            <button onClick={scrollToTop} className="bg-[#fefefe] h-10 w-10 flex items-center justify-center rounded-full">
                <div className="relative w-5 h-5 rotate-90 ">
                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/arrow-red.svg"/>
                </div>
            </button>
            }
    </div>
  );
}
  
export default ScrollButton;