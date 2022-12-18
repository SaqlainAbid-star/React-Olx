import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import {set_data} from '../store/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHeart, faPlus, faChevronDown,faPhoneAlt,faShareAlt,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import { Header, Navbar,Footer,Bottom } from '../containers/Home';
import profile from '../components/Images/profile.png';




class Slider extends React.Component {

    
        
    

    render(){
       
        const e =  this.props.data.location.state.e
        // console.log(i)


    return (

       

        <div className="container-fluid my-5">

            <div className="row ">

                <div className="col-7 ml-5 slider rounded">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <img src={this.props.data.product.[e].img1} className=" bike " alt="..." />
                            </div>
                            <div className="carousel-item text-center ">
                                <img src={this.props.data.product.[e].img2} className=" bike" alt="..." />
                            </div>
                            <div className="carousel-item text-center">
                                <img src={this.props.data.product.[e].img3} className=" bike " alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="col-4  mx-4">

                    <div className="row ">
                        <div className="col-12 price rounded ">
                        <h1>{this.props.data.product.[e].price} <span className="heart p-2"><FontAwesomeIcon icon={faHeart} /></span><span className="heart p-2"><FontAwesomeIcon icon={faShareAlt} /></span></h1>
                        <p>{this.props.data.product.[e].title}</p>
                        <p className="mt-4">{this.props.data.product.[e].add}<span className="date">Sep 22</span></p>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12 seller rounded my-2 px-4 py-3">
                        <h4>Seller description</h4>

                        <div className="container mt-2">
                            <div className="row">
                                <div className="col-2">
                                <img src={profile} className="profile"></img>
                                </div>
                                <div className="ml-3 mt-2 col-8">
                                <h5>{this.props.data.product.[e].seller}</h5>
                                <span>Member since Apr 2018</span>
                                </div>
                                <div className="col-1">
                                <FontAwesomeIcon className="chevron" icon={faChevronRight} />
                                </div>
                            </div>
                       </div>

                       <button type="button" class="btn mt-3 btn-dark btn-md btn-block">Chat With Seller</button>

                        <div className="text-center">
                       <FontAwesomeIcon className="phone" icon={faPhoneAlt} />
                       <span>**********</span>
                       <button type="button" class="btn btn-link">Show Number</button>
                       </div>


                        </div>
                    </div>

                  
    
                </div>
            </div>


        <div className="row">
        <div className="col-7 ml-5 pt-3 mt-1 details  rounded">
            <h5 className="font-weight-bolder">Details</h5>
            <div className="row mt-3">
                <div className="col-2">
                    <p>Make</p>
                </div>
                <div className="col-4">
                    <p>{this.props.data.product.[e].make}</p>
                </div>
                <div className="col-2">
                    <p>year</p>
                </div>
                <div className="col-4">
                    <p>2020</p>
                </div>
            </div>

            <div className="row">
            <div className="col-2">
            <p>Condition</p>
            </div>
            <div className="col-2">
            <p>New</p>
            </div>
            </div>

            <div className="row border-secondary border-top">
            <div className="col-7 mt-3 ">
            <h5 className="font-weight-bolder">Description</h5>
            <div className="mt-4">
            <p className="small">{this.props.data.product.[e].des}</p>
            </div>
            </div>
            </div>

            
                  
                    


        </div>
        <div className="col-4 pt-3 ml-4 posted rounded">
        <h5 className="font-weight-bolder">Posted in</h5>
        <span>{this.props.data.product.[e].add}</span>
        
        </div>


    </div>


        </div>









    )}
}

class Product extends React.Component {
render(){
    // console.log(this.props)
    return (
        <div>
            <Header />
            <Navbar />
            <Slider data={this.props} />
            
            <Footer />
            <Bottom />

            {/* <Link to="/" > Go To Home</Link> */}
        </div>
    )}
}


const mapStateToProps = (state) => ({
    product: state.product
  })

 const mapDispatchToProp =(dispatch)=> ({
    set_data: (data)=> dispatch(set_data(data))
  })

export default connect (mapStateToProps,mapDispatchToProp)(Product);

