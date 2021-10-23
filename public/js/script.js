async function getJson(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(typeof(data))
        console.table(data)
    })
}
async function getData(url){
    fetch(url)
    .then(response => response)
    .then(data => {
        console.log(typeof(data))
        console.table(data.body)
    })
}

document.getElementById("button_run").addEventListener("click",()=>{
    getJson('http://localhost:5000/api/')
})
document.getElementById("button_run1").addEventListener("click",()=>{
    getData('http://localhost:5000/2/')
})
document.getElementById("button_run2").addEventListener("click",()=>{
    getData('http://localhost:5000/3/')
})
document.getElementById("button_run3").addEventListener("click",()=>{
    getData('http://localhost:5000/4/')
})