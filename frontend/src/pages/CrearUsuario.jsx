import { useState } from 'react';
import Swal from 'sweetalert2'
import Input from '../components/Input.jsx';
import Checkbox from '../components/Checkbox.jsx';

function CrearUsuario() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    givenName: '',
    surname: '',
    initials: '',
    email: '',
    description: '',
    ou: '',
    useUsernameAsCN: false,
    mustChangePassword: false,
    isEnabled: true,
    homeDrive: '',
    homeDirectory: '',
    scriptPath: '',
    profilePath: '',
    jobTitle: '',
    company: '',
    useRandomPassword: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Error desconocido');
      }

      const result = await Swal.fire({
        icon: "success",
        title: "Usuario creado",
        text:
          data.message ||
          `El usuario "${formData.username}" fue creado correctamente.`,
        showCancelButton: true,
        confirmButtonText: "Crear nuevo usuario",
        cancelButtonText: "Volver al menú",
        buttonsStyling: false, // 🔧 desactiva estilos default
        customClass: {
          confirmButton:
            "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none",
          cancelButton:
            "bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 focus:outline-none",
        },
      });


      if (result.isConfirmed) {
        // Limpiar formulario
        setFormData({
          username: '',
          password: '',
          givenName: '',
          surname: '',
          initials: '',
          email: '',
          description: '',
          ou: '',
          useUsernameAsCN: false,
          mustChangePassword: false,
          isEnabled: true,
          homeDrive: '',
          homeDirectory: '',
          scriptPath: '',
          profilePath: '',
          jobTitle: '',
          company: '',
          useRandomPassword: false,
        });
      } else {
        // Redirigir al menú
        window.location.href = '/';
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear el usuario',
        text: error.message || 'Algo salió mal.',
        confirmButtonText: 'Cerrar',
        buttonsStyling: false, // desactiva estilos por defecto
        customClass: {
          confirmButton:
            'bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none',
        },
      });

    }
  };


  return (



    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-5 p-4">
      <Input label="Nombre de usuario" name="username" value={formData.username} onChange={handleChange} required />
      {!formData.useRandomPassword && (
        <Input label="Contraseña" name="password" type="password" value={formData.password} onChange={handleChange} required />
      )}
      <Checkbox label="Usar contraseña aleatoria" name="useRandomPassword" checked={formData.useRandomPassword} onChange={handleChange} />

      <Input label="Nombre" name="givenName" value={formData.givenName} onChange={handleChange} />
      <Input label="Apellido" name="surname" value={formData.surname} onChange={handleChange} />
      <Input label="Iniciales" name="initials" value={formData.initials} onChange={handleChange} />
      <Input label="Correo electrónico" name="email" type="email" value={formData.email} onChange={handleChange} />
      <Input label="Descripción" name="description" value={formData.description} onChange={handleChange} />
      <Input label="Unidad Organizativa (OU)" name="ou" value={formData.ou} onChange={handleChange} />
      <Input label="Unidad de red (H:)" name="homeDrive" value={formData.homeDrive} onChange={handleChange} />
      <Input label="Ruta del directorio personal" name="homeDirectory" value={formData.homeDirectory} onChange={handleChange} />
      <Input label="Script de inicio de sesión" name="scriptPath" value={formData.scriptPath} onChange={handleChange} />
      <Input label="Ruta del perfil" name="profilePath" value={formData.profilePath} onChange={handleChange} />
      <Input label="Cargo o título" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
      <Input label="Empresa" name="company" value={formData.company} onChange={handleChange} />

      <Checkbox label="Usar nombre de usuario como CN" name="useUsernameAsCN" checked={formData.useUsernameAsCN} onChange={handleChange} />
      <Checkbox label="Requiere cambiar contraseña al iniciar sesión" name="mustChangePassword" checked={formData.mustChangePassword} onChange={handleChange} />
      <Checkbox label="Cuenta habilitada" name="isEnabled" checked={formData.isEnabled} onChange={handleChange} />

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5">
        Crear Usuario
      </button>
    </form>
  );
}


export default CrearUsuario;
