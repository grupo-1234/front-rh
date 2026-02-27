
import './App.css'
import { ListaAvaliacao } from './components/cards/avalicao/ListaAvaliacao'
import ListaPeopleflow from './components/cards/peopleflow/ListaPeopleflow'
import ListaProblema from './components/cards/problema/ListaProblema'
import ListaSolucao from './components/cards/solucao/ListaSolucao'
import Footer from './components/footer/Footer'
import { Hero } from './components/home/Hero'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ListaProblema />
      <ListaSolucao />
      <ListaPeopleflow />
      <ListaAvaliacao />
      <Footer />
    </>
  )
}

export default App
