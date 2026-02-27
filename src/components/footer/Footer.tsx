export default function Footer() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-600 to-blue-900 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar seu RH?
        </h2>
        <p className="mb-6 text-gray-200">
          Junte-se a mais de 1.000 empresas que já modernizaram sua gestão de pessoas
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
            Começar Agora
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Agendar demonstração
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-400 px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
                PeopleFlow
            </h3>
            <p className="text-sm">
              A solução completa para gestão de Recursos Humanos que sua empresa precisa.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Funcionalidades</li>
              <li className="hover:text-white cursor-pointer">Planos e preços</li>
              <li className="hover:text-white cursor-pointer">Demonstração</li>
              <li className="hover:text-white cursor-pointer">API</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Sobre nós</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Carreiras</li>
              <li className="hover:text-white cursor-pointer">Contato</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>contato@peopleflow.com.br</li>
              <li>(81) 0800-90011</li>
              <li>Av. Cais do Apolo, 1000 - Recife, PE</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm">
          © 2026 PeopleFlow. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}