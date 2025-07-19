import { useEffect, useState } from "react";
import GeneralList from "./GeneralList";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/usuarios") // Ajusta la URL si es necesario
      .then((res) => res.json())
      .then((data) => setUsuarios(data.result))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Usuarios del dominio</h2>
      <GeneralList items={usuarios} />
    </div>
  );
}

export default Usuarios;
