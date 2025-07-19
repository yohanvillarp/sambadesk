import { useState } from 'react';

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
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const comando = `samba-tool user create ${formData.username} ${formData.useRandomPassword ? '--random-password' : `"${formData.password}"`} \
${formData.givenName ? `--given-name="${formData.givenName}"` : ''} \
${formData.surname ? `--surname="${formData.surname}"` : ''} \
${formData.initials ? `--initials="${formData.initials}"` : ''} \
${formData.email ? `--mail="${formData.email}"` : ''} \
${formData.description ? `--description="${formData.description}"` : ''} \
${formData.ou ? `--userou="${formData.ou}"` : ''} \
${formData.useUsernameAsCN ? '--use-username-as-cn' : ''} \
${formData.mustChangePassword ? '--must-change-at-next-login' : ''} \
${formData.homeDrive ? `--home-drive="${formData.homeDrive}"` : ''} \
${formData.homeDirectory ? `--home-directory="${formData.homeDirectory}"` : ''} \
${formData.scriptPath ? `--script-path="${formData.scriptPath}"` : ''} \
${formData.profilePath ? `--profile-path="${formData.profilePath}"` : ''} \
${formData.jobTitle ? `--job-title="${formData.jobTitle}"` : ''} \
${formData.company ? `--company="${formData.company}"` : ''} \
${formData.isEnabled ? '' : '--disabled'}`;

    console.log('Comando generado:\n', comando);
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

// Componentes reutilizables para mantener limpio el código

const Input = ({ label, name, value, onChange, required = false, type = 'text' }) => {
  const isEmptyOptional = !required && !value;

  const baseClasses = "text-sm rounded-lg w-full p-2.5 border";
  const optionalStyle = isEmptyOptional
    ? "bg-yellow-50 border-yellow-300 text-yellow-800"
    : "bg-gray-50 border-gray-300 text-gray-900";

  return (
    <div>
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
        {label} {!required && <span className="text-yellow-500 text-xs">(opcional)</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseClasses} ${optionalStyle}`}
      />
    </div>
  );
};


const Checkbox = ({ label, name, checked, onChange }) => (
  <div className="flex items-center">
    <input
      id={name}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    />
    <label htmlFor={name} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {label}
    </label>
  </div>
);

export default CrearUsuario;
