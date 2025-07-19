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

export default Checkbox;