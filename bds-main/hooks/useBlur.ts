import { useEffect, useRef, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */


     


const useBlur=(initialIsVisible:any) =>{
    const [isComponentVisible, setIsComponentVisible]=useState(initialIsVisible)
    
    const ref = useRef<any>(null);
    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          setIsComponentVisible(false);
        }
      };
    
      const handleClickOutside = (event:any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
          document.removeEventListener("keydown", handleHideDropdown, true);
          document.removeEventListener("click", handleClickOutside, true);
        };
      });
    return { ref,isComponentVisible, setIsComponentVisible}
}

export default useBlur;