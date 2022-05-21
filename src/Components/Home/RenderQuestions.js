import styled from 'styled-components'
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import subjectContext from '../Contexts/UserContexts';

function RenderQuestions({question}){
  const {subject, setSubject} = useContext(subjectContext);
  const navigate = useNavigate();

  // function changeRoute(id){
  //   setSubject({id: id})
  //   navigate(`questions/${id}`)
  // }

  return (
        <Question>
          <h1>{question.title}</h1>
          <p>{question.question}</p>
          <Link to = {`questions/${question._id}`}><Button >Visualizar</Button></Link>
        </Question> 
  )
}

export default RenderQuestions;

const Question = styled.section`
  width: 353px;
  height: 96px;
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
    width: 70%;
    font-size: 14px;
    height: 50%;
  }
`

const Button = styled.button`
  position:absolute;
  right: 20px;
  top: 33px;
  border: none;
  border-radius: 6px;
  color: #454749;
  font-weight: 700;
  height: 30px;
  font-size: 14px;
  box-shadow:4px 7px 15px -2px rgba(0,0,0,0.42);
  background-color: var(--button-color);
`