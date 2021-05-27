import React from 'react';
import Header from './Header';
import './style.css';
import {Nav,Navbar, Card, Button} from 'react-bootstrap'
import Footer from './Footer';
import SiliconValley from '../assets/42 Silicon Valley.png';
import GEP from '../assets/GEP.png';
import VC from '../assets/Virtusa Corporation.png';
import SVNIT from '../assets/svnit.png';
import SJSU from '../assets/SJSU.jpg';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Publication1 from '../assets/Publication1.pdf';
import Publication2 from '../assets/Publication2.pdf';
const Home=()=>{
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
        <section id="Education">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Education</h3>
        <br />
        <div class="row">
        
        <div class="col-md-6" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={SJSU} style={{"width":"275px","height":"150px"}}/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>San Jose State University</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Masters</span>
            </Card.Text>
            {/* <Button variant="primary"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button> */}
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-6" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={SVNIT} style={{"width":"150px","height":"150px"}} className="center"/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>SVNIT</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Bachelors</span>
            </Card.Text>
            {/* <Button variant="primary"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button> */}
        </Card.Body>
        </Card>
        </div></div>
        </div>
        
        </section>
        <hr></hr>
        <section id="Skills">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Skills</h3>
        <br />
        <div className="center">
        <h4><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Languages  </span></h4><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   C , C++ , PHP , Phython</p><br />
        <h4><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>FrontEnd  </span></h4><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   HTML , CSS , Bootstrap , Angular</p><br />
        <h4><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Database  </span></h4><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   SQL</p><br />
        <h4><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Version Control  </span></h4><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   Git</p><br />
        <h4><span style={{"font-family": "'Montserrat', 'sans-serif'", "textDecorationLine":"underline"}}>Others  </span></h4><p style={{"font-family": "'Montserrat', 'sans-serif'", "display":"inline"}}>   Ajax , Linux , Flask , VB testing , QC testing AWS Web Services</p><br />
        </div>
        </section>
        <hr></hr>
        <section id="WorkExperience">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Work Experience</h3>
        <br />
        <div class="row">
        <div class="col-md-4" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={GEP} style={{"width":"250px","height":"150px"}}/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>GEP Worldwide, India</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Software Engineer Intern</span>
            </Card.Text>
            <Button variant="primary" href="/GEP"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-4" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={VC} style={{"width":"250px","height":"150px"}}/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Virtusa Corporation</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Volunteer - Trainee</span>
            </Card.Text>
            <Button variant="primary" href="/VC"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-4" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={SiliconValley} style={{"width":"150px","height":"150px"}}/>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>42 Silicon Valley</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Student Volunteer</span>
            </Card.Text>
            <Button variant="primary" href="/SV"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div></div>
        </div>
        </section>
        <hr></hr>
        <section id="Achievement">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Achievements</h3>
        <br />

    <Timeline align="alternate">
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Won Hamdan Bin Rashid Al Maktoum Award for the Distinguished Academic Performance in 2014. Hamdan Award is a national level award in the UAE awarded by Sheikh Hamdan Bin Rashid Al Maktoum, Deputy Ruler of Dubai, and UAE Minister of Finance</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Received the “Competent Communicator” certificate from Toastmaster’s Club in 2017. Represented the club on a district level </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Winner of Youth Leadership Program organized by Toastmasters Club in 2011</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Finalist of the prestigious YES Award in 2013, for exhibiting excellent all-round performance (Academics and Extra-Curricular)</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Awarded Dunia Young Leaders Performance Achievement Certificate in 2015. This certificate is awarded to the scholars who not only excel in academics, but also for their character, commitment, and potential for leadership </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Winner of Excellence Certificate in Academics awarded by the UAE Ministry of Education for performing exceptionally well in academics in 2013 </span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>School prefect for 5 years from 2012-2017 </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}>Won several accolades in art competitions </span> </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    
        </section>
        <hr></hr>
        <section id="Projects">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Projects</h3>
        <br />
        <div class="row">
        <div class="col-md-3" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '12rem' }}>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Centralized Collection and Real-Time Updation of COVID-19 Data Across India </span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}></span>
            </Card.Text>
            <Button variant="primary" href="/Project1"><span style={{"font-family": "'Pattaya', 'sans-serif'"}} >More Information</span></Button>
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-3" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '12rem' }}>
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Library Management System</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}><br /><br /><br /></span>
            </Card.Text>
            <Button variant="primary" href="/Project2"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-3" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '12rem' }}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Online Auction System</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}><br /><br /><br /><br /></span>
            </Card.Text>
            <Button variant="primary" href="/Project3"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-3" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '12rem' }}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Instagram Search Engine Client</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}><br /><br /><br /><br /></span>
            </Card.Text>
            <Button variant="primary" href="/Project4"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>More Information</span></Button>
        </Card.Body>
        </Card>
        </div></div>
        </div>
        </section>
        <hr></hr>
        <section id="Courses">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Courses</h3>
        <br />

    <Timeline align="alternate">
    
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Networking in Google Cloud: Defining and Implementing Networks (COURSERA) - 8 weeks</span>: The certification consisted of 3 separate courses with detailed knowledge and insight of the cloud concepts pertaining to Google, namely HTTP(s) load balancing, VPC network interlaying rules, creating different firewall protocols and VM instances, SSH terminal for the execution of different rules between different networks, and guidelines for using Cloud console </span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Blockchain: Foundations and Use Cases (COURSERA)– 5 Weeks</span>: Blockchain concept and applications of this concept in the digital world and an insight of Ethereum blockchain and BitCoin  </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Fundamentals of Cloud Computing (UDEMY) - 4 weeks</span>: Basics of the Cloud computing environment; factors that led to its development and segments of Cloud computing that include SaaS, IaaS, PaaS, and cloud security</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>Machine Learning (COURSERA) – 6 Weeks</span>: ML techniques such as Regression, Clustering and Classification. Basic understanding and usage of Scikit learn, Matplot, Pandas, Numpy and Scipy libraries</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><span style={{"font-family": "'Montserrat', 'sans-serif'"}}><span style={{"textDecorationLine":"underline"}}>C++ Course (Nadia Academy, United Arab Emirates) – 3 Weeks</span>: C++ programming mainly focused to the areas of strings, math functions, vectors, arrays and other complex data structures, trees and graphs</span></TimelineContent>
      </TimelineItem>
      
    </Timeline>
        </section>
        <hr></hr>
        <section id="Publication">
        <br />
        <h3 style={{"font-family": "'Pattaya', 'sans-serif'","textAlign":"center"}}>Publication</h3>
        <br />
        <div class="row">
        
        <div class="col-md-6" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '18rem' }}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>PPSE: Privacy Preservation and Security Efficient AKA Protocol for 5G Communication Networks</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>2020 IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)</span>
            </Card.Text>
            <div style={{"display":"inline-block"}}>
            <Button variant="primary" style={{"marginInline":"35px"}} href={Publication1} download><span style={{"font-family": "'Pattaya', 'sans-serif'"}} >Download</span></Button>
            
            <Button variant="primary" href="https://ieeexplore.ieee.org/abstract/document/9342780"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Link</span></Button>
            </div>
        </Card.Body>
        </Card>
        </div></div>
        <div class="col-md-6" style={{"padding":"0px"}}>
        <div class="center">
        <Card style={{ width: '18rem' }}>
        
        <Card.Body>
            <Card.Title><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Detection of Bot Accounts on Social Media Considering Its Imbalanced Nature (Chapter 9)</span></Card.Title>
            <Card.Text>
            <span style={{"font-family": "'Montserrat', 'sans-serif'"}}>IGI Global, 2021 <br /><br /><br /><br /><br /></span>
            </Card.Text>
            <div style={{"display":"inline-block"}}>
            <Button variant="primary" style={{"marginInline":"35px"}} href={Publication1} download><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Download</span></Button>
            
            <Button variant="primary" href="https://www.igi-global.com/submission/book-project-chapters/?projectid=03dcf765-2e75-4bf4-9089-305370caa331"><span style={{"font-family": "'Pattaya', 'sans-serif'"}}>Link</span></Button>
            </div>
        </Card.Body>
        </Card>
        </div></div>
        </div>
        <br />
        </section>
        <hr></hr>
        <Footer />
    </div>);
}
export default Home;