import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

  const [categories, setCategories] = useState([ "Dragon Ball" ])

  const hasCategoriesNewCategory = (newCategory) => categories.some( category => category.replace(/\s/g, "").toLowerCase() === newCategory.replace(/\s/g, "").toLowerCase());

  const addNewCategory = (newCategory) => {
    // categories.push(newCategory)
    // categories.includes(newCategory)
    if( hasCategoriesNewCategory(newCategory) ) return;
    setCategories([ newCategory, ...categories ])
    // setCategories(["Valorant", ...categories])
    // setCategories( currentCats => [...currentCats, "Valorant"])
  }
  // console.log(categories)

  return (
    <>
      <h1>GifExpert App</h1> 
      <AddCategory onNewCategory={ addNewCategory }/>
        {     categories.map( category => 
      <GifGrid key={ category } category={ category }/> )}
    </>
  )
}

export default GifExpertApp