import GeneralList from "../components/GeneralList";

const Users = [
  { name: "Item One" },
  { name: "Item Two" },
  { name: "Item Three" },
]

function ListaUsuarios() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Lista de usuarios</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aquí puedes ver la lista de usuarios y sus propiedades.
          </p>
        </header>
      </div>

      <GeneralList items={Users}/>
    </div>
  );
}

export default ListaUsuarios;