import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import { Container } from '@mui/material'

const Layout = () => {
  return (
    <Container>
        <Navbar/>
        <main>
            <Outlet />
        </main>
    </Container>
  )
}

export default Layout