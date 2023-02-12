//Challenge En Clase
import { useState } from "react";
export const GitApp = () =>{
    const [categories, setCategoris] = useState (['First Categorty'])
    const [category, setCategory] = useState (['First Categorty'])

    const AddCategory = () => {
        setCategoris(list => [...list, category])
        setCategory('')
    }
    const SetCategory = (evt) => {
        setCategory  (evt.target.value)
    }

    return (
        <>
            <h1>GitApp</h1>
            <input type="text" value={category}>
                onChange={(event) => onSetCategory(event )}
            </input>
            <button> onClick={() => onAddCategory()} Add Category</button>
            <ol>
                {
                    categories.map(
                        (category, key) =>
                        {
                            return <li> key= {key} {category}</li>
                        }
                    )
                }
            </ol>

        </>
    )
}