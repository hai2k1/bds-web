import { useEffect, useRef, useState } from "react";

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceGap,label }:any) => {
    const progressRef = useRef<any>(null);
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);
    const [labels,setLabels] = useState(label);
    const [isMath,setisMath] = useState(false);
    const handleMin = (e:any) => {
        if (maxValue - minValue > priceGap && maxValue <= max) {
        if (parseInt(e.target.value) > parseInt(maxValue)) {
        } else {
            setMinValue(parseInt(e.target.value));
        }
        } else {
        if (parseInt(e.target.value) < minValue) {
            setMinValue(parseInt(e.target.value));
        }
        }
    };

    const handleMax = (e:any) => {
        if (maxValue - minValue > priceGap && maxValue <= max) {
        if (parseInt(e.target.value) < parseInt(minValue)) {
        } else {
            setMaxValue(parseInt(e.target.value));
        }
        } else {
        if (parseInt(e.target.value) > maxValue) {
            setMaxValue(parseInt(e.target.value));
        }
        }
    };
    useEffect(()=>{
        if(label && label.includes('m2')){
            setisMath(true)
            setLabels(label.replace('m2',''))
        }
    },[labels,label])
    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
        console.log(minValue,maxValue)
    }, [minValue, maxValue, max, step]);

    return (
        <div className="grid gap-4">
            <div className="mb-1">
                <h1 className="text-[18px] w-full text-center font-bold text-gray-800 mb-1">
                    {labels} {isMath && <span>m<sup>2</sup></span>}
                </h1>
            </div>
            <div className="mb-6">
            
                <div className="slider relative h-1 rounded-md bg-gray-300">
                    <div
                    className="progress absolute h-1 bg-purple-500 rounded "
                    ref={progressRef}
                    >             
                    </div>
                    <ul className="flex  w-full h-1 text-[9px] pt-3 tablet:px-1">
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute text-[14px]  pt-[0.15rem]">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute text-[14px]  pt-[0.15rem]">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute text-[14px]  pt-[0.15rem]">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute text-[14px]  pt-[0.15rem]">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute text-[14px]  pt-[0.15rem]">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute  ">|</span></li>
                        <li className="flex justify-center relative flex-grow items-center"><span className="absolute text-[14px]  pt-[0.15rem]">|</span></li>
                    </ul>
                
                </div>

                <div className="range-input relative  ">
                    <input
                    onChange={handleMin}
                    type="range"
                    min={min}
                    step={step}
                    max={max}
                    value={minValue}
                    className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
                    />

                    <input
                    onChange={handleMax}
                    type="range"
                    min={min}
                    step={step}
                    max={max}
                    value={maxValue}
                    className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
                    />
                
                    
                </div>
            
            
            </div>
        
        </div>

    );
};

export default RangeSlider;