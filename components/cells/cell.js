/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import styled from "styled-components";

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`;

const CellImage = styled.div`
  width: 60px;
  height: 60px;

  background-image: url(${(props) => props.image});
  background-size: 60px;
`;

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`;

const Cell = (props) => (
  <CellGroup>
    <CellImage>
    <Image src={props.image} width={60} height={60}/>
    </CellImage>
    <CellTitle>{props.titles}</CellTitle>
  </CellGroup>
);

export default Cell;
