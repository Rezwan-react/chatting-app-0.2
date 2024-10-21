import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import NotFound from './components/notFound/NotFound'
import RegisterPage from './pages/RegisterPage'
import { ToastContainer } from 'react-toastify'
import database from './firebase.config'
import RestPasswordPage from './pages/RestPasswordPage'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import FriendPage from './pages/FriendPage'
import ChatPage from './pages/ChatPage'
import FriendAddPage from './pages/FriendAddPage'

function App() {

  const rount = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element= {<LoginPage/>}/>
        <Route path='/register' element= {<RegisterPage/>}/>
        <Route path='/restPasswoed' element= {<RestPasswordPage/>}/>
        <Route path='/' element= {<Layout/>}>
          <Route index element= {<HomePage/>}/>
          <Route path='/friend' element= {<FriendPage/>}/>
          <Route path='/friendAdd' element= {<FriendAddPage/>}/>
          <Route path='/chat' element= {<ChatPage/>}/>
        </Route>
        <Route path='*' element= {<NotFound/>}/>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={rount}/>
    <ToastContainer />
    </>
  )
}

export default App
