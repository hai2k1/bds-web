import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



import { data } from '../fakedata';
import useDevice from '../hooks/useDevice';
import { NextPageWithLayout } from '../page';

import dynamic from 'next/dynamic';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'))
const ContactForm=  dynamic(() => import('../components/forms/formcontact'))
const CardHome=  dynamic(() => import('../components/cards/card'))
const CardHome2=  dynamic(() => import('../components/cards/card2'))


let start=0 
const pages=[] as any
data.forEach((item:any,index:number)=>{
    if(index%18==0 ){
        start++;
    }
    if(pages.hasOwnProperty(start)){
        pages[start].push(item)
    }else{
    pages[start]=[item]
    }
   
    
})
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

const  showResults =async(values:any) =>{
    console.log(values)

    await sleep(500); // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};

const PageProfile:NextPageWithLayout=()=>{
    const {isMobile}=useDevice()
    const [isGrid,setIsGrid] = useState<boolean>(false)
    const [min,setMin]= useState(0)
    const [max,setMax]= useState(4)
    const [maxi,setMaxi]= useState(data.length/18-1)
    const [active,setActive] = useState(0)
    const [moretext,setMoreText]=useState(false)
    const moreText=()=>{
        setMoreText(!moretext)
    }
    
    const nextButton=()=>{
        if(active<max ){
            setActive(active+1)
        }else if(active<maxi){
            setMax(max+1)
            setMin(min+1)
            setActive(active+1)
        }
    }
    const prevButton=()=>{
        if(active>min){
            setActive(active-1)
        }else {
            setMax(max-1)
            setMin(min-1)
            setActive(active-1)
        }
    }
    const activeButton=(index:number)=>{
        if(index===max){
            setMax(max+1)
            setMin(min+1)
          
        }else if(index===min && min!==0){
            setMax(max-1)
            setMin(min-1)
        
        }
        setActive(index)
        
        
    }
    return(
    
            <div className={`flex flex-col  justify-center px-2 mb-4 tablet:mb-[6rem]`}>
                
                <div className="home-row py-4 ">
                    <div className={`${!isMobile ? "w-9/12" : "w-full"} flex flex-col  gap-2`}>
                        <ol className=" flex items-center text-sm ">
                            <li className="pathMenu ">
                            
                            <Link href="/" >
                                <a className="text-purple-600">Trang chủ</a>
                            </Link>
                            </li>
                            <li> 
                                <a className="font-semibold">
                                Trang cá nhân của XXX
                                </a>
                            </li>
                        
                        </ol>
                    
                    </div>  
                    
                </div>
                <div className="home-row py-4 bg-white">
                    <div className={`${!isMobile ? "w-9/12 flex  justify-between" : "w-full space-y-4"}   `}>
                        <div className={`relative ${!isMobile ? "gap-4 flex" : "flex "} `}>
                            <div  className="w-[8rem] h-[8rem]  rounded-full p-1 flex   overflow-hidden relative">
                                <Image width="100%" height="100%" layout="fill"   objectFit="contain"
                                    
                                    src="/user-toolbar-footer.svg" 
                                /> 
                            
                            </div>
                            <div className="space-y-2 w-[18rem] px-2">
                                <h1 className="font-medium text-xl">Nguyễn Văn Nam</h1>
                                <p className="text-[13px]">Ngày tham gia XXX</p>
                                <p className="flex items-center gap-1 text-[12px]"><span className=" bg-green-400  h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800"></span>Đang hoạt dộng</p>
                                <div className="flex gap-1 ">
                                    <button className="text-[12px] tablet:text-[10px]  flex items-center gap-1 p-1 px-2 bg-purple-600 text-white font-semibold rounded-lg text-center  ">
                                        <div className="relative h-4 w-4">
                                            <Image  layout="fill" src="/phone_purple.svg"/>
                                        </div>
                                        0961 643 ***</button>
                                    <button className="text-[12px] tablet:text-[10px] flex items-center gap-1 p-1 px-2 bg-white   border-solid border-[1.5px] border-gray-200 font-semibold rounded-lg text-center ">
                                        <div className="relative h-5 w-4">
                                            <Image  layout="fill" src="/zalo.svg"/>
                                        </div>
                                        Nhắn tin Zalo</button>
                                   
                                </div>

                            </div>
                        </div>
                        <div className=" space-y-2 text-left w-1/2">
                            <p><span>Địa chỉ</span> xxxx</p>
                            <p><span>Email</span> xxxx</p>
                            <p><span>Facebook</span> xxxx</p>
                        </div>
                    </div>
                </div>
                <div className="home-row py-4 bg-white ">
                    <div className={`${!isMobile ? "w-9/12" : "w-full"}  relative flex gap-4 border-solid border-b-[1px] border-gray-300 `}>
                            
                            <p className="font-[500] text-[18px] tablet:text-[15px] border-solid border-b-[4px] pb-2 border-purple-700 ">Danh sách tin đăng</p>
                            <p className="font-[400] text-[18px] tablet:text-[15px]">Giới thiệu</p>
                     
                    </div>
                </div>
                <div className="home-row pt-2 bg-white">
                    <div className={`${!isMobile ? "w-9/12" : "w-full"}  grid grid-cols-6 gap-4`}>
                            <div className={`${!isMobile ? "col-span-4" : "col-span-6"} space-y-4 relative`}>
                                <div className="flex flex-row items-end justify-between">
                                    <p className="text-sm text-left ">Tìm thấy 6 tin cho thuê căn hộ </p>
                                    <div className="gap-2 flex flex-shrink ">
                                    <select name="location" id="locations"  className='filter w-[100px] tablet:hidden pr-8 border-gray-400'>
                                            
                                        <option value="1">Mặc định</option>
                                        <option value="2">Thành phố Hồ Chí Minh</option>
                                        <option value="2">Opel</option>
                                        <option value="3">Audi</option>
                                    </select>
                                    <div className="flex border-solid border-[1px]  border-gray-400 rounded-md">
                                        <button onClick={()=>setIsGrid(false)} className="flex  item-center bg-[#fefefe] border-solid border-r-[1px] rounded-l-md  border-gray-400">
                                            <div className={`${isGrid ? "clickhover" :""} animationhover relative w-10 h-10`}>
                                                <Image width="100%" height="100%" layout="fill"   src={isGrid ? "/list_grey.svg" : "/list_selected.svg" } />
                                            </div>
                                        </button>
                                        <button onClick={()=>setIsGrid(true)} className="flex item-center rounded-r-md bg-[#fefefe]">
                                            <div className={`${isGrid ? "clickhover" :""} animationhover relative w-10 h-10`}>
                                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src={isGrid ? "/grid_selected.svg" : "/grid_grey.svg"}  />
                                            </div>
                                        </button>
                                    </div>
                                            
                                    
                                </div>

                                </div>
                            
                                <div className={`  w-full  `} >
                                    {!isMobile && pages.map((page:any, i:number) =>{
                                        return(
                                        <div key={i} className={`${active!==i-1 && "hidden"} ${isGrid ? "grid grid-cols-2" :" flex-col flex"} overflow-hidden gap-4 max-h-[3750px] tablet:max-h-[2800px] relative `}>
                                        
                                            {page.map((item:any,i:number)=>{
                                                return(
                                                    <CardHome key={i} data={item} isVertical={!isGrid && true}/>
                                                 
                                                )
                                            })}
                                
                                        </div>
                                        )
                                    })}
                                    {isMobile && !isGrid &&
                                        pages.map((page:any, i:number) =>{
                                            
                                            return(
                                                <div key={i} className={`${active!==i-1 && "hidden"}  flex-col flex overflow-hidden gap-4 max-h-[3750px] tablet:max-h-[2800px] relative `}>
                                                
                                                    {page.map((item:any,i:number)=>{
                                                        return(
                                                            <CardHome key={i} data={item} isVertical={!isGrid && true}/>
                                                        
                                                        )
                                                    })}
                                        
                                                </div>
                                            )
                                    })}
                                    
                                 
                                    {isMobile && isGrid &&
                                        <div className="flex flex-row flex-wrap gap-4 tablet:flex-col">
                                            <CardHome2 data={data[0]}/> 
                                            <CardHome2 data={data[0]}/> 
                                            <CardHome2 data={data[0]}/> 
                                        </div> 
                                    }
                                
                            
                                </div>
                                
                                <div >
                                    <ul className="flex justify-center items-center gap-2">
                                    {active!==0 && <li className="w-10 h-10">
                                            <button onClick={prevButton} className="btn-slide">
                                            <div className="h-3 w-3 relative">
                                                <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/previous-button-purple.svg" />
                                            </div>
                                            </button>
                                        </li>}
                                        {data.map((item, index) =>{
                                            if(index >=min && index <=max){
                                                return(
                                                    <li key={index} className={`w-10 h-10 `}>
                                                        <button onClick={()=>activeButton(index)} className={`btn-slide ${index===active && "btn-slide-active"}`}>{index+1}</button>
                                                    </li>
                                                )
                                            }
                                        })}
                                        
                                        <li className="w-10 h-10">
                                            <button onClick={nextButton} className="btn-slide">
                                                <div className="h-3 w-3 relative">
                                                    <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/next-button-pruple.svg" />
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                           
                            <div className={`${!isMobile ? "col-span-2" :"col-span-6"} gap-2 flex flex-col `}>
                                
                                <p className="font-medium">Yêu cầu tư vấn</p>
                            
                                <div className=" rounded-lg ">

                                    <ContactForm hidden={true} onSubmit={showResults}/>
                                </div>
                            </div>
                            
                    </div>
                </div>
            
            
            </div>
    
    )
}
PageProfile.getLayout = (page) => {
    return <PrimaryLayout name="profile">{page}</PrimaryLayout>;
  };
export default PageProfile;