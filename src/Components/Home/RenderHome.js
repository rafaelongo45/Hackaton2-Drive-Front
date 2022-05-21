import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RenderQuestions from './RenderQuestions';

import RenderSubject from './RenderSubject';

function RenderHome(){
  const subjectsArray = ['Matemática', 'Física', 'Química', 'Português', 'Filosofia', 'Inglês', 'Espanhol', 'Biologia', 'Geografia', 'História', 'Sociologia', 'Literatura'];
  const [questionsArray, setQuestionsArray] = useState([]);
  
  useEffect(() => {
    const promise = axios.get('https://hackathon2-driven.herokuapp.com/questions');

    promise.then((response) => {
      console.log(response.data);
      setQuestionsArray(response.data);
    })

    promise.catch((e) => {
      alert('Deu erro ai em', e)
    })
  }, [])

  return (
    <Principal>
      <Title>Selecione uma matéria</Title>
      <Subjects>   
        {
          subjectsArray.map(subject => {
            return <RenderSubject subject={subject}/>
          })
        }
      </Subjects>

      <Questions>
        
        {
          questionsArray.map((question) => {
            return <RenderQuestions question = {question}/>
          })
        }

      </Questions>

    </Principal>
  )
}

export default RenderHome;

const Principal = styled.main`
  margin: 90px auto 60px auto;
  height: 100%;
  position: relative;
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content:center;
`

const Subjects = styled.article`
  position:absolute;
  margin-top: 40px;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  overflow-x: scroll;
  overflow-y: hidden;
`

const Questions = styled.article`
  margin: 130px auto 0 auto;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:center;
`