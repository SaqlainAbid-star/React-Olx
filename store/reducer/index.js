const INITIAL_STATE = {
    product : [{
     
        title: "Brand new zero Meter elegant 250cc",
        price: "Rs 440,000",
        img1: '/static/media/bike1.9437ecaa.webp',
        img2: '/static/media/bike2.ba47142a.webp',
        img3:'/static/media/bike3.7a2487b4.webp',
        add : 'Township, Lahore, Punjab',
        seller: 'Ow Motorsports',
        make: 'Sports and Heavy Bikes',
        des: "Sports and Heavy Bikes | 250cc dual cylinder | Full heavy sound"


    },
    {
        title: "Citizen Pak Air Force Watch",
        price: "Rs 12000 ",
        img1: "/static/media/watch1.0a96fcee.webp",
        img2: "/static/media/watch2.466e22ce.webp",
        img3: "/static/media/watch3.dcd55a3b.webp",
        add : 'Ali View Garden, Lahore, Punjab',
        seller: 'Saleem Ali',
        make: 'Citizen',
        des: "gifted watch | two needle watch | leather strap ",
        
    }
  
]
}


export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case "SETFIREBASEDATA":
        return({
            ...state,
           product : [...state.product,action.payload]
        })
    }
    return state;
}
