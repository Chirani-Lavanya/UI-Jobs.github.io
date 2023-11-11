import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from '..//Components/SideMenu'

import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBListGroupItem,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function ApplyJob() {
    return (
        <div>
            <SideMenu />

            <div className='d-flex justify-content-end px-5 pt-3' >
                <MDBCard style={{width:"65rem" , height:"100%"}}>
                    <MDBCardBody>
                    <MDBCardImage src='https://galaxmo.com/wp-content/uploads/2016/04/design-6.jpg'  className='w-100 h-50  '/>
                        <MDBCardTitle className='pt-5 h2'>Front-End Developer</MDBCardTitle>

                        <MDBListGroupItem className='text-secondary' >
                            <MDBIcon fas icon="suitcase me-3 " />
                            Remote · Full-time · Mid-Senior level
                        </MDBListGroupItem>

                        <MDBListGroupItem className='text-secondary' >
                            <MDBIcon fas icon="users me-3" />
                            501-1,000 employees · IT Services and IT Consulting
                        </MDBListGroupItem>

                        <MDBListGroupItem className='text-secondary'  >
                            <MDBIcon fas icon="money-bill me-3" />
                        Salary · 100,000 LKR
                        </MDBListGroupItem>

                    
                        <p className='mt-5 h4'>About the job</p>
                        <MDBCardText >Experience Remote done Right. Over 20 years of remote experience, all 500+ staff are 100% remote, and we still grow vibrant relationships and provide exceptional opportunities for career growth while working with stellar clients on ambitious projects. <br /><br />


                            <strong>What we're working on:</strong> <br />

                            Enterprise companies turn to us to help them launch innovative digital products that interact with hundreds of millions of customers, transactions and data points. The problems we solve daily are real and require creativity, grit and determination. We are building a culture that challenges norms while fostering experimentation and personal growth. To grasp the scale of problems we face, ideally, you have some exposure to Logistics, FinTech, Transportation, Insurance, Media or other complex multifactor industries.
                            <br /><br />
                            <strong>Requirements</strong>
                            <br />
                            •7+ years of professional experience (A technical assessment will be required) <br />
                            •Senior-level experience of at least 4 years of experience building mobile apps with Ionic + Angular and Ionic v5 and Capacitor as well with React <br />
                            •Ability to implement an Ionic Logic Flow <br />
                            •Strong familiarity with iOS and Android applications <br />
                            •Experience deploying apps to AppStore Connect and Google Play platforms <br />
                            •Advanced English fluency, verbal and written <br />

                            <br />
                        </MDBCardText>
                        <MDBBtn href='#'>Apply</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </div>

                
        </div>



    );
}