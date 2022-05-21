import styled from 'styled-components'
import { FaUserGraduate } from 'react-icons/fa';

function RenderAnswers({answer}){
  console.log(answer)
  return ( 
    <Answer>
      <section>
        <FaUserGraduate />
      </section>

      <div>
        <h1>{answer.username}</h1>
        <p>{answer.answer}</p>
      </div>
    </Answer> 
  )
}

export default RenderAnswers;

const Answer = styled.section`
  width: 353px;
  height: 120px;
  display: flex;
  flex-wrap:wrap;
  align-items: flex-start;
  background: #6495ED;
  border-radius: 12px;
  padding-left: 10px; 
  box-shadow:4px 7px 15px -2px rgba(0,0,0,0.42);
  margin-bottom: 15px;
  position: relative;

  h1{
    margin-top: 13px;
    font-size: 18px;
    width: 75%;
    font-weight: 700;
  }

  p{
    width: 100%;
    font-size: 14px;
    height: 50%;
  }

  section{
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background: var(--background-color);
    position: absolute;
    top: 30px;
    display:flex;
    justify-content:center;
    align-items:center;

    svg{
      font-size: 30px;
    }
  }

  div{
    position: absolute;
    right: 0;
    width: 78%;
    height: 100%;

    p{
      margin-top: 10px;
      word-break:break-all;
    }
  }
`