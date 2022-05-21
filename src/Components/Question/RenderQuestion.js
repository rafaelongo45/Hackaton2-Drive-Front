import styled from 'styled-components';

import { FaUserGraduate } from 'react-icons/fa';

function RenderQuestion(){
  return (
    <QuestionPage>
      <Title>Pergunta</Title>

      <Question>
          <h1>Título da pergunta</h1>
          <p>Descrição da pergunta</p>
      </Question> 

      <Answers>
        <Title>Possíveis Repostas</Title>
        
        <Answer>
          <section>
            <FaUserGraduate />
          </section>

          <div>
            <h1>AAAAAAAAA</h1>
            <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
          </div>
        </Answer>       
      </Answers>

    </QuestionPage>
  )
}

export default RenderQuestion;

const QuestionPage = styled.main`
  margin: 90px auto 70px auto;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content:center;
`

const Question = styled.section`
  width: 353px;
  height: 150px;
  display: flex;
  flex-wrap:wrap;
  align-items: flex-start;
  background: #6495ED;
  border-radius: 12px;
  padding-left: 10px; 
  position: relative;
  box-shadow:4px 7px 15px -2px rgba(0,0,0,0.42);
  margin-bottom: 15px;

  h1{
    margin-top: 13px;
    font-size: 18px;
    width: 75%;
    font-weight: 700;
  }

  p{
    width: 100%;
    font-size: 14px;
    height: 60%;
  }
`

const Answers = styled.article`
  margin-top: 30px;
`

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