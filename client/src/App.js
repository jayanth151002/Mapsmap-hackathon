import './App.css';
import { Routes, Route, Redirect } from 'react-router-dom'
import Home from './components/Home';
import AskQuestion from './components/AskQuestions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/askquestion' element={<AskQuestion />} />
      </Routes>
    </div>
  );
}

export default App;
