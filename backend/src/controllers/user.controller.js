import {
  createUserWithSamba,
  listUserWithSamba,
  deleteUserWithSamba,
} from "../services/samba.service.js";

export const deleteUser = async (req, res) => {
  const { username } = req.params;

  try {
    const result = await deleteUserWithSamba(username);

    const success = result.includes("Deleted user");

    res.json({
      message: success
        ? `✅ Usuario "${username}" eliminado correctamente`
        : `⚠ No se pudo eliminar el usuario "${username}"`,
      success,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: `❌ Error al eliminar el usuario "${username}"`,
      success: false,
      error: error.message,
    });
  }
};


export const listUser = async (req, res) => {
  const result = await listUserWithSamba();
  res.json({
    message: "✅ Listado de usuarios",
    result: result.split("\n").filter(Boolean),
  });
};

export const createUser = async (req, res) => {
  const {
    username,
    password,
    ou,
    givenName,
    surname,
    initials,
    email,
    description,
    useUsernameAsCN,
    mustChangePassword,
    isEnabled,
    homeDrive,
    homeDirectory,
    scriptPath,
    profilePath,
    jobTitle,
    company,
    useRandomPassword,
  } = req.body;

  if (!username || (!password && !useRandomPassword)) {
    return res.status(400).json({ error: "Faltan datos obligatorios." });
  }

  try {
    const result = await createUserWithSamba({
      username,
      password,
      ou,
      givenName,
      surname,
      initials,
      email,
      description,
      useUsernameAsCN,
      mustChangePassword,
      isEnabled,
      homeDrive,
      homeDirectory,
      scriptPath,
      profilePath,
      jobTitle,
      company,
      useRandomPassword,
    });

    res.json({ message: "✅ Usuario creado", result });
  } catch (err) {
    res
      .status(500)
      .json({ error: "❌ Error al crear usuario", details: err.message });
  }
};
