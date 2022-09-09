import dynamic from 'next/dynamic';
    

    
export const RenderToggle = dynamic<any>(() => import('./render').then((mod) => mod.RenderToggle), {
      ssr: false
});
export const RenderPopUp = dynamic<any>(() => import('./render').then((mod) => mod.RenderPopUp), {
      ssr: false
});
export const RenderDropLeft = dynamic<any>(() => import('./render').then((mod) => mod.RenderDropLeft), {
      ssr: false
});
export const RenderDropBottom = dynamic<any>(() => import('./render').then((mod) => mod.RenderDropBottom), {
      ssr: false
});
export const RenderPrices = dynamic<any>(() => import('./render').then((mod) => mod.RenderPrices), {
      ssr: false
});
export const RenderRadio = dynamic<any>(() => import('./render').then((mod) => mod.RenderRadio), {
      ssr: false
});
export const RenderTextArea = dynamic<any>(() => import('./render').then((mod) => mod.RenderTextArea), {
      ssr: false
});
export const RenderDrop = dynamic<any>(() => import('./render').then((mod) => mod.RenderDrop), {
      ssr: false
});
export const RenderInputTime = dynamic<any>(() => import('./render').then((mod) => mod.RenderInputTime), {
      ssr: false
});
export const RenderCheckbox = dynamic<any>(() => import('./render').then((mod) => mod.RenderCheckbox), {
      ssr: false
});
export const RenderCountToggle = dynamic<any>(() => import('./render').then((mod) => mod.RenderCountToggle), {
      ssr: false
});
export const RenderInfo = dynamic<any>(() => import('./render').then((mod) => mod.RenderInfo), {
      ssr: false
});
export const RenderImage = dynamic<any>(() => import('./render').then((mod) => mod.RenderImage), {
      ssr: false
});
export const RenderVideo = dynamic<any>(() => import('./render').then((mod) => mod.RenderVideo), {
      ssr: false
});
export const RenderLink = dynamic<any>(() => import('./render').then((mod) => mod.RenderLink), {
      ssr: false
});
export const RenderLink2 = dynamic<any>(() => import('./render').then((mod) => mod.RenderLink2), {
      ssr: false
});
export const RenderInput = dynamic<any>(() => import('./render').then((mod) => mod.RenderInput), {
      ssr: false
});