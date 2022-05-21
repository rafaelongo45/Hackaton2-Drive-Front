import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';

import Home from ".././Home/Home";
import RenderSignUp from ".././SignUp/SignUp";
import RenderSignIn from ".././SignIn/SignIn";
import Question from '../Question/Question';
import PostAnswer from '../Question/RenderPostAnswer';
import RenderSubjectsQuestion from ".././RenderSubjectsQuestion/RenderSubjectsQuestion";
import QuestionPage from ".././QuestionPage/QuestionPage";

import subjectContext from "../Contexts/UserContexts";

function App(){
  const [subject, setSubject] = useState({id: '0'})

  return (
    <BrowserRouter>
      <subjectContext.Provider value={ { subject, setSubject} }>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/signup' element={<RenderSignUp />}/>
          <Route path = '/signin' element={<RenderSignIn />}/>
          <Route path = '/subjects' element={<RenderSubjectsQuestion />}/>
          <Route path = '/subject/:idSubject/questions' element={<QuestionPage />}/>
          <Route path = '/questions/:id' element = {<Question />} />
          <Route path = '/subject/questions' element={<QuestionPage />}/>
          <Route path = '/answer' element = {<PostAnswer />} />
        </Routes>
      </subjectContext.Provider>
    </BrowserRouter>
  )
}

export default App;