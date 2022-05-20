import styled from "styled-components";

function RenderHeader(){
  return (
    <Header>
      <h1>Ask Us</h1>
    </Header>
  )
}

export default RenderHeader;

const Header = styled.header`
  background: linear-gradient(96.97deg, #24BDDE 26.73%, #3940D7 42.06%, #4FB7D8 71.66%);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items:center;
  justify-content: center;
  color: white;

  h1{
    font-family: 'Black Ops One', cursive;
    font-size: 24px;
  }
`