function CardSobre() {

    return (
        <div className="w-full bg-gray-100 pt-18">
            {/*Seção equipe*/}
            <section className="w-full bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto space-y-8">

                    <h2 className="text-4xl font-bold text-bold text-center">
                        PeopleFlow
                    </h2>
                    <div className="h-2 w-24 bg-[#22C55E] mx-auto rounded-full"></div>
                    {/*Imagem */}
                    {/* <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-lg shadow-md">

                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="especialista" className="w-72 h-72 object-cover rounded-md" /> */}

                        {/*Texto*/}
                        <div>
                            <p className="text-gray-600 mt-10 leading-relaxed text-2xl font-regular text-center">
                                A PeopleFlow é uma plataforma de <span className="text-emerald-800 font-bold" > gestão de pessoas </span> que automatiza 
                                processos de RH e centraliza informações em um só lugar.
                                Com métricas em tempo real e relatórios inteligentes, ajuda empresas a tomarem decisões mais estratégicas. 
                            </p>
                        </div>
                    {/* </div> */}
                </div>
            </section>

            {/*Dados da empresa*/}
            <section className="w-full bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto bg-gray-200 rounded-3xl shadow-md py-10 px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center gap-10 px-10">
                           {/*ano de fundação*/} 
                           <div>
                            <h2 className="text-5xl font-bold text-emerald-600"> 2026</h2>
                            <p className="text-lg font-semibold text-gray-800">Ano de fundação</p>
                           </div>
                            {/*Capitais*/} 
                        <div>
                            <h2 className="text-5xl font-bold text-emerald-600">+1000</h2>
                            <p className="text-lg font-semibold text-gray-800">Empresas atendidas</p>
                           </div>
                        <div>
                            <h2 className="text-5xl font-bold text-emerald-600"> +2000</h2>
                            <p className="text-lg font-semibold text-gray-800">Colaboradores</p>
                           </div>
                    </div>
                </div>

            </section>

            {/*Seção Programadores*/}
            <section className="w-full py-16 px-6 bg-gray-200">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-bold text-center mb-12">
                        Nossos colaboradores
                        <div className="h-2 w-24 bg-[#22C55E] mx-auto rounded-full"></div>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/*Alesson*/}
                        <div className="bg-white flex flex-col p-8 rounded-2xl border border-emerald-200 items-center gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                                <img
                                    src="https://images.pexels.com/photos/30451074/pexels-photo-30451074.jpeg"
                                    alt="Alesson"
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </div>
                        </div>
                    {/*Isaias*/}
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                                <img
                                    src="https://images.pexels.com/photos/30451074/pexels-photo-30451074.jpeg"
                                    alt="Isaias"
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </div>
                        </div>
                    {/*Randerson*/}
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                                <img
                                    src="https://images.pexels.com/photos/30451074/pexels-photo-30451074.jpeg"
                                    alt="Randerson"
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </div>
                        </div>
                    {/*Milena*/}
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                                <img
                                    src="https://images.pexels.com/photos/30451074/pexels-photo-30451074.jpeg"
                                    alt="Milena"
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </div>
                        </div>
                    {/*Larissa*/}
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                                <img
                                    src="https://images.pexels.com/photos/30451074/pexels-photo-30451074.jpeg"
                                    alt="Larissa"
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </div>
                        </div>
                    {/*Rayane*/}
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
                                <img
                                    src="https://images.pexels.com/photos/30451074/pexels-photo-30451074.jpeg"
                                    alt="Rayane"
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default CardSobre;
