import React, { useState } from 'react'

function GroceryBud() {

    const [grocery, setgrocery] = useState([])

    const [input, setinput] = useState("")


    const handleAdd1 = () => {
        setgrocery([...grocery, input])
    }

    const handleAdd = (vignesh) => {
        setinput(vignesh.target.value)
    }

    function handleDelete(index){
        const newList = grocery;
        newList.splice(index,1);
        setgrocery([...newList]);
    }

    return (
        <div>


            <h2>Grocery Bud</h2>

            <input type="text" placeholder='Add Grocery' onChange={handleAdd} />
            <button onClick={handleAdd1}>Add item</button>

            <div>
                <h2>add: {input}</h2>

                 {grocery.map((da) => (
                    <div>

                        <h1>{da}</h1>
                        <button onClick={handleDelete}>Delete</button>
                        
                    </div>
                ))} 
            </div>



        </div>
    )
}

export default GroceryBud