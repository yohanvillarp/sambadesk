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


export default Input;