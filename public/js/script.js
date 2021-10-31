async function getJson(url){
    let data_fetch=await fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(typeof(data))
        console.table(data)
        
    })
    console.log(typeof(data_fetch))
        console.table(data_fetch)
}
async function getData(url){
    let data_fetch =await fetch(url)
    .then(response => response)
    .then(data => {
        console.log(typeof(data))
        console.table(data.body)
    })
    console.log(typeof(data_fetch))
    console.table(data_fetch)
}

document.getElementById("button_run").addEventListener("click",()=>{
    getJson('http://localhost:3000/public/data/db.json')
})
document.getElementById("button_run1").addEventListener("click",()=>{
    getData('http://localhost:3000/public/data/db.json')
})
document.getElementById("button_run2").addEventListener("click",()=>{
    getData('http://localhost:3000/')
})
document.getElementById("button_run3").addEventListener("click",()=>{
    getData('http://localhost:3000/')
})