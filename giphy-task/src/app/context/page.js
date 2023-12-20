'use client'
import { createContext, useState } from "react";
export const Context = createContext(null);
function GlobalState({children}){
    
    const [favourite, setFavourite] = useState([])
    function handleFavourite(getCurrentItem){
        // console.log(getCurrentItem);
        let favouriteItems = [...favourite]
        const idx = favouriteItems.findIndex(item => item.id === getCurrentItem.id);
        // console.log(idx);
        if(idx === -1){
            favouriteItems.push(getCurrentItem)
        }
        setFavourite(favouriteItems)
        // console.log(favourite);
    }

    return (<Context.Provider value={{favourite,handleFavourite}}>{children}</Context.Provider>)

}

export default GlobalState;