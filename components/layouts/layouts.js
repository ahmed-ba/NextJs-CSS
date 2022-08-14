/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import Link from "next/link";
import Card from "../card/card";
import classes from "../layouts/layouts.module.css";
import Section from "../section/Section";
import staticdata from "../../staticdata.json";
import Cell from "../cells/cell";
import styled from "styled-components";

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`;
const SectionCellGroup = styled.div`
max-width: 800px;
   margin: 0 auto 100px;
   display: grid;
   grid-template-columns:repeat(2,1fr) ;
   grid-column-gap: 20px;
   padding: 0 20px;
       
  @media(max-width: 800px){
    grid-template-columns:repeat(1,1fr) ;}
`;

const Layout = () => {
  return (
    <div>
      <div className={classes.Hero}>
        <div className={classes.HeroGroup}>
          <h1>
            Learn to <br />
            design and code Nextjs apps
          </h1>
          <p>Complete cours baout the best tools and design system.</p>
          <Link href="/page2">Watch the videos</Link>
          <div className={classes.logos}>
            <Image src={require("../../public/images/logo/react.png")} />
            <Image src={require("../../public/images/logo/figma.png")} />
            <Image src={require("../../public/images/logo/nestjs.png")} />
            <Image src={require("../../public/images/logo/sketch.png")} />
            <Image src={require("../../public/images/logo/swift.png")} />
          </div>
          <svg
            width="100%"
            height="172px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f8faf5" />
              <stop offset="50%" stop-color="#f8faf5" />
              <stop offset="100%" stop-color="#f8faf5" />
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
        </div>
      </div>
      <div className={classes.Cards}>
        <h2>06 cours,more coming</h2>
        <div className={classes.CardGroup}>
          <Card
            title="Design System"
            text="12 sections"
            image={require("../../public/images/card/7.jpg")}
          />
          <Card
            title="Nextjs fro Designers"
            text="12 sections"
            image={require("../../public/images/card/6.jpg")}
          />
          <Card
            title="sound Designers"
            text="12 sections"
            image={require("../../public/images/card/4.jpg")}
          />
          <Card
            title="ARKit 2"
            text="12 sections"
            image={require("../../public/images/card/9.jpg")}
          />
          <Card
            title="React App"
            text="12 sections"
            image={require("../../public/images/card/14.jpg")}
          />
          <Card
            title="NExtJs"
            text="12 sections"
            image={require("../../public/images/card/15.jpg")}
          />
        </div>
      </div>

      <Section
        logo={require("../../public/images/section/logo.png")}
        title="NextJs for Designers"
        text="Learn how to build a modern site using
 Nextjs and the most efficient libraries to get
 your site/product one line.Get familiar with
 componnets,Grid css, animation , 
 dynamic data with Contentful and deplyoing your
 site with Netlift."
      />

      <SectionCaption>09 section - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map((cell) => (
          <Cell titles={cell.titles} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
  );
};

export default Layout;
