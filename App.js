import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import {Route, Routes} from 'react-router-dom';
import Header from './pages/header/Header';
import UpdateUser from './pages/employee/UpdateUser';
import PostUser from './pages/employee/PostUser';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='*' element={<PostUser/>}/>
      <Route path='/employee/:id' element={<UpdateUser/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </>
  );
}

export default App;
