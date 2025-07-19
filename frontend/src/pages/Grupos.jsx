import { useNavigate } from 'react-router-dom';

function Grupos() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Grupos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crea y administra grupos de seguridad o distribución para organizar usuarios.
          </p>
        </header>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          type="button"
          onClick={() => navigate('/grupos/crear')}
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Crear grupo
        </button>

        <button
          type="button"
          onClick={() => navigate('/grupos/lista')}
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Ver lista de grupos
        </button>
      </div>
    </div>
  );
}

export default Grupos;