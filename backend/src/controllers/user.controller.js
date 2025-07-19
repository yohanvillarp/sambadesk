import {
  createUserWithSamba,
  listUserWithSamba,
} from "../services/samba.service.js";

export const createUser = async (req, res) => {
  const { username, password, ou } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Faltan datos obligatorios." });
  }

  try {
    const result = await createUserWithSamba(username, password, ou);
    res.json({ message: "✅ Usuario creado", result });
  } catch (err) {
    res
      .status(500)
      .json({ error: "❌ Error al crear usuario", details: err.message });
  }
};

export const listUser = async (req, res) => {
  try {
    const result = await listUserWithSamba();
    res.json({ message: "Usuarios listados", result });
  } catch (err) {
    res
      .status(500)
      .json({ error: " Error al listar usuarios", details: err.message });
  }
};