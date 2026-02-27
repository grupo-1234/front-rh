function PageSobre() {

    return (
        <div className="w-full bg-gray-100 pt-18">
            {/*Seção equipe*/}
            <section className="w-full bg-blue-100 py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
                        Nossa Equipe
                    </h2>
                    {/*Imagem */}
                    <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-lg shadow-md">

                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="especialista" className="w-72 h-72 object-cover rounded-md" />

                        {/*Texto*/}
                        <div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Meet our staff of experts who focus on a condimentum venenatis
                                placerat libero. Proin blandit tincidunt pretium. Maecenas nec
                                magna ac augue vulputate eu eget lorem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Dados da empresa*/}
            <section className="w-full bg-gray-100 py-16 px-6">
                <div className="max-w-5xl mx-auto bg-gray-200 rounded-3xl shadow-md py-10 px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center gap-10">
                           {/*ano de fundação*/} 
                           <div>
                            <h2 className="text-4xl font-bold text-blue-600"> 2026</h2>
                            <p className="text-lg font-semibold text-gray-800">Ano de fundação</p>
                           </div>
                            {/*Capitais*/} 
                        <div>
                            <h2 className="text-4xl font-bold text-blue-600">+1000</h2>
                            <p className="text-lg font-semibold text-gray-800">Empresas atendidas</p>
                           </div>
                        <div>
                            <h2 className="text-4xl font-bold text-blue-600"> +2000</h2>
                            <p className="text-lg font-semibold text-gray-800">Colaboradores</p>
                           </div>
                    </div>
                </div>

            </section>

            {/*Seção Programadores*/}
            <section className="w-full py-16 px-6 bg-gray-200">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Desenvolvedores
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/*Alesson*/}
                        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
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

export default PageSobre;
