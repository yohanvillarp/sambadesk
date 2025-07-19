import { useEffect, useState } from "react";
import GeneralList from "./GeneralList";
import { ClimbingBoxLoader } from "react-spinners";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loader activado al inicio

  useEffect(() => {
    fetch("http://localhost:3000/api/user/list")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data.result);
        setLoading(false); // 👈 detener loader
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false); // 👈 también detener loader en error
      });
  }, []);

  // 🔧 Función para eliminar usuario del estado
  const handleDeleteUsuario = (username) => {
    setUsuarios((prevUsuarios) => prevUsuarios.filter((u) => u !== username));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClimbingBoxLoader color="#2563eb" size={30} />
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Usuarios del Dominio
          </h2>
          <GeneralList items={usuarios} onDelete={handleDeleteUsuario} />
        </div>
      )}
    </div>
  );
}

export default Usuarios;
