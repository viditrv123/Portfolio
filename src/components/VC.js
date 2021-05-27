import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'

const VC=()=>{
    return(<div className="container-fluid">
        <Header />
        <Navbar style={{"backgroundColor":"#B37BA4"}} expand="lg" sticky="top" >
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Home</span></Nav.Link>
        <Nav.Link href="#Education"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Education</span></Nav.Link>
        <Nav.Link href="/#Skills"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Skills</span></Nav.Link>
        <Nav.Link href="#WorkExperience"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Work Experience</span></Nav.Link>
        <Nav.Link href="/#Achievement"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Achievements</span></Nav.Link>
        <Nav.Link href="/#Projects"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Projects</span></Nav.Link>
        <Nav.Link href="/#Courses"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Courses</span></Nav.Link>
        <Nav.Link href="/#Publication"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Publications</span></Nav.Link>
        </Nav>
       
        </Navbar.Collapse>
        </Navbar>
        <hr></hr>
        <h3  style={{"font-family": "'Pattaya', 'sans-serif'", "textAlign":"center"}}>VIRTUSA CORP., SAN FRANCISCO, Details</h3><br />
        <br />
        <h5 style={{"font-family": "'Montserrat', 'sans-serif'"}}>Virtusa Corporation is an American information technology services company with its headquarters in Southborough, Massachusetts, United States. </h5><br/>
        <ul>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Experienced an informative study tour and gained in depth knowledge of documentation of Google Cloud and AWS web services such as EBS volumes, S3 buckets, AWS Route53, Amazon EC2 instances, AWS Identity and Access Management </li>
            <li style={{"font-family": "'Montserrat', 'sans-serif'"}}>Hands-on experience with Amazon Web Services and GOOGLE cloud under supervision from employees </li>
            
        </ul>
        <hr></hr>
        <Footer/>
    </div>)
}
export default VC;