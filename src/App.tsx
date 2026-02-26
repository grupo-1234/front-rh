
import './App.css'
import ListaPeopleflow from './components/cards/peopleflow/ListaPeopleflow'
import ListaProblema from './components/cards/problema/ListaProblema'
import ListaSolucao from './components/cards/solucao/ListaSolucao'
import CardPrecos from './components/cards/precos/CardPrecos'


function App() {

  return (
    <>
      <ListaProblema />
      <ListaSolucao />
      <ListaPeopleflow />
      <CardPrecos />;
      
    </>
  )
}

export default App
