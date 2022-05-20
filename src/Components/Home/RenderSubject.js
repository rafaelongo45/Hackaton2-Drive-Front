import styled from 'styled-components';

function RenderSubject({subject}){
  return ( 
    <Subject>
     <div></div>
     <h1>{subject}</h1>
    </Subject>                            
  )
}

export default RenderSubject;

const Subject = styled.section`
  width: fit-content;
  height: fit-content;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;
  margin: 0 5px;

  div{
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background: #6495ED;
    margin-bottom: 5px;
  }

  h1{
    text-align:center;
    font-size: 16px;
  }
`