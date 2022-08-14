/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const SectionGroup = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
   
    animation: gradient 15s ease infinite;
  height: 520px;

  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20x;
  position: relative;

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
`;

const SectionLogo = styled.div`
  align-self: end;
  width: 200px;
  margin: 0 auto;
`;

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 10 10px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 40px;
  }
`;
const SectionTitle = styled.h3`
  color: white;
  font-size: 40px;
  margin: 0;
  line-height: 1.2;
`;
const SectionText = styled.p`
  color: white;
  font-size: 20px;
`;

const WaveBottom = styled.div`
  position: absolute;
  left: 0;
  top: 370px;
  height: 172px;
  width: 100%;
`;

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`;

const Section = (props) => (
  <>
    <SectionGroup>
      <WaveTop>
        <svg
          width="100%"
          height="172px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#000000" />
            <stop offset="50%" stop-color="#000000" />
            <stop offset="100%" stop-color="#000000" />
          </linearGradient>
          <path
            fill="url(#grad1)"
            d="
         M0 67
         C 273,183
           822,-40
           1920.00,106 
         
         V 359 
         H 0 
         V 67
         Z"
          >
            <animate
              repeatCount="indefinite"
              fill="url(#grad1)"
              attributeName="d"
              dur="15s"
              attributeType="XML"
              values="
           M0 77 
           C 473,283
             822,-40
             1920,116 
           
           V 359 
           H 0 
           V 67 
           Z; 

           M0 77 
           C 473,-40
             1222,283
             1920,136 
           
           V 359 
           H 0 
           V 67 
           Z; 

           M0 77 
           C 973,260
             1722,-53
             1920,120 
           
           V 359 
           H 0 
           V 67 
           Z; 

           M0 77 
           C 473,283
             822,-40
             1920,116 
           
           V 359 
           H 0 
           V 67 
           Z
           "
            ></animate>
          </path>
        </svg>
      </WaveTop>
      <SectionLogo>
        <Image src={props.logo} alt="logo" />
      </SectionLogo>
      <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>

      <WaveBottom>
        <svg
          width="100%"
          height="172px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#000000" />
            <stop offset="50%" stop-color="#000000" />
            <stop offset="100%" stop-color="#000000" />
          </linearGradient>
          <path
            fill="url(#grad1)"
            d="
         M0 67
         C 273,183
           822,-40
           1920.00,106 
         
         V 359 
         H 0 
         V 67
         Z"
          >
            <animate
              repeatCount="indefinite"
              fill="url(#grad1)"
              attributeName="d"
              dur="15s"
              attributeType="XML"
              values="
           M0 77 
           C 473,283
             822,-40
             1920,116 
           
           V 359 
           H 0 
           V 67 
           Z; 

           M0 77 
           C 473,-40
             1222,283
             1920,136 
           
           V 359 
           H 0 
           V 67 
           Z; 

           M0 77 
           C 973,260
             1722,-53
             1920,120 
           
           V 359 
           H 0 
           V 67 
           Z; 

           M0 77 
           C 473,283
             822,-40
             1920,116 
           
           V 359 
           H 0 
           V 67 
           Z
           "
            ></animate>
          </path>
        </svg>
      </WaveBottom>
    </SectionGroup>
  </>
);

export default Section;
