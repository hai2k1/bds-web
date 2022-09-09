import { ListGroup } from 'flowbite-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useBlur from '../../hooks/useBlur';
import { IPrices } from '../../interfaces/interfaces';

export const RenderToggle=({
    id,data,
    input,
    label,
    type,
  }:any):any=>{
    const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
    const handleClick=()=>{
      setIsComponentVisible(true)
    }
    return(
      <div>
       
         <label htmlFor={id} className="inline-flex relative items-center cursor-pointer item-center">
              <input {...input}  type={type} id={id} className="sr-only peer "/>
              <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300 ">{label}</span>
            
              <div ref={ref}>
                <RenderDropLeft action={handleClick} icon="/info-icon.svg" className="-top-0 -right-6 "/>
                {isComponentVisible && 
             
                    
                    <div className="absolute top-5 bg-[#fefefe] shadow-round w-[18rem] z-[60] ">
                          <RenderInfo data={data}/>
                    </div>
            
                }
              </div>
  
  
          </label>
      </div>
    )
  
}

export const RenderPopUp=({  
classNameInput,data,renderDropLeftIcon,
input,
page,
label,
type,
meta: {  error, warning }
}:any):any=>{


const [isVisible,setIsVisible] = useState(true)
const [change,setChange]= useState(input.value)
const [isClick,setIsClick]=useState(true)
const onOpen=()=>{
    setIsVisible(false)
}
const onClose=()=>{
    setIsVisible(true)
}
const search=()=>{
    
}
const selectItem=(item:any):any=>{
    setChange(item.name)
    input.onChange(item.name)
    setIsVisible(true)
}


const add=()=>{
    setIsVisible(true)
}




return(
    <div >
    <div className="space-y-1">
    <label className="font-semibold">{label}</label>
    
    {isClick &&
        ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
    <button type="button" className={`w-full text-placeholder
            placeholder:text-slate-400  relative
            bg-white rounded pl-3 py-2 pr-10
            shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
            border border-slate-300 text-left ${change ? 'text-black':'text-slate-400 '} `}  onClick={onOpen}
            
    >
        {change  ? change : label}
        <div className="absolute right-1 top-[0.25rem]">
            <div className="relative  h-8 w-6">
            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/down_button_grey.svg" />
            </div>
        </div>
    </button>
    </div>
    <div className={`${isVisible ? 'hidden' : 'block'} modal  flex justify-center items-center `}>
        <div className="modal-content  tablet:w-full tablet:h-full -translate-y-7 tablet:translate-y-0 rounded-lg">
        <div className="w-full flex flex-col space-y-4 items-center  bg-slate-50 laptop:text-sm  rounded-lg ">
            {/* header */}
            <div  className={`w-full bg-white flex flex-col relative justify-center items-center py-5 rounded-t-lg shadow select-none gap-4 `}>
                <div className="absolute flex inset-x-0 bottom-[25px] px-4  w-[50px]  ">
                    <a onClick={onClose}>
                        <div className="w-4 h-4 relative cursor-pointer">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/arrow-left.svg" />
                        </div>
                    </a>
                    
                </div>

                <h3 className="w-full text-center text-xl">{page}</h3>

                <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[50px]  ">
                    <a onClick={onClose}>
                        <div className="w-4 h-4 relative cursor-pointer">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/closed-black.svg" />
                        </div>
                    </a>
                    
                </div>
            </div>
            {/* body */}
            <div className="w-full flex flex-col  p-5 bg-white rounded-b-lg ">
            <div className=" w-full flex flex-col  space-y-4  ">
                
            <div className="relative w-full">
                    <input {...input}  placeholder={label} type={type} onChange={e => setChange(e.target.value)}  value={change} autoComplete="off" className={classNameInput}/>
                
                            <button type="button" 
                                
                                className={`absolute z-[4] top-2 right-2 flex  items-center`}>
                                <div className="w-6 h-7 relative">
                                    <Image  layout="fill" objectFit="contain"   src={renderDropLeftIcon} />
                                </div>
                            
                            </button>
                </div>
                <div className="overflow-y-auto h-[40vh] tablet:h-[100vh] w-full relative bnone">
            
                    <ListGroup>
                    <div className="divide-y-[1px]  ">
                    {input.name ==="du_an"  && change && !data.find((e:any) => e.name === change) &&
                    <div className="relative">
                        <ListGroup.Item>
                        {change}
                        <button type="button" onClick={add} className="absolute z-[4] top-2 gap-2 right-2 flex   items-center ">
                            <div className="h-4 w-4 relative">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"   src="/closed-btn.svg" className="h-4"/>
                            </div>
                            Thêm mới
                        </button>
                        </ListGroup.Item>
                        </div>
                    }
                    


                    {data.map((item:any,index:any):any=>{
                        return(
                        <ListGroup.Item key={index} onClick={()=>selectItem(item)}
                        >
                            <div className="py-1">
                            {item.name}
                            </div>
                            
                        </ListGroup.Item>
                        )
                    })}
                        <div></div>
                    </div>
                    </ListGroup>
                
                
            
                
                </div>
                
                    
                
            
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
)
}

export const RenderDropLeft=({action,icon,className}:any):any=>{


return(
    <>
    <div >
    <button type="button" 
            
            onClick={action} className={`absolute z-[4]  top-0 ml-1 flex  items-center ${className}`}>
            <div className="w-4 h-5 relative">
            <Image width="100%" height="100%" layout="fill" objectFit="contain"   src={icon} className="w-full h-5"/>
            </div>
    
    </button>
    
    </div>
    </>
)
}

export const RenderDropBottom=({value}:any):any=>(

    <p>Giá cho thuê: <span className="font-semibold">{value}</span></p>
    

)

export const RenderPrices=({price,action}:any):any=>{
const handleClick=()=>{
    

    action({name:price})
}
const money=new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(price)

return(
    <ListGroup.Item onClick={handleClick} >
    <p>{`${money} / tháng`}</p>
    </ListGroup.Item>
)
}

export const RenderRadio=({
id,
input,
label,
type,
meta: { touched, error, warning }
}:any):any=>{

return(
    <div>
        <input {...input}  className="form-radio peer hidden" id={id} type={type}  />
        <label htmlFor={id} className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl font-normal peer-hover:bg-red-200">{label}</label>
    </div>
)

}

export const RenderTextArea = ({
classNameInput,maxtext,
id,
input,
label,
type,
meta: { touched, error, warning }
}:any):any => {
const [countTitle, setCountTitle] = useState(0);
const [isFull,setIsFull]=useState(false)
const [isClick,setIsClick] =useState(true)
const hanldeChange=(e:any)=>{
    
    if(!isFull){
    setCountTitle(e.target.value.length)
    input.value=e.target.value
    
    }
}
useEffect(()=>{
    if(input.name ==="title"){
    if(countTitle >= 100){
        setIsFull(true)
    }else{
        setIsFull(false)
    }
    }else if(input.name ==="description"){
    if(countTitle >= 3000){
        setIsFull(true)
    }else{
        setIsFull(false)
    }
    }

},[input.name,countTitle])
const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
const handleClick=()=>{
    setIsComponentVisible(true)
}
return(

    <div className="space-y-1">
        <label htmlFor={id} className="font-semibold">{label}</label>
        {isClick &&
        ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
        <div ref={ref}>
            <textarea {...input}  id={id}  
                onKeyDown={(e)=>{if(e.key==="Backspace"){
                setIsFull(false)
                }}}
                onClick={handleClick}
                className={classNameInput}
                placeholder={label}
                onChange={hanldeChange}
            ></textarea>
            <div className="flex flex-row justify-between">
            <p className="text-sm opacity-60">Tối thiểu 30 ký tự, tối đa {maxtext} ký tự</p>
            <p>{countTitle}/{maxtext}</p>
            </div>
        
            
            {isComponentVisible && 
            
                
                <div className=" bg-slate-300 shadow-lg rounded-lg flex flex-col gap-4 w-[w-full] py-4 px-5">
                    <div className="flex gap-2">
                        <div>img</div>
                        <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                    </div>
                    <div className="flex gap-2">
                        <div>img</div>
                        <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                    </div>
                </div>
            
        
            }
            </div>
    </div>
)
}

export const RenderDrop=({
data,renderDropLeftIcon,renderBottom,
classNameInput,showMoney,
input,
label,
type,
meta: { touched, error, warning }
}:any):any=>{

const [change,setChange]= useState(input.value)
const [isClick,setIsClick]=useState(true)
const [isButton,setIsButton]=useState(true)
const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);

const [renderPrices,setRenderPrices]=useState<IPrices[]>([])
const [stringBottom,setStringBottom]=useState<string>('')


useEffect(()=>{
    const temp:IPrices[]=[]
    const len=change.toString().length
    const base=change <= 1000000 ? 100000 : change <= 10000000 ? 1000000 : 10000000 <= 100000000 ? 10000000 : 1000000000
    for(var i=0;i<4;i++){
    temp.push({price:change*(base*Math.pow(10,i))/Math.pow(10,len-1)})
    }
    change && setStringBottom(`${new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(change)} / tháng`)
    setRenderPrices(temp)
    
    if(input.name ==="room" || input.name ==="wc"){
    if(change > 100){
        setChange(100)
        input.onChange(input.value = 100)
    }
    }else if(input.name ==="areas" ){
    if(change > 1000000){
        setChange(1000000)
        input.onChange(input.value = 1000000)
    } 
    }else if(change>999000000000){
    setChange(999000000000)
    input.onChange(input.value = 999000000000)
    }
    if(!change){
    setStringBottom('')
    }
},[change,input])
const clear=()=>{
    setChange('')
}
const handleClick=()=>{
    setIsComponentVisible(true)
}
const selectItem=(item:any):any=>{
    
    input.onChange(input.value =`${item.name}`)
    setChange(`${item.name}`)
    setIsComponentVisible(false)
}
return(
    <div className="space-y-1">
    <label className="font-semibold">{label}</label>
    {isClick &&
        ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
    <div className="relative"  ref={ref}   >
        <input {...input}   placeholder={label} onClick={handleClick}   
                type={type}
                onChange={(e:any) => {
                    setChange(e.target.value)
                }} 
            
            
                value={change} autoComplete="off"  className={classNameInput}/>
        
        
        {renderDropLeftIcon && renderDropLeftIcon.search('/') === -1 && 

        <div className="relative divide-x-2" >
                    
                    
                    
            <div></div>
            <div className="absolute z-[4] -top-8 right-4 flex  items-center ">
                <div className=" pl-4">{renderDropLeftIcon}</div>
            </div>
        </div>
        }
        {isComponentVisible &&
        <div className="relative" >
            {renderDropLeftIcon && renderDropLeftIcon.search('/') !== -1 && <RenderDropLeft action={clear} icon={renderDropLeftIcon}/>

            }
        
        
        
            <div className="bnone">
            <ListGroup>
                <div className="divide-y-[1px]">
            
                
                {showMoney &&  change &&
                renderPrices.map((item,i)=>{
                    return(
                    <RenderPrices key={i} price={item.price}   action={selectItem}/>
                    )
                })
                }
                {!showMoney && data.map((item:any,index:any):any=>{
                    return(
                    <ListGroup.Item key={index} onClick={()=>selectItem(item)}
                    >
                        {item.name}
                    </ListGroup.Item>
                    )
                })
                }
                <div></div>
                </div>
            </ListGroup>
            {change.toString().length===0 &&<div className=" bg-slate-300 shadow-lg rounded-lg flex flex-col gap-4 w-[w-full] py-4 px-5">
                    <div className="flex gap-2">
                        <div>img</div>
                        <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                    </div>
                    <div className="flex gap-2">
                        <div>img</div>
                        <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                    </div>
                </div>}
            </div>
            
        </div>
        }
        {renderBottom && stringBottom &&
        <div className="mt-2">
            <RenderDropBottom value={stringBottom}/>
        </div>
        }
        
        
    </div>
    </div>
)
}

export const RenderInputTime=({
dateFormat,
showTimeSelect,
classNameInput,
input,
label,placeholder,
}:any):any=>{


return(
    <div className="space-y-1">
        
        <label className="font-semibold">{label}</label>
        <DatePicker className={classNameInput} 
            selected={input.value || null} 
            disabledKeyboardNavigation
            onChange={input.onChange}
            showTimeSelectOnly={showTimeSelect}
            showTimeSelect={showTimeSelect}
            placeholderText={placeholder}
            dateFormat={dateFormat}
            
        />
    </div>
)
}

export const RenderCheckbox=({
classNameInput,data,
classNameLabel,
input,
label,
type,
popup
}:any):any=>{
const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
const handleClick=()=>{
    setIsComponentVisible(true)
}
return(
    <div>
        <div className="flex relative ">
        <input {...input}  type={type} id="check_note" className={classNameInput}></input>
        <label htmlFor="check_note" className={`${classNameLabel} info-hover`}>{label} </label>
        
        <div ref={ref}>
            <RenderDropLeft action={handleClick} icon="/info-icon.svg" className="-top-0 -right-6 "/>
            {isComponentVisible && 
            
                
                <div className="absolute   bg-[#fefefe] shadow-round w-[18rem] z-[60] ">
                        <RenderInfo data={data}/>
                </div>
        
            }
            </div>
        
        </div>
    </div>
)

}

export const RenderCountToggle=({

input,


}:any):any=>{

const decrease=()=>{
    
    if(input.value > 0)input.onChange(parseInt(input.value) - 1)
}
const increase=()=>{
    
    input.onChange(parseInt(input.value) + 1)
}
input.value=input.value ? input.value : 0
return(
    <div className="flex flex-row  gap-2 w-full items-center justify-center col-start-3 col-end-4">
    
    <button type="button" onClick={decrease} className="btn-primary bg-gray-300 rounded flex-[2_1_0%]  ">-</button>
    
    <input {...input}  className="w-full p-2 text-center rounded-md h-3/4 border-solid border-[1px] flex-[2_1_0%] border-gray-200"/>
    
    
    <button type="button" onClick={increase} className="btn-primary flex-[2_1_0%] bg-gray-300 rounded">+</button>

    </div>
)

}


export const RenderInfo=({data}:any)=>{
return(
    <div className="p-3 px-4 w-[20rem] ">
        <p className="font-semibold">Số lượng tối đa được tải lên</p>
        <ul className="list-square list-inside ">
        {data.map((item:any,index:any):any=>{
            return(
            <li key={index}>
                <a className="font-normal">{item.name}</a>
            </li>
            )
        })}
        </ul>
        
    </div>
)
}

export const RenderImage=({data,action}:any):any=>{


return(
    <div className="flex gap-7 flex-wrap w-full pt-3">
    {data.length<20 && 
        <button  onClick={action} className="w-[8.5rem] h-[8.5rem] ">
        <div className="relative w-[8.5rem] h-[8.5rem] border-[1px] border-dashed rounded-lg">
            <Image  layout="fill" objectFit="contain"  src="/upload-image.svg"  />
        </div>
        </button>
    }
    {data.map((item:any,index:any):any=>{
        return(
        <div key={index} className="relative w-[8.5rem] h-[8.5rem] border-[1px] border-solid rounded-lg">
            <Image   layout="fill" objectFit="contain"   src={item} />
            <div className="absolute -right-2 -top-2.5">
            <button className="w-5 h-5  bg-black rounded-full">
                <div className="relative w-5 h-5 ">
                <Image   layout="fill" objectFit="contain"   src="/closed-white.svg" />
                </div>
            </button>
            </div>
        </div>
        )
    })}
    
    </div>
)
}

export const RenderVideo=({data,action}:any):any=>{


return(
    <div className="flex gap-2 flex-wrap w-full h-full pt-3">
    {data.map((item:any,index:any):any=>{
        return(
        <div key={index} className="relative w-full h-full">
            <video controls width="100%" height="100%">
            <source src={item}  />
    
            </video>
            <div className="absolute -right-2 -top-2.5">
            <button className="w-5 h-5  bg-black rounded-full">
                <div className="relative w-5 h-5 ">
                <Image  width="100%" height="100%" layout="fill" objectFit="contain"   src="/closed-white.svg" />
                </div>
            </button>
            </div>
        </div>
        )
    })}

    </div>
)
}

export const RenderLink=({  
input,data,
label,description,
img,type,
}:any):any=>{

const [selectedFile, setSelectedFile] = useState([])
const [preview, setPreview] = useState([])
const fileUpload = useRef<any>(null);
const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
const handleClick=()=>{
    setIsComponentVisible(true)
}
useEffect(() => {

    if (selectedFile.length===0) {
        setPreview([])
        return
    }
    let array=[] as any
    [...selectedFile].forEach((file) => {
        const objectUrl = URL.createObjectURL(file) 
        array.push(objectUrl)
    })
    
    setPreview(array)
    input.onChange(array)
    
}, [selectedFile])
const onSelectFile = (e:any) => {

    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile([])
        return
    }
    let droppedFiles = e.target.files;
    setSelectedFile(droppedFiles)
}

const handleUpload = () => {

    fileUpload.current.click()
};
return(
    <div>
        
        <div className="inline-flex relative items-center cursor-pointer item-center mb-2">
        <p className="font-semibold ">{label}</p>
        <RenderDropLeft action={handleClick} icon="/info-icon.svg" className="-top-0 -right-6 "/>
        <div ref={ref}>
                
                {isComponentVisible && data &&
            
                    
                    <div className="absolute  top-5 bg-[#fefefe] shadow-round w-[18rem] z-[60] ">
                        <RenderInfo data={data}/>
                    </div>
            
                }
            </div>
        </div>
        <input ref={fileUpload} className="hidden"  type={type} accept={input.name === "image" ? "image/*" : "video/*"} onChange={onSelectFile} multiple={input.name === "video" ? false : true}/>
        {selectedFile.length > 0 ? 
            ( (input.name==="image" && <RenderImage data={preview} action={handleUpload}/>)||
            (input.name==="video" && <RenderVideo  data={preview} action={handleUpload}/>)
            )
        :
            <button onClick={() => handleUpload()} className="w-full">
            <div className="w-full h-36 bg-slate-100 flex flex-col items-center justify-center border-dashed border-slate-300 border-[1px] rounded-lg">
                <div className="relative w-auto h-auto">
                <Image width="100%" height="100%" layout="intrinsic" objectFit="contain"  src={img} />
                </div>
                <p>{description}</p>
            </div>
            </button>
        }
    </div>
)

}

export const RenderLink2=({  
input,classNameInput,
label,description,
img,type,

}:any):any=>{

const [change,setChange]=useState(input.value)
const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
const handleClick=()=>{
    setIsComponentVisible(true)
}

return(
    <div className="flex gap-2">
        <div className="w-5 h-5 bg-black relative">
        <Image width="100%" height="100%" layout="intrinsic" objectFit="contain"  src={img} />
        </div>
        <div className="relative" ref={ref} >
        <button type="button" onClick={handleClick} className="text-left">{input.value ? input.value : description}</button> 
        {isComponentVisible && (
            <div className="absolute top-6 ">
            <input {...input} type={type} placeholder={label} value={change}  onChange={e => setChange(e.target.value)} className={`${classNameInput}`}/>
            </div>
        )}  
        </div>
    </div>
)

}
  
export const RenderInput = ({
    classNameInput,renderDropLeftIcon,
    classNameLabel,
    input,
    label,
    type,
    meta: { touched, error, warning }
  }:any):any => {
    const [isClick,setIsClick]=useState(true)
    const [change,setChange]=useState(input.value)
    useEffect(()=>{
      if(input.name ==="room" || input.name ==="wc"){
        if(change > 100){
          setChange(100)
          input.onChange(input.value = 100)
        }
      }else if(input.name ==="areas" ){
        if(change > 1000000){
          setChange(1000000)
          input.onChange(input.value = 1000000)
        } 
      }else if(change>999000000000 && input.name==="room" && input.name==="wc" && input.name==="areas"){
        setChange(999000000000)
        input.onChange(input.value = 999000000000)
      }
      if(warning && input.name==="room" && input.name==="wc" && input.name==="areas"){
        setChange(1)
        input.onChange(input.value = 1)
      }
  
    },[change,warning])
    return(
      <div className="space-y-1">
        
        <label className="font-semibold">{label}</label>
        {isClick &&
            ((error && <span className="error">*</span>) ||
              (warning && <span className="warning">*</span>))}
        <div>
          <input {...input}  placeholder={label} type={type} onChange={e => setChange(e.target.value)} value={change}  className={`${classNameInput}`}/>
          
          { renderDropLeftIcon &&
            <div className="relative divide-x-2" >
              
              
              
              <div></div>
              <div className="absolute z-[4] -top-8 right-4 flex  items-center ">
                  <div className=" pl-4">{renderDropLeftIcon}</div>
              </div>
            </div>
          }
         
        </div>
      </div>
    )
}