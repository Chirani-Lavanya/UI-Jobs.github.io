import 'bootstrap/dist/css/bootstrap.min.css';
import RegImg from '../Images/regimg.png'; 
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCheckbox,
  MDBInput
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6' >
          <img className='w-75' src={RegImg}/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column ' style={{ marginRight: '20%' }}>

              <div className='d-flex flex-row mt-2  '>
                
                <span className="h1 fw-bold mb-0 pb-5  " style={{ marginLeft: '10%' , color:"#433688" }} >Create an Account</span>
              </div>

              {/* <h5 className="fw-normal my-4 pb-3 text-center" style={{letterSpacing: '1px'}}>Sign into your account</h5> */}
                 <MDBInput wrapperClass='mb-4' placeholder="First Name" label='' id='formControlLg' type='text' size="lg"/>
                 <MDBInput wrapperClass='mb-4' placeholder="Last Name" label='' id='formControlLg' type='text' size="lg"/>

                <MDBInput wrapperClass='mb-4' placeholder="Email address" label='' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4'placeholder="Password"label='' id='formControlLg' type='password' size="lg"/>
                <MDBInput wrapperClass='mb-4'placeholder=" Confirm Password"label='' id='formControlLg' type='password' size="lg"/>

                
                <div className='d-flex flex-row justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                </div>
                
              <MDBBtn className="mb-4 px-5" color='primary' size='lg'>Create Account</MDBBtn>

              
              <div className='pb-3'></div>
             
              <p className="mb-5 pb-lg-2 text-center " style={{color: '#393f81'}}>Already have an account? <a href="#!" style={{color: '#393f81'}}>Sign In here</a></p>
              
              <div className='pb-2'></div>
              <div className='d-flex flex-row justify-content-center '>
                <a href="#!" className="small text-muted me-1 ">Terms of use.</a>
                <a href="#!" className="small text-muted ">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;