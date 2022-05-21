import Header from "../Header/Header";
import styled from "styled-components";
import RenderSubjectQuestion from "../RenderSubjectQuestion/RenderSubjectQuestion";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

function RenderSubjectsQuestion() {

  const [materias, setMaterias] = useState([]);

  useEffect(() => {

    const URLBASE = 'https://hackathon2-driven.herokuapp.com/subjects'
    const promise = axios.get(`${URLBASE}`);
    
    promise.then((promise) => { setMaterias([...promise.data]); });

    promise.catch((err)=>{ alert('Ocorreu um erro:' + err );  });


  } , [materias]);
/*
  const subjectsArray = [
    "Matemática",
    "Física",
    "Química",
    "Português",
    "Filosofia",
    "Inglês",
    "Espanhol",
    "Biologia",
    "Geografia",
    "História",
    "Sociologia",
    "Literatura",
  ];*/

  return (
    <>
      <Header />
      <Main>
        <SubjectSubjects>
          {materias?.map(({_id, subject}) => {
            return <RenderSubjectQuestion idSubject={_id} subject={subject} />;
          })}
        </SubjectSubjects>
      </Main>
    </>
  );
}

const Main = styled.main`
    width: 100vw;
    margin-top: 85px;
`;

const SubjectSubjects = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default RenderSubjectsQuestion;
