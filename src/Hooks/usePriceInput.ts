import { ChangeEvent, useState } from "react";

const usePriceInput = (minPrice : number, maxPrice: number)=>{
   const [prevPrice, setPrevPrice] =  useState(0)

   const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        let input = event.target;
        let value = +input.value;
        if(value > maxPrice || value < minPrice){
            input.value = prevPrice.toString();
        }else{
            setPrevPrice(value);
        }
   }

   return handleChange;
}

export default usePriceInput;