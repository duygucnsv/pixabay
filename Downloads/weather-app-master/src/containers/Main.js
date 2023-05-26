import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import DayList from '../components/DayList';
import Dropdowns from '../components/Dropdowns';
import Footer from '../components/Footer';



const Main = () => {
  return (
    <Container fluid="sm">
        <Header />
        <Dropdowns />
        <DayList />
        <Footer />
    </Container>
  )
}

export default Main