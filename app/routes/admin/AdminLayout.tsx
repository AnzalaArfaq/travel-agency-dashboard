import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className='admin-layout'>admin-layout


    <aside className='w-full hidden lg:block bg-amber-200'></aside>
    <Outlet />
    </div>
  )
}

export default AdminLayout