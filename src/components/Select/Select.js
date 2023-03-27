import { useState, useEffect } from "react";

export default function Select({ options, onChange }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  const handleChange = (ev) => {
    setSelected(options.options.find((it) => it.name === ev.target.value));
  };

  return (
    <div>
      <select
        name={options.title}
        id={options.title}
        value={selected ? selected.name : ""}
        onChange={handleChange}
      >
        <option value="">{`${options.title}...`}</option>
        {options.options.map((o, i) => {
          return (
            <option key={o.name} value={o.name}>
              {o.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
