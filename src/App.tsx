import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Hero } from './components/home/Hero'
import ListaProblema from './components/cards/problema/ListaProblema'
import ListaSolucao from './components/cards/solucao/ListaSolucao'
import ListaPeopleflow from './components/cards/peopleflow/ListaPeopleflow'
import CardPrecos from './components/cards/precos/CardPrecos'
import { ListaAvaliacao } from './components/cards/avalicao/ListaAvaliacao'
import { ModalContato } from './components/modal/ModalContato'
import PageSobre from './components/pageSobre/CardSobre'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")

  const abrirModal = (titulo: string) => {
  setModalTitle(titulo);
  setIsModalOpen(true);
};

  const LandingPage = () => (
    <>
      <Hero onOpenModal= {abrirModal} />
      <ListaProblema />
      <ListaSolucao />
      <ListaPeopleflow />
      <CardPrecos onOpenModal = {abrirModal} />
      <ListaAvaliacao />
    </>
  )

  return (
    <BrowserRouter>
      <Navbar onOpenModal={abrirModal} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sobre-nos" element={<PageSobre />} />
      </Routes>

      <Footer />

      <ModalContato 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        titulo={modalTitle} 
      />
    </BrowserRouter>
  )
}

export default App