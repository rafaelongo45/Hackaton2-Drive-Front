import styled from "styled-components";
import { Link }  from 'react-router-dom';
function RenderSubjectQuestion({idSubject,subject }) {
  return (
    <SubjectQuestion>
      <Link to={`/subject/${idSubject}/questions`}> <p>{subject}</p> </Link> 
    </SubjectQuestion>
  );
}

const SubjectQuestion = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  background: #6495ED;

  p{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #000000;
  }

`;

export default RenderSubjectQuestion;
