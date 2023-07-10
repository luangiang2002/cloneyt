import React, { useEffect, useState } from 'react'
import Header from './component/header/Header'
import SideBar from './component/sidebar/SideBar'
import { Container } from 'react-bootstrap'
import HomeSreen from './screens/homeScrenn/HomeSreen'

import './app.scss'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <SideBar sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className='app_main' border border-warning>
          {/* <HomeSreen /> */}
          {children}
        </Container>
      </div>
    </>
  )
}
const App = () => {
  const { accessToken, loading } = useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }
  }, [accessToken, loading,navigate])
  return (
    <Routes>
      <Route path='/' element={
        <Layout>
          <HomeSreen />
        </Layout>}>
      </Route>
      <Route path='/auth' element={<LoginScreen />}></Route>
      <Route path='/search' element={
        <Layout>
          <h1>Search results</h1>
        </Layout>
      }></Route>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  )
}

export default App