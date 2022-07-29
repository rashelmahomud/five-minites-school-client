
import Navbar from './Compornents/Home/Navbar';
import Home from './Compornents/Home/Home';
import Blogs from './Compornents/Home/Blogs';
import { Route, Routes } from 'react-router-dom';
import Footer from './Compornents/Shared/Footer';

function App() {
  return (
    <div>

      <Navbar></Navbar>
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     
      </Routes>
      <Footer></Footer>
     

    </div>
  );
}

export default App;
