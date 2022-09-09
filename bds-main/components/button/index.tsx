import dynamic from 'next/dynamic';
    
import type { ScrollButtonProps } from './scrollbutton';
    
export const ScrollButton = dynamic<ScrollButtonProps>(() => import('./scrollbutton').then((mod) => mod.default), {
      ssr: false
});
export const RangeSlider = dynamic<any>(() => import('./rangeslider').then((mod) => mod.default), {
      ssr: false
});