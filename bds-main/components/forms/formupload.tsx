import Image from 'next/image';
import React from 'react';

import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import type { IValues } from '../../helps/validate';
import { validate, warn } from '../../helps/validate';
import useDevice from '../../hooks/useDevice';
import { ScrollButton } from '../button/';
import {
  RenderCheckbox,
  RenderCountToggle, RenderDrop, RenderInput, RenderInputTime, RenderLink,
  RenderLink2, RenderPopUp, RenderRadio, RenderTextArea, RenderToggle
} from '../renderUploadForm';
const data_infos=new Array(5).fill({
  name:"Vip đặc biệt 24 ảnh"
})

const du_an_data=new Array(120).fill({
  name:"du an" 
})
const street=new Array(120).fill({
  name:"du an" 
})
const city=new Array(3).fill({
  name:"Hồ Chí Minh"
})
const direction=[
  {name:"Đông"},
  {name:"Tây"},
  {name:"Nam"},
  {name:"Bắc"},

]



const UploadForm:React.FC<IValues>=(props) => {
  const { handleSubmit, pristine, reset, submitting,status,image,du_an } = props

  const {isMobile} =useDevice()

 
 

  return (
    <form className="space-y-5 mb-8 " id="formUpload" onKeyPress={(event:any):any=>{
      if (event.which === 13 /* Enter */) {
        event.preventDefault();
      }
    }} onSubmit={handleSubmit}>
        
 
  
    {/*container 1 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl  tablet:px-3">

        <h2 className="font-bold">Vị trí căn hộ</h2>
        <div >
       
          <Field
              name="du_an"
              data={du_an_data}
              renderDropLeftIcon="/search_grey.svg"
              classNameInput={`
              w-full text-placeholder
              placeholder:text-slate-400  
              bg-white rounded pl-3 py-2 pr-10
              shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
              border border-slate-300 rounded-lg
            `}     
              component={RenderPopUp}  
              type="text"
              page="Dự án"
              label="Tên dự án"
          />
          
          
        </div>
        <div className="grid grid-rows-2 grid-cols-2 tablet:flex tablet:flex-col gap-2 ">
          <div >
            <Field
              name="city"
              data={city}
              renderDropLeftIcon="/search_grey.svg"
              classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
              `}
              component={RenderPopUp}           
              type="text"
              page="Tỉnh/thành phố"
              label="Tỉnh/ thành phố"
            />
          </div>
          <div className="ml-4 tablet:ml-0">
              <Field
                name="district"
                data={city}
                renderDropLeftIcon="/search_grey.svg"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                page="Quận/ huyện"
                label="Quận/ huyện"
              />
        
          </div>
          <div >
              <Field
                  name="ward"
                  data={city}
                  renderDropLeftIcon="/search_grey.svg"
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 
                  `}
                  component={RenderPopUp}           
                  type="text"
                  page="Phường/ xã"
                  label="Phường/ xã"
                />
          </div>
        
          <div className="ml-4 tablet:ml-0" >
              <Field
                  name="street"
                  data={street}
                  renderDropLeftIcon="/search_grey.svg"
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 placeholder-red-700
                  `}
                  component={RenderPopUp}           
                  type="text"
                  label="Đường/ phố"
                  page="Đường/ phố"
                />
           
          </div>
        
        </div>
        <div >
              <Field
                  name="address"
                  
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 
                  `}
                  component={RenderInput}           
                  type="text"
                  label="Địa chỉ cụ thể"
              />
          
        </div>
    </div>

    {/*container 2 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3 ">
      <h2 className="font-bold">Thông tin chi tiết</h2>
      <div>
            <Field
                name="TypeOfApartment"
                data={city}
                renderDropLeftIcon="/search_grey.svg"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Loại hình căn hộ"
                page="Loại hình căn hộ"
              />
          
      </div>
      <div>
              <Field
                name="areas"
                renderDropLeftIcon="m2"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderInput}           
                type="number"
                label="Diện tích"
              />
          
      </div>
      <div>
              <Field
                name="room"
                renderDropLeftIcon="phòng"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderInput}           
                type="number"
                label="Số phòng ngủ"
              />
       
      </div>
        <div >
              <Field
                name="wc"
                renderDropLeftIcon="phòng"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderInput}           
                type="number"
                label="Số phòng vệ sinh"
              />
        </div>
        <div >
              <Field
                name="prices"
                showMoney={true}
               
                renderBottom={true}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderDrop}           
                type="number"
                label="Giá thuê"
              />
        </div>
        <div>
            <div className="flex items-center py-4">
                <span className="flex-shrink text-md text-gray-400   font-light">Thông tin bổ sung</span>
                <div className="flex-grow h-px bg-gray-200 "></div>
            </div>
        </div>
        <div >
              <Field
                  name="deposits"
                  renderDropLeftIcon="đ"
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 
                  `}
                  component={RenderInput}           
                  type="number"
                  label="Tiền đặt cọc"
              />
       
        </div>
        <div className="grid grid-rows-3 grid-cols-2 gap-2 tablet:flex tablet:flex-col">
          <div >
              <Field
                name="main_door_direction"
                renderDropLeftIcon="/search_grey.svg"
                data={direction}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Hướng cửa chính"
                page="Hướng cửa chính"
              />
          

          </div>
          <div className="ml-4 tablet:m-0">
              <Field
                name="balcony_direction"
                renderDropLeftIcon="/search_grey.svg"
                data={direction}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Hướng ban công"
                page="Hướng ban công"
              />
           
          </div>
          <div >
              <Field
                name="floor"
             
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderInput}           
                type="number"
                label="Tầng thứ"
              />
           
          </div>
        
          <div  className="ml-4 tablet:m-0">
              <Field
                name="block"
             
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderInput}           
                type="text"
                label="Block/tháp"
              />
            
           
          </div>
          <div  >
              <Field
                name="minimum_rental_period"
                data={city}
                renderDropLeftIcon="/search_grey.svg"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="number"
                label="Thời gian thuê tối thiểu"
                page="Thời gian thuê tối thiểu"
              />
          
          </div>
          <div className="ml-4 tablet:m-0" >
              <Field
                name="payment_period"
                renderDropLeftIcon="/search_grey.svg"
                data={city}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="number"
                label="Kỳ thanh toán"
                page="Kỳ thanh toán"
              />
           
          </div>
        
        
        </div>
        <div className="space-y-3 w-full ">
          <p className="font-semibold  ">Tình trạng nội thất {!status && <span className="text-red-500">*</span>}</p>
          <div className='space-x-2 flex select-none w-full tablet:text-xs hideinput' >
              <div>
                <Field name="status" component={RenderRadio} id="none" type="radio" value="none" label="Chưa có"/>
              </div>
              <div>
                <Field name="status" component={RenderRadio} id="basic" type="radio"  value="basic" label="Cơ bản"/>
              </div>
              <div>
                <Field name="status" component={RenderRadio} id="full" type="radio"  value="full" label="Đầy đủ"/>
              </div>
              <div>
              <Field name="status" component={RenderRadio} id="vip" type="radio"  value="vip" label="Cao cấp"/>
              </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold  ">Đặc điểm căn hộ</p>
          <div className="tablet:text-xs">
            <Field name="dac_diem" component={RenderRadio} id="can_goc" type="checkbox"  value="1" label="Căn góc"/>
          </div>
        </div>
        <div>
            <div className="flex items-center py-4">
                <span className="flex-shrink text-md text-gray-400   font-light">Hình ảnh căn hộ và video</span>
                <div className="flex-grow h-px bg-gray-200 "></div>
            </div>
        </div>
        <div className="space-y-2">
            <Field
                name="image"
                component={RenderLink}           
                label="Hình ảnh"
                data={data_infos}
                description="Đăng từ 1 đến 20 hình ảnh"
                img="/upload-image.svg"
                type="file" 
            />
        </div>
        <div className="space-y-2">
            <Field
                name="video"
                data={data_infos}
                component={RenderLink}           
                label="Video"
                type="file"   
                description="Đăng tối đa 1 video"
                img="/upload-video.svg"
            />
        </div>
        <div >
            <Field
                name="youtube"
                component={RenderLink2}  
                type="text"     
                description="Hoặc thêm video từ Youtube"
                img="/play-button.svg"
                classNameInput="w-[20rem] h-[3rem] text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300"
                label="Nhập link youtube"
            />
        </div>
        <div className="flex-grow h-px bg-gray-200 "></div>
        
  
        
    </div>

    {/*container 3 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
      <h2 className="font-bold">Thông tin mô tả</h2>
      <div>
              <Field
                name="title"
                id="title"
                classNameInput=" text-placeholder
                form-textarea
                w-full h-[4rem] 
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 "
                component={RenderTextArea}           
                type="number"
                maxtext={100}
                label="Tiêu đề"
              />
          
         
          
      </div>
      <div>
              <Field
                name="description"
                id="description"
                classNameInput=" text-placeholder
                form-textarea text-placeholder
                w-full h-[14rem] 
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 "
                component={RenderTextArea}
                maxtext={3000}           
                type="number"
                label="Mô tả"
              />  
      </div>
    </div>

    {/*container 4 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
      <h2 className="font-bold">Thông tin liên hệ</h2>
      <div className="grid grid-cols-3 space-x-5 tablet:flex tablet:flex-col tablet:space-x-0 tablet:gap-2">
          <div >
              <Field
                name="user_name"
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
                name="zalo"
                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={RenderInput}           
                type="number"
                label="Zalo"
              /> 
          </div>
      </div>
      <div className="space-y-2">
          <p className="font-semibold  ">Bạn là cá nhân / môi giới</p>
          <div className='space-x-2 flex select-none'>
              <div>
                <Field name="individual_broker" component={RenderRadio} id="individual" type="radio"  value="individual" label="Cá nhân"/>
              </div>
              <div>
                <Field name="individual_broker" component={RenderRadio} id="broker" type="radio"  value="broker" label="Môi giới"/>

              </div>
             
          </div>
        </div>
    </div>

    {/*container 5 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
      <div className="flex flex-row justify-between">
        <h2 className="font-bold">Thông tin gói tin</h2>
        <div className="flex items-center">
          <div className="w-5 h-5 relative mr-1">
           <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/verified.svg" />
           </div>
          <p className="text-purple-500">Tăng hiệu quả đáng tin</p>
        </div>
      </div>
      <div >
            <Field
                name="time_day"
                data={city}
                renderDropLeftIcon="/search_grey.svg"
                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Số ngày đăng"
                page="Số ngày đăng"
            /> 
        
        </div>
        <div className="grid grid-cols-2">
          <div >
              <Field
                name="time_start"

                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={RenderInputTime}
                dateFormat="dd/MM/yyyy"           
                placeholder="DD/MM/YYYY"
                label="Ngày bắt đầu"
              /> 

          </div>
          <div className="ml-4">
              <Field
                name="time_range"

                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                showTimeSelect={true}
                component={RenderInputTime} 
                dateFormat="h:mm aa"          
                placeholder="hh/mm"
                label="Khung giờ"
              /> 
             
            </div>
        </div>
        <p className="text-sm opacity-60">Kết thúc ngày</p>
        <div className="flex items-center space-x-9">
              <Field
                name="check_note"
                popup={true}
                data={data_infos}
                classNameLabel={`
                   text-sm font-semibold ml-10 
                `}
                classNameInput={`
                form-checkbox rounded
                `}
                type="checkbox"
                component={RenderCheckbox} 
              
                label="Làm nổi bật tin đăng"
              /> 
        </div>
        <div>
              <Field
                name="auto_post"
                type="checkbox"
                data={data_infos}
                component={RenderToggle} 
                id="toggle" 
                label="Tự động đăng tải tin"
              /> 

          
        </div>
        {isMobile && <div className="bg-gray-100 p-2 px-3 gap-3  rounded-lg grid">
          <div className="col-start-1 col-end-3">
            <p className="font-medium">Số lần đăng lại</p>
            <p className="text-xs  text-gray-300">Lần đăng lại cuối dự kiến vào</p>
            <p>24/2/2020</p>
          </div>
          
            {/* <button type="button" onClick={decresingCountPost} className="btn-primary bg-gray-300 rounded flex-[2_1_0%]  ">-</button>
        
            <input value={countPost} className="w-full p-2 text-center rounded-md  border-solid border-[1px] flex-[2_1_0%] border-gray-200"/>
           
           
            <button type="button" onClick={incresingCountPost} className="btn-primary flex-[2_1_0%] bg-gray-300 rounded">+</button> */}
            <Field
                name="auto_post_count"
               
                component={RenderCountToggle} 
               
              /> 
          
        </div>}
          
        <div className="bg-sky-100 p-2 px-8 space-y-2  rounded-lg">
          <div className="flex justify-between">
            <p>Đơn giá / ngày</p>
            <p>1.000 đ</p>
          </div>
          <div className="flex justify-between">
            <p>Số ngày đăng tin</p>
            <p>15 ngày</p>
          </div>
          <div className="flex-grow h-px bg-sky-300"></div>
          <div className="flex justify-between">
            <p className="font-semibold">Tổng tiền thanh toán</p>
            <p>15.000 đ</p>
          </div>
        </div>
        

      
    </div>

    {/*container 6 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl flex justify-center items-center  tablet:px-8">
          {!isMobile && <ScrollButton   className="left-[0] bottom-[8%] " submitting={submitting} isSubmitButton={true}/>} 
     
    
        <button id="buttonB" type="submit" disabled={submitting} className="bg-pink-800 w-full p-3 rounded-lg text-white font-bold">Đăng tin</button>

    </div>

    </form>
  )
}

const selector = formValueSelector('uploadForm')
const mapState = (state:any) => ({
  status:selector(state, 'status'),
  initialValues:{
    du_an:''
  }
})




export default connect(mapState)(reduxForm({
  form: 'uploadForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
  enableReinitialize : true
})(UploadForm as any))


