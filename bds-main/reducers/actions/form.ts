
export interface FormState {
    name: string;
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
    main_door_direction:string;
    balcony_direction:string;
    floor: number;
    block:number;
    minimum_rental_period:number;
    payment_period:number;
    status:string;
    dac_diem:string;
    video:any;//chưa biết
    image:any;//chưa biết
    title:string;
    description:string;
    user_phone:string;
    zalo:string;
    individual_or_broker:string;
    time_day:number;
    time_start:Date;
    time_range:number;
    check_box:boolean;
    auto_post:boolean;
}

const initialState: FormState[] = []