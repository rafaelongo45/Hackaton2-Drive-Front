import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from ".././Home/Home";
import RenderSignUp from ".././SignUp/SignUp";
import RenderSignIn from ".././SignIn/SignIn";
import Question from '../../Question/Question';
import RenderSubjectsQuestion from ".././RenderSubjectsQuestion/RenderSubjectsQuestion";
import QuestionPage from ".././QuestionPage/QuestionPage";


import UserContext from "../Contexts/UserContexts";

function App(){
 // const {userData, setUserData} = useContext(UserContext);
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value ={ {userData, setUserData}}>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/signup' element={<RenderSignUp />}/>
          <Route path = '/signin' element={<RenderSignIn />}/>
          <Route path = '/subjects-question' element={<RenderSubjectsQuestion />}/>
          <Route path = '/user-question' element={<QuestionPage />}/>
          <Route path = '/question' element = {<Question />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;