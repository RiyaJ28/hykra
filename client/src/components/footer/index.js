import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#006B75', color:'#000'}} className='text-center text-lg-start text-muted'>
      <section style={{fontFamily: 'Barlow, sans-serif', fontWeight:'600', fontSize:'15px'}} className=''>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className='p-3' style={{color:'#fff'}}>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <p >Useful links</p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>
           

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              Contact Us 
              <br/>
              +9112345678981
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              ADDRESS - <br/>
              ABC NEAR PQR, <br/>
              AJMER RAJASTHAN
              
            </MDBCol>
            <MDBCol>
              Team - <br/>
              <a href='https://www.linkedin.com/in/harsh-yadav-605888214/' className='text-reset' >Harsh Yadav</a> <br/>
              <a href='https://www.linkedin.com/in/yashwardhan-acharya/' className='text-reset' >Yashwardhan Acharya</a> <br/>
              <a href='https://drive.google.com/drive/folders/1IiPMWdVnRnLwhh9dkbwQzDKhMeQUdmSY?usp=share_link' className='text-reset' >Khushi Jain</a> <br/>
              <a href='https://www.linkedin.com/in/riya-j28/' className='text-reset' >Riya Jain</a> <br/>
              <a href='https://www.linkedin.com/in/arpita-gehlot-154507240/' className='text-reset' >Arpita Gehlot</a> <br/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#006B75' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}