
/**
 * Async Fetch
 * @param {String} target -url json
 * @returns  {JSON} dataset
 */
 const dataFetchAsync = async (target) => {
    const response = await fetch(target)
    if(!response.ok){
        const message="error message"
        throw new Error(message)
    }
    const dataset = await response.json()

     
    return dataset
}

document.getElementById("button_run").addEventListener("click",()=>{
   dataFetchAsync(`http://localhost:5000/db`)
   .then(data=>{
       console.log(data)
   })
   .catch(error=>{
       error.message
   })
})
document.getElementById("button_run1").addEventListener("click",()=>{
    let value_id=document.getElementById("db_id").value
    console.log(value_id)
    dataFetchAsync(`http://localhost:5000/db${value_id.toString()}`)
        .then(data=>{
            console.log(data)
        })
})
document.getElementById("button_run2").addEventListener("click",()=>{
    fetch(`http://localhost:3000/`)
})
document.getElementById("button_run3").addEventListener("click",()=>{
    fetch(`http://localhost:3000/`)
})