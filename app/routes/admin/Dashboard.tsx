import { Header } from '../../../components'
import React from 'react'

const Dashboard = () => {
  const user = {name: 'Dallen'}
  
  return (
    <main className='wrapper dashboard' >
      <Header 
        title={`Welcome ${user?.name ?? 'Guest'} `}
        description = "Track activity, trends and popular destinations in real time"

      />
      Dashboard Page Content
    </main>
  )
}

export default Dashboard