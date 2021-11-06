// const array = [11,22,33,44,55]

// array.forEach((elem,index)=>{
//     if(index <2){
//         console.log(elem);
//     } else if (index === 3) {
//         console.log(elem);
//     }
// })
//   for(let i = 0; i<array.length; i++){
//     console.log(array[i]);
//   }

const renderItems = (data) => {
    console.log(data);
    data.forEach((elem) => {
        console.log(elem);
    });
}
fetch('https://test-e1f98-default-rtdb.firebaseio.com/db/partners.json')
.then((response)=> response.json())
.then((data)=>{
    renderItems(data);
})
.catch((error)=>{
    console.log(error);
})