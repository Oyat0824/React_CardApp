import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Menu = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;    
  
  position: sticky;
  top: 0;
  z-index: 99;

  width: 100%;
  font-size: 18px;
  color: #FFFFFF;
  background-color: #1c192b;
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

export const Item = styled.div`
  position: relative;
  width: 15%;
  height: 380px;
  margin: 2%;
  color: #FFFFFF;
  background-color: #393939;
  overflow: hidden;
  transition: .5s;

  &:hover{
    transform: translate(0, -20px);
  }

  @media all and (max-width: 800px){
    width: 45%;
  }
  @media all and (max-width: 500px){
    width: 90%;
  }
`
export const Line = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 5%;
  left: 5%;
  background-image: url(${props => props.linePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Image = styled.div`
  height: 280px; 
  background-image: url("${props => props.imagePath}");
  background-repeat: no-repeat;
  background-position: center 2px;
  background-size: cover;
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: ${props => props.color};
`
export const ImgBox = styled.div`
  margin-bottom: 10px;
`

export const TeamImg = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  background-image: url("${props => props.LineImg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  filter: brightness(0.5);

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    filter: brightness(1);
  }
`

export const LineImg = styled(TeamImg)`
  width: 30px;
  height: 30px;
  background-image: url("${props => props.LineImg}");
`

export const SearchBox = styled.input`
  width: 200px;
  line-height: 20px;
  padding: 5px;
  margin-bottom: 15px;
  outline: 0;
  font-weight: bold;
  box-sizing: border-box;
  text-align: center;
  border: none;
`

export const PersonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 70vh;
  margin: 2% auto 0;
  padding: 40px;
  background-color: #393939;
`

export const BackBtn = styled.div`
  width: 150px;
  line-height: 50px;
  margin: 40px auto 0;
  background-color: #393939;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`

export const StyeldLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
`;