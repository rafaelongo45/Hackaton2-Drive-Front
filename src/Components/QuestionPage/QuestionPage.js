import styled from "styled-components";
import { useState } from 'react';

import Header from "../Header/Header";

function QuestionPage() {

  const [userQuestion, setUserQuestion] = useState({
    title: '',
    question: ''
  })

  return (
    <>
      <Header />
      <BodyQuestion>
        <h1>Matéria</h1>
        <Question>
          <input type="text" placeholder="Título da pergunta" maxLength="30" required onChange={e => setUserQuestion({ ...userQuestion, title: e.target.value })}></input>
          <textarea type="text" placeholder="Descrição da pergunta" required onChange={e => setUserQuestion({ ...userQuestion, question: e.target.value })}></textarea>
          <div className="button">
          <button type="submit">Fazer a pergunta</button>
          <button type="button">Voltar</button>
          </div>
        </Question>
      </BodyQuestion>
    </>
  )
}

const BodyQuestion = styled.div`
  width: 335px;
  margin: 100px auto;

  h1{
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #4270BC;
  }
`

const Question = styled.div`

input{
  width: 335px;
  height: 37px;
  padding: 5px;
  border: none;
  margin-top: 49px;
  margin-bottom: 16px;
  background: #F4F0F0;
  border-radius: 5px;
}

textarea{
  width: 335px;
  height: 203px;
  padding: 5px;
  border: none;
  margin-bottom: 16px;
  background: #F4F0F0;
  border-radius: 5px;
}

button{
  width: 303px;
  height: 45px;
  margin-bottom: 16px;
  border: none;
  background: #3940D7;
  border-radius: 4.63636px;
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
}

  .button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default QuestionPage;