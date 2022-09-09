export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
    name?:string }
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}
export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}
export interface HomeDesktopProps extends React.ComponentPropsWithoutRef<'div'> {}
export interface QueryProps extends React.ComponentPropsWithoutRef<'div'> {
    data:DataProps
}


export interface DataProps{
    title: string;
    prices: number;
    followBy: string;
    room: number;
    wc: number;
    areas:number;
    address: string;
    author: string;
    datetime: Date;
    image:string;
    image2:string
}
export interface Card extends React.ComponentPropsWithoutRef<'div'> {
    data:DataProps,
    isVertical?: boolean,
    notchange?: boolean,
}
export interface CardNewsProp extends React.ComponentPropsWithoutRef<'div'> {}

export interface IPrices{
    price:number
}
