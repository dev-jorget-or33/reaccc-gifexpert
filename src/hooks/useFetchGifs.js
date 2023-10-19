import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [ images, setImages ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const getImages = async (category) => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }
    
    useEffect( () => { 
        // getGifs(category)
        //     .then( newImages => setImages(newImages) ) 
        // // console.log(newImages)
        getImages(category)
    }, [])
    
    
    return {
        images,
        isLoading,
    }
}
