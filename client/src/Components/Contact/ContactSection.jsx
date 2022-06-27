import React from 'react'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import ContactForm from './ContactForm'
import ContactInfoItem from './ContactInfoItem'
import styled from 'styled-components'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Map from './Map'
import SectionTitle from '../SectionTitle/SectionTitle'
import ScrollToTop from '../ScrollToTop/ScrollToTop'


const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  font-family: 'Montserrat';
  .contactSection-wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-evenly;
    position: relative;
  }
  .contactSection-wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: #f0efff;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .contact-left {
    width: 100%;
    max-width: 500px;
  }
  .contact-right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 960px) {
    .contactSection-wrapper {
      flex-direction: column;
    }
    .contactSection-wrapper::after {
      display: none;
    }
    .contact-left,
    .contact-right {
      max-width: 100%;
    }
    .contact-right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function ContactSection() {
  return (
    <>
    <Nav/>
    <ScrollToTop />
    <ContactSectionStyle>
        <div className="contact-container">
          <SectionTitle heading='contactanos' subheading='' />
            <div className="contactSection-wrapper">

                <div className="contact-left">
                    <ContactInfoItem 
                    icon={<MdLocalPhone />}
                    text='+54 9 11 54236789'
                    />
                    <ContactInfoItem 
                    icon={<MdEmail /> }
                    text= 'soporte@psicoapp.com'
                    />
                    <ContactInfoItem 
                    text= 'Buenos Aires, Argentina'
                    />
                </div>
                <div className="contact-right">
                    <ContactForm />
                </div>    
            </div> 
        </div>
    </ContactSectionStyle>
    <Map />
    <Footer />
    </>
  )
}

export default ContactSection