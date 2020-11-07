import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {set_data} from '../store/action'
import {get_product} from '../store/action'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHeart, faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

import sellIt from '../components/Images/olx.png'
import olxApp from '../components/Images/olx2.png'
import p1 from '../components/Images/p1.webp';
import p2 from '../components/Images/p2.webp';
import p3 from '../components/Images/p3.webp';
import p4 from '../components/Images/p4.webp';
import f1 from '../components/Images/f1.webp';
import f3 from '../components/Images/f3.webp';
import f4 from '../components/Images/f4.webp';
import bike1 from '../components/Images/bike1.webp';
import bike2 from '../components/Images/bike2.webp';
import bike3 from '../components/Images/bike3.webp';
import House from '../components/Images/house1.webp';
import Realme from '../components/Images/realme.webp';
import watch1 from '../components/Images/watch1.webp';
import watch2 from '../components/Images/watch2.webp';
import watch3 from '../components/Images/watch3.webp';
import Appstore from '../components/Images/appstore.png';
import Googleplay from '../components/Images/googleplay.png';







class Header extends  React.Component{

  Sell=()=>{
    this.props.data.history.push('/sell')
  }

render(){

 

  return (
    <div className="container-fluid">
      <div className="row bg-light">
        <div className="col-1  text-center">
          <h1>olx</h1>
        </div>

        <div className="col-3  text-center pt-2">
          <select className="loc-select custom-select rounded overflow-auto">
            <option>Punjab</option>
            <option>Sindh</option>
            <option>Islamabad</option>
            <option>Khyber Pakhtunkhwa</option>
            <option>Lahore</option>
          </select>
        </div>


        <div className="col-6  text-center pt-2  ">
          <div className="input-group mb-3">
            <input type="text" className="form-control " placeholder="Find Cars, Mobile Phones and more..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-dark" type="button" id="button-addon2"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
          </div>
        </div>

        <div className="col-1 text-center pt-2">
          <button type="button" class="btn btn-link text-dark "><b>Login</b></button>
        </div>


        <div className="col-1 text-center pt-2">
          <button onClick={()=>this.Sell()} type="button" class="sell rounded-pill"><b><FontAwesomeIcon icon={faPlus} /> SELL</b></button>
        </div>

      </div>
    </div>

  )
}
}

function Navbar() {
  return (

    <nav className="navbar navbar-expand border shadow-sm  bg-white rounded">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Categories
    </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">Action</button>
          <button class="dropdown-item" type="button">Another action</button>
          <button class="dropdown-item" type="button">Something else here</button>
        </div>
      </div>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link text-dark" href="#">Mobile Phones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Cars</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Motorcycles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Houses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Tv-Video-Audio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Tablets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Lands & Plots</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


function LastSearch() {
  return (
    <div className="last-search container rounded mt-3 py-3">

      <div className="row ">
        <div className="col-10 text-left p-2">
          <h3>Based on your last search</h3>
        </div>

        <div className="col-2 text-right p-2">
          <button type="button" class="btn btn-link text-dark "><b>View more</b></button>
        </div>
      </div>

      <div className="row text-center">

        <div className="col-3">
          <div className="card" style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={p1} style={{ width: '5rem', height: "9rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 699</h5>
              <p className="card-text text-left">DSLR camera on lowest rent</p>
            </div>
          </div>
        </div>


        <div className="col-3">
          <div className="card" style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={p2} style={{ width: '11rem', height: "9rem" }} className="card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 4000 - 10000 | Weekly</h5>
              <p className="card-text text-left">Virtual Team Required For Data Entry</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card" style={{ width: '16rem', height: "18rem" }}>
            <div className=" text-center pt-2">
              <img src={p3} style={{ width: '8rem', height: "9rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 95,000</h5>
              <p className="card-text text-left">Wedding Bridal Walima Maxi Dress</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card" style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={p4} style={{ width: '5rem', height: "9rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 8,999</h5>
              <p className="card-text text-left">Oppo A57 3GB RAM 32GB ROM</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}


class Fresh_Recomendations extends React.Component {

  get_data=(e)=>{
    this.props.data.history.push('/product',{e})
    // console.log(i)
  }

  render(){
    console.log(this.props.data)
  return (
    <div className="container mt-5">

      <div className="row ">
        <div className="col-12 text-left p-2">
          <h3>Fresh Recomendations</h3>
        </div>
      </div>


      <div className="row">
      <div className="col-3">
          <div className="card" style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={House}  style={{ width: '13rem', height: "9rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 375,000</h5>
               <p className="card-text text-left">30-Marla Triple Storey House For Rent</p>
            </div>
          </div>
        </div>
        <div className="col-3">
        <div className="card"  style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={Realme}  style={{ width: '11rem', height: "10rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 29,999</h5>
              <p className="card-text text-left">Realme 3 pro 6/128</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={f4} style={{ width: '6rem', height: "9rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 70,000</h5>
              <p className="card-text text-left">Fully padded bed set complete</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={f3} style={{ width: '11rem', height: "9rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 420,000 - Flexible</h5>
              <p className="card-text text-left">Vitz 2014/18 hasil kryn asan iqsat mein</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        
      <div className="col-3">
      <div className="card"  style={{ width: '16rem', height: "18rem" }}>
            <div className="text-center pt-2">
              <img src={f1}  style={{ width: '7rem', height: "9rem" }} className=" card-img-top" alt="" />
              <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <div className="card-body">
              <h5 className="card-title text-left">Rs 2,350,000</h5>
              <p className="card-text text-left">Honda S660 2016</p>
            </div>
          </div>
      </div>

      {this.props.data.product.map((v, i) => {
                                return<div className="col-3">
                                <div onClick={(e)=>this.get_data(i)} className="card"  style={{ width: '16rem', height: "18rem" }}>
                                      <div className="text-center pt-2">
                                        <img src={v.img1}  style={{ width: '7rem', height: "9rem" }} className=" card-img-top" alt="" />
                                        <button className="btn heart" type="button" id="button-addon2"><FontAwesomeIcon icon={faHeart} /></button>
                                      </div>
                                      <div className="card-body">
                                        <h5 className="card-title text-left">{v.price}</h5>
                                        <p className="card-text text-left">{v.title}</p>
                                      </div>
                                    </div>
                                </div>
                            })}
    


      </div>

      <div className="text-center my-5">
        <button type="button" class="load rounded">Load More</button>
      </div>

    </div>
  )}
}



function Footer() {
  return (
    <div className="container-fluid footer px-5 py-3">
      <div className="row">


        <div className="col-2">
          <p ><b>POPULAR CATEGORIES</b></p>
          <div className="small-text">
            <a>Cars</a> <br />
            <a>Flats for rent</a> <br />
            <a>Jobs</a> <br />
            <a>Mobile Phones</a>
          </div>
        </div>

        <div className="col-2">
          <p ><b>TRENDING SEARCHES</b></p>
          <div className="small-text">
            <a>Bikes</a> <br />
            <a>Watches</a> <br />
            <a>Books</a> <br />
            <a>Dogs</a>
          </div>
        </div>

        <div className="col-2">
          <p ><b>ABOUT US</b></p>
          <div className="small-text">
            <a> About OLX Group</a> <br />
            <a>OLX Blog</a> <br />
            <a>Watches</a> <br />
            <a>Contact Us</a> <br />
            <a>OLX for Businesses</a>
          </div>

        </div>

        <div className="col-2">





          <p ><b> OLX</b></p>
          <div className="small-text">
            <a> Help</a> <br />
            <a>OLX Blog</a> <br />
            <a>Sitemap</a> <br />
            <a>Legal & Privacy information</a> <br />
          </div>


        </div>

        <div className="col-4">
          <p ><b> FOLLOW US</b></p>
          <button className="btn rounded"> <FontAwesomeIcon icon={faFacebook} /></button>
          <button className="btn rounded">  <FontAwesomeIcon icon={faTwitter} /></button>
          <button className="btn rounded"> <FontAwesomeIcon icon={faYoutube} /></button>
          <button className="btn rounded">  <FontAwesomeIcon icon={faInstagram} /></button>
          <div className="mt-4">
            <img src={Appstore} className="appstore"></img>
            <img src={Googleplay} className="appstore"></img>
          </div>
        </div>
      </div>
    </div>

  )
}


function Bottom() {
  return (

    <div className="container-fluid">
      <div className="olx-bottom py-3 px-5 row ">
        <div className="col-6 text-white">
          <p className="countries">Other Countries</p>
          <a> India </a> -
        <a> South Africa</a> -
        <a> Indonesia</a>
        </div>
        <div className="col-6">
          <p className="classified">Free Classifieds in Pakistan. © 2006-2020 OLX</p>
        </div>
      </div>
    </div >

  );
}





class  Home extends React.Component{

  componentDidMount() {
    this.props.get_product()
  }


  render(){
  let user = {name: "Umair", email:"umair@gmail.com" }
  
  

  return (
    <div>
      <Header data={this.props} />
      <Navbar  />
      <img src={sellIt} ></img>
      <LastSearch />
      <Fresh_Recomendations data={this.props} />
      <div className="mt-5">
        <img src={olxApp} ></img>
      </div>

      <Footer />
      <Bottom />

      {/* <Link to={{pathname:"/product",data:{index:0}}}> Go To Product</Link> */}
      {/* <button onClick={()=>this.props.set_data(user)}>SETDATA</button> */}
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  product: state.product
})

const mapDispatchToProp =(dispatch)=> ({
    // set_data: (data)=> dispatch(set_data(data)),
    get_product: ()=> dispatch(get_product())
    
  })



export default connect (mapStateToProps,mapDispatchToProp)(Home);
export { Header, Navbar,Footer,Bottom };