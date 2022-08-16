
import Navbar from './Compornents/Home/Navbar';
import Home from './Compornents/Home/Home';
import Blogs from './Compornents/Home/Blogs';
import { Route, Routes } from 'react-router-dom';
import Footer from './Compornents/Shared/Footer';
import SecialCourseDetails from './Compornents/AllCourse/SpecialCourse/SecialCourseDetails';
import Dashboard from './Compornents/Dashboard/Dashboard';
import Users from './Compornents/Dashboard/Users';
import Payments from './Compornents/Dashboard/Payments';
import Admissions from './Compornents/Admisson/Admissions';
import Login from './Compornents/Shared/Login/Login';
import SignUp from './Compornents/Shared/Login/SignUp';
import BookStores from './Compornents/BookStore/BookStores';
import BookStoreDetails from './Compornents/BookStore/BookStoreDetails';
import { useEffect, useState } from 'react';
import Admin from './Compornents/Admin/Admin';
import User from './Compornents/Admin/User';
import Worker from './Compornents/Admin/Worker';
import io from 'socket.io-client';

function App() {
  const [theme, setTheme] = useState(false);


  const componentDidMount = () => {

    const socket = io.connect('/');

  }

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };


  return (
    <div data-theme={theme && "my_dark"}>

      <Navbar handleThemeChange={handleThemeChange} theme={theme}></Navbar>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/admissions' element={<Admissions></Admissions>}></Route>
        <Route path='/bookstore' element={<BookStores></BookStores>}></Route>
        <Route path='/bookStoreDetails/:detailsId' element={<BookStoreDetails></BookStoreDetails>}></Route>
        <Route path='/specialDetials/:coursesId' element={<SecialCourseDetails></SecialCourseDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/admin' element={

          <Admin></Admin>

        }>
          <Route index element={<Worker></Worker>}></Route>
          <Route path='user' element={<User></User>}></Route>

        </Route>

        <Route path='/dashboard' element={

          <Dashboard></Dashboard>

        }>
          <Route index element={<Users></Users>}></Route>
          <Route path='payments' element={<Payments></Payments>}></Route>

        </Route>


      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
