import logo from '../logo.svg';
import {Routes,Route} from 'react-router-dom'
import LogInPage from "../pages/LogInPage";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LogInPage />}/>
        <Route path="home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
