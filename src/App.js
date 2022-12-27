import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddRecord from './components/AddRecoed/AddRecord';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFount from './components/NotFound/NotFount';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/addRecord" element={<AddRecord></AddRecord>}></Route>
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
