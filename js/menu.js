
const restaurant = 'tanuki'
const renderItems = (data) => {
    console.log(data);
    data.forEach((elem) => {
        console.log(elem);
    });
}
fetch(`./db/${restaurant}.json`)
.then((response)=> response.json())
.then((data)=>{
    renderItems(data);
})
.catch((error)=>{
    console.log(error);
})