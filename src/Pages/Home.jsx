
import React from 'react'
import User from './User'
import Admin from './Admin'
import { Route,Routes,Link } from 'react-router-dom'
function Home() {
  return (
    <div className='text-black text-center ... justify-center py-20 '>
      <ul className='rounded-sm bg-black text-white container mx-auto 
       h-64 w-64 pt-3 rounded-md hover:shadow-lg  list-decimal '>
        <h1 className='pt-5 pb-3'>Create User Type</h1>
        <li className='pt-4 h-16 pb-2 bg-slate-600 w-64 mx-auto hover:bg-sky-700'>
         <Link to='/user'>User</Link>
        </li>
        <li className='pt-4 h-16 w-64 mx-auto bg-neutral-700 hover:bg-sky-700 '>
        <Link  to='/admin'>Admin</Link>
        </li>
      </ul>
      <div>
      <Routes>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default Home