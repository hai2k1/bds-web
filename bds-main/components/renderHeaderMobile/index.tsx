import dynamic from 'next/dynamic';
    
import { DropProps, PopUpProps } from './render';
    
export const RenderPopUp = dynamic<PopUpProps>(() => import('./render').then((mod) => mod.RenderPopUp), {
      ssr: false
});
export const RenderDrop = dynamic<DropProps>(() => import('./render').then((mod) => mod.RenderDrop), {
      ssr: false
});