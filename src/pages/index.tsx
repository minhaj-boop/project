import Homepage from '@/component/view/HomePage'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* here just need to declare the view component */}
      <Homepage/>
    </div>
  )
}

//USE getStaticProps or getServerSideProps

export default index