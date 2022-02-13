import './App.css';
import { Routes, Route, Redirect } from 'react-router-dom'
import Home from './components/Home';
import AddQuestion from './components/AddQuestions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addquestion' element={<AddQuestion />} />
      </Routes>
    </div>
  );
}

export default App;
