import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Hero } from '../components/home/Hero';
import ListaProblema from '../components/cards/problema/ListaProblema';
import ListaSolucao from '../components/cards/solucao/ListaSolucao';
import ListaPeopleflow from '../components/cards/peopleflow/ListaPeopleflow';
import CardPrecos from '../components/cards/precos/CardPrecos';
import { ListaAvaliacao } from '../components/cards/avalicao/ListaAvaliacao';
import Footer from '../components/footer/Footer';
import { ModalContato } from '../components/modal/ModalContato';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const abrirModal = (titulo: string) => {
    setModalTitle(titulo);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenModal={() => abrirModal("Assinar Plano")} />
      <Hero onOpenModal={() => abrirModal("Falar com Especialista")} />
      <ListaProblema />
      <ListaSolucao />
      <ListaPeopleflow />
      <CardPrecos onOpenModal={() => abrirModal("Escolher Plano")} />
      <ListaAvaliacao />
      <Footer />

      <ModalContato 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        titulo={modalTitle}
      />
    </>
  );
}