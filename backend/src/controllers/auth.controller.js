import dotenv from 'dotenv';

//cargar las variables de entorno
dotenv.config();

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("xd");
  // Simulación (en producción deberías validar contra LDAP o samba-tool)
  if (username === process.env.ADMIN_USER && password ===  process.env.ADMIN_PASS) {
    return res.json({ message: "Login exitoso" });
  }
  console.log(username, password);
  console.log(process.env.ADMIN_USER, process.env.ADMIN_PASS);
  console.log("xd");
  res.status(401).json({ error: "Credenciales inválidas" });
};
