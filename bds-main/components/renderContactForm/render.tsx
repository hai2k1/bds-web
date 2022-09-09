import { useState } from 'react';

export const RenderInput = ({
    classNameInput,renderDropLeftIcon,
    classNameLabel,
    input,
    label,
    type,
    check,
    meta: { touched, error, warning }
  }:any):any => {
    const [change,setChange]=useState(input.value)
    
    return(
      <div className="space-y-1">
        
        <label className="font-semibold">{label}</label>
        {check &&
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
export const RenderTextArea = ({
    classNameInput,maxtext,
    id,
    input,
    label,
   
    check,
    meta: { touched, error, warning }
  }:any):any => {
    const [change,setChange]=useState(input.value)

   
    return(
  
      <div className="space-y-1">
        <label htmlFor={id} className="font-semibold">{label}</label>
        {check &&
        ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
            <textarea {...input}  id={id}  
                value={change}
                className={classNameInput}
                placeholder={label}
                onChange={e => setChange(e.target.value)}
            ></textarea>
         
      </div>
    )
}