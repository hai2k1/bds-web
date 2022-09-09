import dynamic from 'next/dynamic';
    

    
export const RenderInput = dynamic<any>(() => import('./render').then((mod) => mod.RenderInput), {
      ssr: false
});
export const RenderTextArea = dynamic<any>(() => import('./render').then((mod) => mod.RenderTextArea), {
      ssr: false
});