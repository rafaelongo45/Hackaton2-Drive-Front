import styled from "styled-components";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import Header from "../Header/Header";

function QuestionPage() {

  const [userQuestion, setUserQuestion] = useState({
    title: '',
    question: ''
  })

  const { idSubject } = useParams();

  const navigate = useNavigate();
  function fazerPergunta(e){
    e.preventDefault();
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjI4ODQ2NDM4ZWEzMmYxMTk1YzRmNjdlIiwiaWF0IjoxNjUzMDk4MDUxLCJleHAiOjE2NTU2OTAwNTF9.BNaSXULndX4NOoFBTQgbgC0qNMVHZO0XT2wFnG4VQ-8';
    const URL = `https://hackathon2-driven.herokuapp.com/subject/${idSubject}/questions`;
    const CONFIG =  { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.post(URL, { title: userQuestion.title,  question: userQuestion.question}, CONFIG);
       
    promise.then((promise) => {
      alert('Pergunta cadastrada com sucesso!');
      navigate('/');  });

    promise.catch((err)=>{ alert(err)});
  }

  return (
    <>
      <Header />
      <BodyQuestion>
        <h1>Matéria</h1>
        <form onSubmit={fazerPergunta}>
          <Question>
            <input type="text" placeholder="Título da pergunta" maxLength="30" required 
              onChange={e => setUserQuestion({ ...userQuestion, title: e.target.value })}></input>
            <textarea type="text" placeholder="Descrição da pergunta" required 
              onChange={e => setUserQuestion({ ...userQuestion, question: e.target.value })}></textarea>
            <div className="button">
              <button type="submit">Fazer a pergunta</button>
              <button type="button">Voltar</button>
            </div>
          </Question>
        </form>
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