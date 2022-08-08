import {Routes,Route} from 'react-router-dom'
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="home" element={<HomePage />} />
        <Route path="signUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
