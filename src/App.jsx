import './App.css';
import BookPage from './pages/Book/BookPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Welcome to Booksy homepage!</h1>
      <div className="card">
        <Link to="/book">Go to Book Page</Link>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
