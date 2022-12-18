import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import firebase from '../config/firebase'



import 'bootstrap/dist/css/bootstrap.min.css'


class Sell extends React.Component {
    constructor() {
        super()
        this.state = {
           product: [],
           title: "",
           price: "",
           img1: "",
           img2: "",
           img3: "",
           add: "",
           seller: "",
           make: "",
           des: "",
           file: null,
        }
    }


    sell_Item=()=>{
        firebase.database().ref('/').child('product').push({
           title: this.state.title,
           price: this.state.price,
           img1: this.state.img1,
           img2: this.state.img2,
           img3: this.state.img3,
           add: this.state.add,
           seller: this.state.seller,
           make: this.state.make,
           des: this.state.des
        })
        this.setState({
            product: this.state.product,
            title: "",
            price: "",
            img1: "",
            img2: "",
            img3: "",
            add: "",
            seller: "",
            make: "",
            des: "",
        })
        
        
    }


    // upload=()=>{
    //     console.log(this.state.file)
        
    //     var ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)

    //    ref.on('state_changed', function(snapshot){
    //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log('Upload is ' + progress + '% done');
    //         switch (snapshot.state) {
    //           case firebase.storage.TaskState.PAUSED: // or 'paused'
    //             console.log('Upload is paused');
    //             break;
    //           case firebase.storage.TaskState.RUNNING: // or 'running'
    //             console.log('Upload is running');
    //             break;
    //         }
    //       }, 
    //       function(error) {
    //       },
    //        function() {
    //         ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //             console.log('File available at', downloadURL );
    //         });
    //       });
    //     }

    

    render() {

        // console.log(this.state.title)

        return (

            <div className="container mt-5 border border-dark rounded p-5">
                <div className="text-center mb-5">
                <h2><b>Olx Sell Item Form</b></h2>               
                </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="inputEmail4">Title</label>
                        <input value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})} type="email" className="form-control" id="inputEmail4" />
                    </div>

                    <div className="form-group col-md-8">
                        <label htmlFor="inputPassword4">Price</label>
                        <input value={this.state.price} onChange={(e)=>this.setState({price: e.target.value})} type="text" className="form-control" id="inputPassword4" />
                    </div>

                    {/* <div className="form-group col-md-8">
                        <label htmlFor="inputAddress">Image1 </label>
                        <input onChange={(e)=>this.setState({file: e.target.files[0]})} type="file" className="" id="inputAddress" placeholder="" />
                        <button onClick={this.upload} >Upload</button>
                    </div> */}

                    <div className="form-group col-md-8">
                        <label htmlFor="inputAddress">Image1 url </label>
                        <input value={this.state.img1} onChange={(e)=>this.setState({img1: e.target.value})} type="text" className="form-control" id="inputAddress" placeholder="" />
                    </div>

                    <div className="form-group col-md-8">
                        <label htmlFor="inputAddress">Image2 url </label>
                        <input value={this.state.img2} onChange={(e)=>this.setState({img2: e.target.value})} type="text" className="form-control" id="inputAddress" placeholder="" />
                    </div>

                    <div className="form-group col-md-8">
                        <label htmlFor="inputAddress">Image3 url </label>
                        <input value={this.state.img3} onChange={(e)=>this.setState({img3: e.target.value})} type="text" className="form-control" id="inputAddress" placeholder="" />
                    </div>

                    <div className="form-group col-md-8">
                        <label htmlFor="inputAddress2">Address</label>
                        <input value={this.state.add} onChange={(e)=>this.setState({add: e.target.value})} type="text" className="form-control" id="inputAddress2" placeholder="" />
                    </div>

                    <div className="form-group col-md-8">
                        <label htmlFor="inputAddress2">Make</label>
                        <input value={this.state.make} onChange={(e)=>this.setState({make: e.target.value})} type="text" className="form-control" id="inputAddress2" placeholder="" />
                    </div>

                    <div className="form-group col-md-8">
                        <label htmlFor="inputAddress2">Seller</label>
                        <input value={this.state.seller} onChange={(e)=>this.setState({seller: e.target.value})} type="text" className="form-control" id="inputAddress2" placeholder="" />
                    </div>


                    <div className="form-group col-md-8">
                        <label htmlFor="inputCity">Description</label>
                        <input value={this.state.des} onChange={(e)=>this.setState({des: e.target.value})} type="text" className="form-control" id="inputCity" />
                    </div>

                    <div className="ml-3 mt-5">
                        <button onClick={()=>this.sell_Item()} className="btn btn-primary">SELL ITEM</button>
                    </div>
              
            </div>
        )
    }
}

export default Sell;
