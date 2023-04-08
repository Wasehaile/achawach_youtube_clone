import React from 'react'
import Images from '../Assets/Images'
import Layout from '../Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className='flex items-center justify-center h-screen flex-col'>
        <img src={Images.achawachLogo} alt="" className='w-10 animate-pulse'/>
        <h1 className='font-semibold'>On Going</h1>
      </div>
    </Layout>
  )
}

export default Home