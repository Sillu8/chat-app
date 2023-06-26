import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from './Layout'
import PrivatePage from './PrivatePage'


const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<PrivatePage />} >
        <Route path='*' element={<Layout />} />
      </Route>
    </Routes>
  )
}

export default AppRouter