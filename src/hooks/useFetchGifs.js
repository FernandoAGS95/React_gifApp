import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGif";

export const useFetchGifs = ( category )=>{
    const [state, setstate] = useState({
        data:[],
        loading:true,
    });

    //UseEfect ejecuta codigo de acuerdo a una condicion

    //El segundo parameetro el useEfect es un arreglo de dependencias
    //por endde el useEect ejecuta cierto codigo e manera conicional
    useEffect(()=>{
        //los efectos son sincronos no
        // por ende getgif es una promesa
        getGift( category )
            .then(imgs=>{
                console.log(imgs)
                setstate({
                    data:imgs,
                    loading:false
                });
            })
    },[ category ])
  
 
    return state;
}