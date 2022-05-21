import { Link }  from 'react-router-dom';

import styled from 'styled-components'

function Footer(){
  return (
    <RenderFooter>
      <Link to={'/subjects'}> <button>Fazer uma pergunta</button> </Link>
    </RenderFooter>
  )
}

export default Footer;

const RenderFooter = styled.footer`
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #4FB7D8;
  display: flex;
  align-items:center;
  justify-content:center;

  button{
    width: 180px;
    height: 60px;
    border-radius: 8px;
    border: none;
    color: #454749;
    font-weight: 700;
    box-shadow:4px 7px 15px -2px rgba(0,0,0,0.42);
  }
`