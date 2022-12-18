import firebase from '../../config/firebase'


const set_data =(data)=>{
    return(dispatch)=>{
        dispatch({type:"SETDATA",data: data})
        
    }
}


const get_product =()=>{
    return(dispatch)=>{
     
       firebase.database().ref('/').child('product').on('child_added',(data)=>{
        //    console.log(data.val())
       dispatch({type: "SETFIREBASEDATA",payload:data.val()})
       }) 
    }
}


export{
    set_data,
    get_product
}