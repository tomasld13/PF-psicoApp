import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'Montserrat';
    color: #000;
    font-size: 2rem;
    margin-top: 2rem;
  }
  h1 {
  color: #fff;
  font-size: 48px;
  font-family: 'Montserrat';
  margin-top: 5rem;
  margin-bottom: 3rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 2rem;
    }
    h1 {
      font-size: 2.3rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h1>{heading}</h1>
    </SectionTitleStyle>
  );
}