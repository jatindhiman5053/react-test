import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/login";
import Signup from './signup/Signup';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
