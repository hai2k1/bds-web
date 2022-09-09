import dynamic from 'next/dynamic';
    
import { PopUpProps } from './render';
    
export const RenderPopUp = dynamic<PopUpProps>(() => import('./render').then((mod) => mod.RenderPopUp), {
      ssr: false
});
