import React, { useEffect, useState } from "react"
import Form from "./Form"
import {sampleProducts, generateId} from "./sample"

function App(){
    const [edits, setEdits] = useState(false)
    const [sortDirection, setSortDirection] = useState({title:true, price:true, quantity:true})
    const [displayInfo, setDisplayInfo] =useState(sampleProducts)
    console.log(sortDirection)
    useEffect(()=>{
        const sample=  JSON.parse(localStorage.getItem("sampleProducts"))
        if(sample){
          setDisplayInfo(sample)
      }else{
        localStorage.setItem("sampleProducts", JSON.stringify(sampleProducts))
        setDisplayInfo(sampleProducts)
      }

    }, [])
    function sort(prop){
        console.log("hey")
        if(prop === "title"){
            if(sortDirection[prop]){
                displayInfo.sort((a,b)=>{
                    const textA = a.title[0].toUpperCase();
                    const textB = b.title[0].toUpperCase();
                    console.log(textA, textB)
                    return textA > textB ?0 : -1
                })  
            }else{
                displayInfo.sort((a,b)=>{
                    const textA = a.title[0].toUpperCase();
                    const textB = b.title[0].toUpperCase();
                    console.log(textA, textB)
                    return textA > textB ?-1 : -0
                })  
            }
        }
            if(sortDirection[prop]){
                console.log("true", prop)
                console.log(displayInfo.sort((a,b)=>a[prop]-b[prop]))
                console.log(displayInfo)
            }else{
                console.log("false", prop)
                console.log(displayInfo.sort((a,b)=>b[prop]-a[prop]) )
            }
            setSortDirection(prev=>({...prev, [prop]:!prev[prop] }))

       }
    const createTable = displayInfo.map(prod=>{
        return(
         <tr>
            <td>
                {prod.title}
            </td>
            <td>
                {prod.description}
            </td>
            <td>
                {prod.price}
            </td>
            <td>
                {prod.quantity}
            </td>
            <td>
                <img src = {prod.image}alt = "" width = "100" height = "100"/>
            </td>
            <button onClick = {()=>toggleEdit(prod)}>Edit</button>
            <div className = {edits.title === prod.title? "form":"hidden"}>
                <Form edits = {prod} addOrEdit = {addOrEdit} toggle = {toggleEdit} />
            </div>
        </tr>
        )
    })
    function addOrEdit(aOE, input){
        if(aOE === "edit"){
            console.log(aOE, input)
            setDisplayInfo(prev=>{
                const updatedArray = prev.map(prod=>prod._id===input._id? input : prod)
                localStorage.setItem("sampleProducts", JSON.stringify(updatedArray))
                return updatedArray
            })
           
        }else{
            input._id = generateId()
            setDisplayInfo(prev=>[...prev, input])
            localStorage.setItem("sampleProducts", JSON.stringify([...displayInfo, input]))
        }
    }

    function toggleEdit(value){
        console.log(value)
        setEdits(value)
    }

    return(
        <div>
            <h1>All Moxy Product Grid </h1>
            <Form addOrEdit = {addOrEdit} edits = {{
                title:"",
                description:"",
                price:0,
                quantity:0,
                image:""}} />
            <table>
                <thead>
                <tr>
                    <th>
                        <p>Title </p>
                        <button onClick = {()=>sort("title")}>{sortDirection.title?"A-Z":"Z-A"}</button>
                    </th>
                    <th>Description</th>
                    <th>
                        <p>Price</p>
                        <button onClick = {()=>sort("price")}>{sortDirection.price?"lowest to highest":"highest to lowest"}</button>
                    </th>
                    <th>
                        <p>Quantity</p>
                        <button onClick = {()=>sort("quantity")}>{sortDirection.quantity?"smallest to largest":"largest to smallest"}</button>
                    </th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                    {createTable}
                </tbody>
            </table>
        </div>
    )
}
export default App 