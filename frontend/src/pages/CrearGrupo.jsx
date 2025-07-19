import GeneralList from '../components/GeneralList';
import { useState } from 'react';

function CrearGrupo() {
  const [formData, setFormData] = useState({
    groupName: '',
    groupType: 'SECURITY',
    description: '',
    mailAddress: '',
    notes: '',
    company: '',
    gidNumber: '',
    ou: '',
    nisDomain: '',
    objectPath: '',
    internetEncoding: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = `samba-tool group add "${formData.groupName}" \
${formData.groupType ? `--group-type=${formData.groupType}` : ''} \
${formData.description ? `--description="${formData.description}"` : ''} \
${formData.mailAddress ? `--mail-address="${formData.mailAddress}"` : ''} \
${formData.notes ? `--notes="${formData.notes}"` : ''} \
${formData.company ? `--company="${formData.company}"` : ''} \
${formData.gidNumber ? `--gid-number=${formData.gidNumber}` : ''} \
${formData.ou ? `--userou="${formData.ou}"` : ''} \
${formData.nisDomain ? `--nis-domain="${formData.nisDomain}"` : ''} \
${formData.objectPath ? `--object-path="${formData.objectPath}"` : ''} \
${formData.internetEncoding ? `--internet-encoding="${formData.internetEncoding}"` : ''}`.replace(/\s+/g, ' ').trim();

    console.log("Comando generado:\n", cmd);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-5 p-4">
      <Input label="Nombre del grupo" name="groupName" value={formData.groupName} onChange={handleChange} required />
      <Select
        label="Tipo de grupo"
        name="groupType"
        value={formData.groupType}
        onChange={handleChange}
        options={[
          { label: "Security", value: "SECURITY" },
          { label: "Distribution", value: "DISTRIBUTION" },
        ]}
      />
      <Input label="Descripción" name="description" value={formData.description} onChange={handleChange} />
      <Input label="Correo del grupo" name="mailAddress" value={formData.mailAddress} onChange={handleChange} />
      <Input label="Notas" name="notes" value={formData.notes} onChange={handleChange} />
      <Input label="Empresa" name="company" value={formData.company} onChange={handleChange} />
      <Input label="GID Number (UNIX)" name="gidNumber" value={formData.gidNumber} onChange={handleChange} />
      <Input label="Unidad Organizativa (OU)" name="ou" value={formData.ou} onChange={handleChange} />
      <Input label="Dominio NIS" name="nisDomain" value={formData.nisDomain} onChange={handleChange} />
      <Input label="Ruta LDAP (objectPath)" name="objectPath" value={formData.objectPath} onChange={handleChange} />
      <Input label="Internet Encoding" name="internetEncoding" value={formData.internetEncoding} onChange={handleChange} />

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5">
        Crear Grupo
      </button>
    </form>
  );
}

// Reutilizable
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

const Select = ({ label, name, value, onChange, options }) => (
  <div>
    <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="text-sm rounded-lg w-full p-2.5 border bg-gray-50 border-gray-300 text-gray-900"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default CrearGrupo;
