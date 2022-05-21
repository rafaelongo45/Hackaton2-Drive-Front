import styled from "styled-components";
import Header from "../Header/Header";
import {useState} from "react";

function QuestionPage() {

  const [userQuestion, setUserQuestion] = useState({
    title: '',
    question: ''
  })


  return (
    <>
      <h1>Teste</h1>
      <Header />
      <QuestionUser>
        <form>
          <input type="text" placeholder="Título" required onChange={e => setUserQuestion({ ...userQuestion, title: e.target.value })}></input>
          <textarea type="text" placeholder="Descrição da pergunta" required onChange={e => setUserQuestion({ ...userQuestion, question: e.target.value })}></textarea>
          <button type="submit"></button>
          <button type="button"></button>
        </form>
      </QuestionUser>
    </>
  )
}

const QuestionUser = styled.main`
  
`

export default QuestionPage;