import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from '..//Components/SideMenu'

import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function JobPosting() {
    return (
        <div>
            <SideMenu />

            <div className='d-flex justify-content-end px-5 pt-3' >
                <MDBCard style={{width:"65rem"}}>
                    <MDBCardBody>
                        <MDBCardTitle>Front-End Developer</MDBCardTitle>
                        <MDBCardText>This position is esponsible for developing new user-facing features, determining the structure and design of web pages,building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.</MDBCardText>
                        <MDBBtn href='#'>Apply</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <br />
                
            </div>
            <br />
            <div className='d-flex justify-content-end px-5' >
                <MDBCard style={{width:"65rem"}}>
                    <MDBCardBody>
                        <MDBCardTitle>UI/UX Designer</MDBCardTitle>
                        <MDBCardText>UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards.</MDBCardText>
                        <MDBBtn href='#'>Apply</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

               
                
            </div>
            <br />
            <div className='d-flex justify-content-end px-5' >
                <MDBCard style={{width:"65rem"}}>
                    <MDBCardBody>
                        <MDBCardTitle>Back-End Developer</MDBCardTitle>
                        <MDBCardText>responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system. This includes the core application logic, databases, data and application integration.</MDBCardText>
                        <MDBBtn href='#'>Apply</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

               
                
            </div>
            <br />
            <div className='d-flex justify-content-end px-5' >
                <MDBCard style={{width:"65rem"}}>
                    <MDBCardBody>
                        <MDBCardTitle>Graphic Designer</MDBCardTitle>
                        <MDBCardText>create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.</MDBCardText>
                        <MDBBtn href='#'>Apply</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

               
                
            </div>
        </div>



    );
}