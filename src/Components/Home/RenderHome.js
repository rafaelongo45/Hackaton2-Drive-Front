import styled from 'styled-components';

import RenderSubject from './RenderSubject';

function RenderHome(){
  const subjectsArray = ['Matemática', 'Física', 'Química', 'Português', 'Filosofia', 'Inglês', 'Espanhol', 'Biologia', 'Geografia', 'História', 'Sociologia', 'Literatura'];

  return (
    <Principal>
      <h1>Selecione uma matéria</h1>
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
        </Question>
      </Questions>

    </Principal>
  )
}

export default RenderHome;

const Principal = styled.main`
  margin: 90px auto 100px auto;
  height: 100%;
  position: relative;

  h1:first-child{
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
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
  margin-top: 120px;
`

const Question = styled.section`
  width: 353px;
  height: 96px;
  display: flex;
  align-items: flex-start;
  margin: 0 5px;
  background: red;
  
  h1{
    margin-top: 15px;
    font-size: 18px;
  }

  p{
    font-size: 16px;
    height: fit-content;
  }
`