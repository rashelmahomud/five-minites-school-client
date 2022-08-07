
import Navbar from './Compornents/Home/Navbar';
import Home from './Compornents/Home/Home';
import Blogs from './Compornents/Home/Blogs';
import { Route, Routes } from 'react-router-dom';
import Footer from './Compornents/Shared/Footer';
import SecialCourseDetails from './Compornents/AllCourse/SpecialCourse/SecialCourseDetails';
import Dashboard from './Compornents/Dashboard/Dashboard';
import Users from './Compornents/Dashboard/Users';
import Payments from './Compornents/Dashboard/Payments';
import Admin from './Compornents/Dashboard/Admin';
import Admissions from './Compornents/Admisson/Admissions';
import Login from './Compornents/Shared/Login/Login';
import SignUp from './Compornents/Shared/Login/SignUp';
import BookStores from './Compornents/BookStore/BookStores';
import BookStoreDetails from './Compornents/BookStore/BookStoreDetails';

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/admissions' element={<Admissions></Admissions>}></Route>
        <Route path='/bookstore' element={<BookStores></BookStores>}></Route>
        <Route path='/bookStoreDetails/:detailsId' element={<BookStoreDetails></BookStoreDetails>}></Route>
        <Route path='/specialDetials/:coursesId' element={<SecialCourseDetails></SecialCourseDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/dashboard' element={

          <Dashboard></Dashboard>

        }>
          <Route index element={<Users></Users>}></Route>
          <Route path='payments' element={<Payments></Payments>}></Route>
          <Route path='admin' element={<Admin></Admin>}></Route>

        </Route>


      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
