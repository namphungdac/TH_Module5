import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import TourList from './components/tourList';
import DeleteTour from './components/deleteTour';
import AddTour from './components/add';
import EditTour from './components/editTour';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TourList />} />
        <Route path='/delete/:id' element={<DeleteTour />} />
        <Route path='/add' element={<AddTour />} />
        <Route path='/edit/:id' element={<EditTour />} />
      </Routes>
    </>
  );
}

export default App;
