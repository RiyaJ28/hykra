import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#006B75', color:'#000'}} className='text-center text-lg-start text-muted'>
      <section style={{fontFamily: 'Barlow, sans-serif',}} className=''>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className='p-3' style={{color:'#fff'}}>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 >Useful links</h6>
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
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}