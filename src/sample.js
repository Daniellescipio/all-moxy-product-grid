function randomNums(){
    return Math.floor(Math.random() * 20)
}
function generateId(){
    return Math.floor(Math.random() * 100000)
}

const sampleProducts = [
    {
        title:"Petunia",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in risus id tellus pharetra venenatis in ac turpis. Fusce placerat nec elit sit amet laoreet.",
        price:randomNums(),
        quantity:randomNums(),
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5r9ybsct0NIjziXTJDduD0iLlR6qKyWstqndfR_IJbaJocF31lKs6ixTM0nA&usqp=CAc",
        _id:generateId()
    },
    {
        title:"Chrysanthem",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in risus id tellus pharetra venenatis in ac turpis. Fusce placerat nec elit sit amet laoreet.",
        price:randomNums(),
        quantity:randomNums(),
        image:"https://www.gardendesign.com/pictures/images/675x529Max/site_3/paradiso-pink-mum-fall-flower-proven-winners_14469.jpg",
        _id:generateId()
    },
    {
        title:"Dahlia",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in risus id tellus pharetra venenatis in ac turpis. Fusce placerat nec elit sit amet laoreet.",
        price:randomNums(),
        quantity:randomNums(),
        image:"https://images.unsplash.com/photo-1599853508921-08c695579f8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        _id:generateId()
    },
    {
        title:"Marigold",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in risus id tellus pharetra venenatis in ac turpis. Fusce placerat nec elit sit amet laoreet.",
        price:randomNums(),
        quantity:randomNums(),
        image:"https://images.unsplash.com/photo-1602700914499-047fb4ea8c2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFyaWdvbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        _id:generateId()
    },
    {
        title:"Rose",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in risus id tellus pharetra venenatis in ac turpis. Fusce placerat nec elit sit amet laoreet.",
        price:randomNums(),
        quantity:randomNums(),
        image:"https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        _id:generateId()
    }
]

export  {sampleProducts, generateId}