import React, {useState } from "react"
function Form(props){
    const {edits, addOrEdit, toggle} = props
    const [newProd, setNewProd] = useState(false)
    const [inputs, setInputs] = useState({
        title:edits.title,
        description:edits.description,
        price:edits.price,
        quantity:edits.quantity,
        image:edits.image,
        _id:edits._id
    })

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prev=>({...prev, [name]:value}))
    }
    function handleSubmit(e){
        if(edits.title !== ""){
            addOrEdit('edit', inputs)
            toggle(false)
        }else{
            addOrEdit('set', inputs)
        }
        
    }

    return(
        <div>
            <h3 onClick = {()=>setNewProd(prev=>!prev)}>Enter a New Product</h3>
            <form>
                <label>Name the product</label>
                <br/>
                <input
                name = "title"
                value = {inputs.title}
                onChange = {handleChange}
                type = "text"
                />
                <br/>
                <label>Describe the Product</label>
                <br/>
                <input
                name = "description"
                value = {inputs.description}
                onChange = {handleChange}
                type = "text"
                />
                <br/>
                <label>How much does it cost?</label>
                <br/>
                <input
                name = "price"
                value = {inputs.price}
                onChange = {handleChange}
                type = "text"
                />
                <br/>
                <label>How many will be available</label>
                <br/>
                <input
                name = "quantity" 
                value = {inputs.quantity}
                onChange = {handleChange}
                type = "text"
                />
                <br/>
                <label>Add a Picture of the Product</label>
                <br/>
                <input
                name = "image"
                value = {inputs.image}
                onChange = {handleChange}
                type = "text"
                />
                <br/>
            <button onClick = {handleSubmit}>SUBMIT</button>

            </form>
        </div>
    )
}
export default Form 