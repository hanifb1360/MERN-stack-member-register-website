import './App.css';
import { Navbar } from "./components/Navbar";
import { AddMember } from "./pages/AddMember";
import { MemberDetails } from "./pages/MemberDetails";
import Members from "./pages/Members";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeContent } from './components/HomeContent';
import Footer from './components/Footer';







function App() {
  return (
    <BrowserRouter>
     <Navbar/>

        <Routes>
           <Route path="/" element={<HomeContent/>}/>
           <Route path="/all" element={<Members/>}/>
           <Route path="/add" element={<AddMember/>}/>
           <Route path="/details" element={<MemberDetails/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
