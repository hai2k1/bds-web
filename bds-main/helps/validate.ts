import { InjectedFormProps } from 'redux-form';

export interface IValues extends InjectedFormProps{
    email: string;
    du_an:string;
    city:string;
    district:string;
    ward:string;
    street:string;
    address:string;
    TypeOfApartment:string;
    areas:number;
    room:number;
    wc:number;
    prices:number;
    deposits:number;
    main_door_direction:string;
    balcony_direction:string;
    floor:number;
    block:number;
    minimum_rental_period:number;
    payment_period:number;
    status:string;
    dac_diem:string;
    image:any;
    video:any;
    title:string;
    description:string;
    user_name:string;
    user_phone:string;
    zalo:string;
    individual_broker:string;
    time_day:number;
    time_start:Date;
    time_range:string;//chưa biết type
    check_note:boolean;
    auto_post:boolean;
    auto_post_count?:boolean;
}

const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;


const IsNull = <T,>(value: T):boolean => {
    if(!value) return true
    else return false
}

const IsEmail =(value:string):boolean=>{
    if(regexEmail.test(value)) return true
    else return false
}
export const validate=(values:IValues):any => {
    const errors={} as any

    if (!values.email) {
      errors.email = true
    }
    if (!values.du_an) {
      errors.du_an = true
    }

    if(!values.city){ 
        errors.city = true
    }

    if (!values.district) {
      errors.district = true
    }

    if(!values.ward){ 
        errors.ward = true
    }

    if (!values.TypeOfApartment) {
      errors.TypeOfApartment = true
    }

    if(!values.address){ 
        errors.address = true
    }

    if(!values.areas){ 
        errors.areas = true
    }else if(values.areas < 10){
        errors.areas = true
    }

    if (!values.room) {
      errors.room = true
    }else if(values.room < 1){
        errors.room = true
    }

    if(!values.wc){ 
        errors.wc = true
    }else if(values.wc < 1){
        errors.wc = true
    }

    if (!values.prices) {
      errors.prices = true
    }else if(values.prices < 10){
        errors.prices = true
    }

    if(!values.status){ 
        errors.status = true
    }
   
    if (!values.title) {
        errors.title = true
    }else if(values.title.length < 30){
        errors.title = true
    }

    if(!values.description){ 
        errors.description = true
    }

    if (!values.user_name) {
        errors.user_name = true
      }
      
    if(!values.user_phone){ 
        errors.user_phone = true
    }
    
    return errors
}
export const warn = (values:IValues):any => {
    const warnings = {} as any

    if (values.deposits < 100000) {
      warnings.deposits = true
    }

    if(values.floor < 1){
        warnings.floor = true
    }

    return warnings
}