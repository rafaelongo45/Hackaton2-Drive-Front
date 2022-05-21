import axios from 'axios';
import styled from 'styled-components';

import RenderSubject from './RenderSubject';

function RenderHome(){
  const subjectsArray = ['Matemática', 'Física', 'Química', 'Português', 'Filosofia', 'Inglês', 'Espanhol', 'Biologia', 'Geografia', 'História', 'Sociologia', 'Literatura'];

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

        <Question>
          <h1>Título da pergunta</h1>
          <p>Descrição da pergunta</p>
          <Button>Visualizar</Button>
        </Question> 

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