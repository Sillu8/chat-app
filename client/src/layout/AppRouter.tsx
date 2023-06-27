import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from './Layout'
import PrivatePage from './PrivatePage'
import { Suspense } from 'react';
import Loader from '../components/Loader';


const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PrivatePage />} >
          <Route path='*' element={<Layout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter