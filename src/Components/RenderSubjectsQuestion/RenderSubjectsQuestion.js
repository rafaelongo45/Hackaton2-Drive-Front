import Header from "../Header/Header";
import styled from "styled-components";
import RenderSubjectQuestion from "../RenderSubjectQuestion/RenderSubjectQuestion";

function RenderSubjectsQuestion() {
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
  ];

  return (
    <>
      <Header />
      <Main>
        <SubjectSubjects>
          {subjectsArray.map((subject) => {
            return <RenderSubjectQuestion subject={subject} />;
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
