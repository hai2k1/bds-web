import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import type { IValues } from '../../helps/validate';
import { validate, warn } from '../../helps/validate';
import { RenderInput, RenderTextArea } from '../renderContactForm';


interface IProps extends  IValues  {
    hidden: boolean
}

const ContactForm:React.FC< IProps> =(props:IProps)=>{
    
    const { handleSubmit, pristine, reset, submitting,hidden } = props

    console.log(hidden)
    return(
        <form className="space-y-5 mb-4 " id="formContact" onKeyPress={(event:any):any=>{
            if (event.which === 13 /* Enter */) {
                event.preventDefault();
              }
            }} onSubmit={(e)=>{
              
              e.preventDefault();
              handleSubmit
              }}>


            <div className={`p-5 px-5  ${hidden ? "bg-gray-50 shadow-e1 border-solid border-[1px]":"bg-white"} space-y-7 rounded-xl  tablet:px-3`}>
                {!hidden && <div className="space-y-4">
                    <h2 className="font-bold">Liên hệ với chúng tôi</h2>
                    <div className="h-[2px] bg-gray-200 "></div>
                </div>}
                 
                <div className="flex gap-4 ">
                    {!hidden&&<div className="flex-[1_1_50%] space-y-4">
                        <p>Chúng tôi biết bạn có nhiều sự lựa chọn.Nhưng cảm ơn vì đã lựa chọn ABC.com</p>
                        <p><span className="font-semibold">Hotline:</span>090123456</p>
                        <p><span className="font-semibold">Email:</span>xyz@gmail.com</p>
                        <p><span className="font-semibold">Zalo:</span>090123456</p>
                        <p><span className="font-semibold">Viber:</span>090123456</p>
                        <p><span className="font-semibold">Địa chỉ:</span>Tòa nhà Lexington Residence, Số 38 Trần Não, Phường An Phú, Quận 2, Thành phố Hồ Chí Minh</p>
                    </div>}
                    <div className="flex-[1_0_50%] space-y-4">
                        <div >
                            <Field
                                name="user_name"
                                check={true}
                                classNameInput={`
                                w-full text-placeholder
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 
                                `}
                                component={RenderInput}           
                                type="text"
                                label="Họ và Tên"
                            /> 
                        </div>
                        <div >
                            <Field
                                name="user_phone"
                                check={true}
                                classNameInput={`
                                w-full text-placeholder
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 
                                `}
                                component={RenderInput}           
                                type="number"
                                label="Số điện thoại"
                            /> 
                        
                        </div>
                        <div >
                            <Field
                                name="email"
                                check={true}
                                classNameInput={`
                                w-full text-placeholder
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 
                                `}
                                component={RenderInput}           
                                type="text"
                                label="Email"
                            /> 
                        </div>
                        <div className={`${!hidden &&"pt-10"}`}>
                            <Field
                                name="description"
                                check={true}
                                classNameInput={`
                                w-full text-placeholder
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 h-[200px]
                                `}
                                component={RenderTextArea}           
                                type="text"
                                label="Nội dung"
                            /> 
                        </div>
                       
                        <button type="submit" disabled={submitting} className={`${!hidden ? "bg-purple-500" : "bg-yellow-400"} w-full p-2 rounded-full text-white font-bold`}>Gửi tin nhắn</button>
             
                    </div>
                </div>
               

            </div>


        </form>
    )
}

const mapState = (state: any) => ({
    initialValues :{
        emai:''
    }
})
export default connect<{},{},any>(mapState)(reduxForm({
    form: 'contactForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn, // <--- warning function given to redux-form
    enableReinitialize : true
})(ContactForm as any))