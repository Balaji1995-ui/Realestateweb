import React,{useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import emailjs from '@emailjs/browser'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { ImLocation} from "react-icons/im";
import {BsFillTelephoneFill,BsFacebook,BsTwitter,BsYoutube} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";
import logo from "./img/logo.png";
import photo from "./img/gallery-img-1.jpg"
import photo1 from "./img/gallery-img-2.jpg"
import photo2 from "./img/gallery-img-3.jpg"
import photo3 from "./img/house10lg.png"
import photo4 from "./img/house9lg.png"
import photo5 from "./img/house7lg.png"
import photo6 from "./img/land.jpg"
import photo7 from "./img/land2.jpg"
import photo8 from "./img/land3.jpg"
import RecipeReviewCard from './Card';
import RecipeReviewCard1 from './card1';
import RecipeReviewCard2 from './Card2';
import whatapp from './img/aa.gif';
import Option from './Navigation';
import ScrolltoTop from './ScrollTop';
import { Modal, ModalFooter,Button,ModalHeader, ModalBody} from "reactstrap"
function BasicExample(props) {
  const [modal, setModal]=useState(false);
    const toggle = () => setModal(!modal);
const form= useRef();
const sendEmail=(e)=>{
  e.preventDefault();

emailjs.sendForm('service_gfdp05p','template_w093dc7',e.target,'TNRQfCQqy6hDA2Y60').then((result)=>{
if(result){
 return  toggle();
 
}
 
})
}
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  let content = {
    Hindi: {
      title: "हमारे द्वारा अपने सपनों का घर खोजें",
      description:"रिसॉर्ट जीवन शैली जीने का आपका आखिरी मौका, दैनिक",
        btn:"जांच कराएं।",
        Gallery:"फोटो गैलरी",
        Feature:"विशेष रुप से प्रदर्शित लिस्टिंग",
        Contean:"20 x 20 मीटर खाली भूमि सान्यांग नकद मूल्य डी 250,000 और एक वर्ष की किस्त डी 300,000 पर बिक्री के लिए",
       videos:"वीडियो",
       contact:"हमसे संपर्क करें",
       latest:"समाचार फ़ीड का चयन करें",
       message:"संदेश",
      
    },
    English: {
      title: "Find Your Dream House By Us",
      description:
        "YOUR LAST CHANCE TO LIVE THE RESORT LIFESTYLE, DAILY",
        btn:"Make An Enquiry",
        Gallery:"Photo Gallery",
        Feature:"Featured Listings",
        Contean:"20 X 20 METERS EMPTY LAND FOR SALE AT SANYANG CASH PRICE D250,000 AND INSTALLMENT OF ONE YEAR D300,000",
videos:"Videos",
contact:"Contact US",
latest:"Leatest News Feeds",
message:"Message"
    }
   
  };
  props.language === "Hindi"
  ? (content = content.Hindi)
  : (content = content.English);



  
  return (
    <div>
<Modal isOpen={modal} toggle={toggle} modalTransition={{timeout : 200}}>
          <ModalHeader>Anaisha</ModalHeader>
          <ModalBody>Message sent Successfully...!!!</ModalBody>
          <ModalFooter>

        
          <Button   sx={{width:"50px" ,fontSize:"12px"}} color="primary" variant='contained' onClick={()=>{toggle(); return window.location.reload();}}>Okay</Button>
          </ModalFooter>
        </Modal>

    <Navbar  expand="lg"  className="navbar fixed-top">
      <Container>
        <Navbar.Brand href="#home" className='brand'><img src={logo} className="logo"/>Anaisha Realty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navl">
          <div className='gap'></div>
            <Nav.Link href="#home" className='link'>Home</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
   
             <Nav.Link href="#gallery" ><span style={{fontsize:"26px",fontFamily:'Nunito'}}>Gallery</span></Nav.Link>
             <Nav.Link href="#blog" className='link' data-nav-link>Blog</Nav.Link>
             <Nav.Link href="#contact" className='link' data-nav-link>About Us</Nav.Link>
             <Nav.Link href="#contact" className='link' data-nav-link>Contact </Nav.Link>

             <Option language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}/>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div id="home"
      className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="content text-center">
        <h1 className="head">{content.title}</h1>
        <p className="para">{content.description}</p>
        <a href="#contact" className="btn btn-danger"  style={{fontWeight:"bolder"}}>{content.btn}</a>
      </div>
    </div>
    <div className='photo' id="gallery">
      <h1>{content.Gallery}</h1>
      <hr/>
<div className='container'>
  <div className='row'>
    <div className='col-md-4'>
      <img src={photo} width="100%" className='imag1'/>

    </div>
    <div className='col-md-4'>
      <img src={photo1}  className='imag1'width="100%"/>

    </div>
    <div className='col-md-4'>
      <img src={photo2}  className='imag1'width="100%"/>

    </div>
    <h5 style={{paddingTop:"10px"}}>{content.Feature}</h5>
    <div className='col-md-4'>
      <img src={photo3} width="100%" className='imag1'/>

    </div>
    <div className='col-md-4'>
      <img src={photo4}  className='imag1'width="100%"/>

    </div>
    <div className='col-md-4'>
      <img src={photo5}  className='imag1'width="100%"/>

    </div>
    <br/>
    <h5 style={{paddingTop:"10px"}}>
{content.Contean}
</h5>
    <div className='col-md-4'>
      <img src={photo6} width="100%" className='imag1'/>

    </div>
    <div className='col-md-4'>
      <img src={photo7}  className='imag1'width="100%"/>

    </div>
    <div className='col-md-4'>
      <img src={photo8}  className='imag1'width="100%"/>

    </div>
  </div>

</div>
<hr/>
<h1>{content.videos}</h1>
<hr></hr>
<div className='row' >
  <div >
<iframe width="570" height="515" src="https://www.youtube.com/embed/630PGalq3Hs" title="Real Estate Video | Empty House" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
<h1 id="blog">{content.latest}</h1>
<hr></hr>
<div className='container' >
<div className='row'>
  <div className='col-md-4'>
<RecipeReviewCard/>

  </div>
  <div className='col-md-4 '>
<RecipeReviewCard1/>

  </div>
  <div className='col-md-4'>
<RecipeReviewCard2/>

  </div>
  </div>
<h1 id="contact">{content.contact}</h1>
<hr></hr>
<div className='container'>
<div className='row'>
  <div className='col-sm-8'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14280.624149396492!2d80.24465406809453!3d26.515105631493597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x399c377a0385da8d%3A0xb404bacc60c5a4ef!2sShiv%20Dham%2C%20G66W%2B8PH%2C%20Naramau%2C%20Kalyanpur%2C%20Kanpur!3m2!1d26.510821999999997!2d80.24686609999999!4m5!1s0x399c376c1a726105%3A0xa81d52fb5f7bd224!2sLn%201%2C%20Singhpur%2C%20Gangpur%20Kachhar%2C%20Uttar%20Pradesh%20208017!3m2!1d26.526768999999998!2d80.259366!5e0!3m2!1sen!2sin!4v1667637380057!5m2!1sen!2sin" width="90%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className='col-sm-4 froms'>
  <div >
    <h1 style={{fontWeight:"bold",color:"black"}}>{content.message}🖐</h1>
    <form onSubmit={sendEmail} ref={form}  >
      <br/>
      <input className='form-control'name="user_Name" type="text" placeholder='Enter Your Name' required></input>
      <br/>
      <input className='form-control' name="user_Email" type="email" placeholder='Enter Your Email'></input>
      <br/>
      <input className='form-control' name="user_subject" type="text" placeholder='Subject'></input>
      <br/>
      <textarea className='form-control' name="user_Message" rows="3" cols="4" type="text" placeholder='Message'></textarea>
      <br/>
      <button type="submit" value="send" className='btn btn-danger p-2'>Send Message</button>
    </form>

  </div>
 
 
 
  </div>

</div>
</div>
</div>
<br/>
<div className='footer1'>
<div  className='container'> 
<div className='row'>
  <div className='col-md-4' style={{textAlign:"left"}}>
<Nav.Link href='/' style={{fontSize:"20px",fontWeight:"bold"}}><img src={logo} className="logo"/>Anaisha Realty</Nav.Link>
<p className="fotp"><ImLocation size="25px"/>{'  '} Plot no-68 Shivdham,bari kalyanpur,<br/>
Delhi Public School gate no-5,<br/>
Kanpur,Uttar Pradesh,<br/>
India -208017</p>

  </div>
  <div className='col-md-4'>
  <Nav.Link href='tel:+919335399365'  style={{fontSize:"20px",paddingTop:"20px",textAlign:"left"}}><BsFillTelephoneFill/>{' '} +919335399365</Nav.Link>

<Nav.Link href='mailto:pranavnext@gmail.com' className='gl' style={{fontSize:"20px" ,textAlign:"left"}}><AiFillMail/>{' '} pranavnext@gmail.com</Nav.Link>
<span>
<Nav.Link href='www.facebook.com'  style={{fontSize:"18px" ,textAlign:"left"}}><BsFacebook/>{' '} facebook</Nav.Link>
<Nav.Link href='www.twitter.com'  style={{fontSize:"18px" ,textAlign:"left"}}><BsTwitter/>{' '}Twitter</Nav.Link>
<Nav.Link href='www.youtube.com'  style={{fontSize:"18px" ,textAlign:"left"}}><BsYoutube/>{' '}Youtube</Nav.Link></span>


</div>
  </div>
  
</div>
<div className='container-fluid' >
  <a href="https://api.whatsapp.com/send?phone=8344468241">
  <img className='example' src={whatapp} width="5%" />
  </a>
  <div className='scroll'>
  <ScrolltoTop/>
  </div>
</div>
</div>

<div className='footer'>

  <p>© 2022 Anaisha realty. All Rights Reserved</p>
   </div>
    </div>
  
    </div>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default BasicExample;