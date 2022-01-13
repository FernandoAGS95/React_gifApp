import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {


    // const categories = ['one punch','Samurai X','Dragon Ball'];
    const [categories, setcategories] = useState(['one punch'])

    // const handleAdd =()=>{
    //     const nuevoItem = 'Hunter x Hunter';
    //     setcategories([...categories,nuevoItem]);
    //     //si quisiera que estuviera al inicio 
    //     // setcategories([nuevoItem,...categories]);
    //     //otra opcion
    //     // setcategories(caats=>[...caats,nuevoItem]);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={setcategories}/>
            <hr />
            
            <ol>
                {categories.map((categorie) =>  
                        <GifGrid key={categorie} category={categorie}/>
                
                )}
            </ol>
        </>
    )
}
