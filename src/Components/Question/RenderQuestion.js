import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import subjectContext from '../Contexts/UserContexts';
import RenderAnswers from './RenderAnswers';

function RenderQuestion(){
  //const { subject, setSubject } = useContext(subjectContext);
  const {id} = useParams();

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
      const promise = axios.get(`https://hackathon2-driven.herokuapp.com/questions/${id}`);

      promise.then((response) => {
        console.log(response.data)
        setAnswers(response.data);
      })

      promise.catch((e) => {
        alert('Deu erro ai em', e)
      })
  }, [])

  return (
    <QuestionPage>
      <Title>Pergunta</Title>

      {
        answers.length === 0 ?
        <></>
        :
        <>
          <Question>
            <h1>{answers.question.title}</h1>
            <p>{answers.question.question}</p>
          </Question> 

          <Answers>
            <Title>Possíveis Repostas</Title>
            
            {
              answers.answers.length === 0 ? 
              <>
              </>
              :
              answers.answers.map(answer => {
                return <RenderAnswers answer = {answer} />
              })    
            }
          </Answers>
        </>
      }

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