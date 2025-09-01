// app/page.tsx
import Footer from "../components/Footer";
import Contato from "./contato";
import Navbar from "./NavBar";

export default function MainPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 bg-gradient-to-b from-blue-900 to-purple-800 text-white">
  <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:justify-between gap-10">
    
    {/* Texto */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Dra. Ana Beatriz Phols Janeri
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Atendimento personalizado e soluções jurídicas eficazes.
      </p>
      <a
        href="/contato"
        className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
      >
        Agende uma Consulta
      </a>
    </div>

    {/* Imagem */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="/foto.jpeg"  // coloque a foto na pasta public
        alt="Foto da advogada"
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Sobre */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Sobre</h2>
        <p className="text-gray-300 mb-4 text-lg">
         Eu sou uma profissional dedicada e apaixonada pelo Direito, com foco em oferecer atendimento personalizado e soluções jurídicas eficazes. 
        </p>
         <p className="text-gray-300 mb-4 text-lg">
        Com experiência em diversas áreas do Direito, ela atua com ética, responsabilidade e compromisso com cada cliente, buscando sempre compreender as necessidades individuais de cada caso.
        </p>
        <p className="text-gray-300 text-lg">
          Meu objetivo é garantir que cada cliente se sinta seguro e bem orientado durante todo o processo, proporcionando clareza e confiança em decisões importantes.
        </p>
        <p className="text-gray-300 text-lg">
        Eu acredito que o relacionamento próximo e transparente com meus clientes é a base para resultados satisfatórios e duradouros.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-gray-300 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direito Civil</h3>
              <p className="text-gray-700">Assessoria e acompanhamento de processos civis com atenção a cada detalhe.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direito Trabalhista</h3>
              <p className="text-gray-700">Orientação e defesa em questões trabalhistas, para empresas e colaboradores.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direito Empresarial</h3>
              <p className="text-gray-700">Consultoria jurídica completa para empresas, contratos e negociações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <Contato />
    </>
  );
}
