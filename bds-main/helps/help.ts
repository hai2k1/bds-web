const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;


export const IsNull = <T,>(value: T):boolean => {
    if(!value) return true
    else return false
}

export const IsEmail =(value:string):boolean=>{
    if(regexEmail.test(value)) return true
    else return false
}
export function getNumberWithStep(a:number, b:number, step:number) {
    function randomInt(a:number, b:number) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    if (a > b) {
      // Ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    step = Math.abs(step)
    return a + randomInt(0, Math.floor((b - a)/step)) * step;
  }

