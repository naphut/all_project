getLogo=()=>{
    const arr=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBjFmEThh0TdKlBc0V9xRl9PCmO5jSft6Ww&s']
    const header=document.querySelector('.header');
    arr.forEach(value=>{
        header.innerHTML+=`<img src="${value}" alt="">`
    })
}
getLogo()
const getProduct=async()=>{
    const url='https://fakestoreapi.com/products?sort=desc';
    const res=await fetch(url);
    const data= await res.json()
    const boxCard=document.querySelector('.box-card')
    data.map(value=>{
        boxCard.innerHTML+=`
        <div class="card">
                    <div class="image">
                        <img src="${value.image}" alt="">
                    </div>
                    <div class="title">
                        <span>Price:$${value.price}</span>
                        <p>${value.title}</p>
                    </div>
                </div>`
    })
}
getProduct()
