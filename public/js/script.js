
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
let clearNode=(node)=>{
    while (node.firstChild) {
      node.removeChild(node.lastChild);
    }
  }
document.getElementById("button_run").addEventListener("click",()=>{
    let parentNode=document.getElementById("client_list")
    dataFetchAsync(`/db`)
   .then(data=>{
        clearNode(parentNode)
       data.clients.forEach(elem => {
        let element=document.createElement("p")
            element.innerHTML=`${elem.name}\n`
            parentNode.append(element)  
       });
   })
   .catch(error=>{
       error.message
   })
})
document.getElementById("button_run1").addEventListener("click",()=>{
    let value_id=document.getElementById("db_id").value
    let parentNode=document.getElementById("client_list")
    console.log(value_id)
    dataFetchAsync(`/db${value_id.toString()}`)
        .then(data=>{
            clearNode(parentNode)
            let element=document.createElement("p")
            element.innerHTML=data.name
            parentNode.append(element)
            console.log(data)
        })
})
document.getElementById("button_run2").addEventListener("click",()=>{
    fetch(`http://localhost:3000/`)
})
document.getElementById("button_run3").addEventListener("click",()=>{
    fetch(`http://localhost:3000/`)
})