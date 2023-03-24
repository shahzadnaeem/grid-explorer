import { useEffect, useState } from "react";

export default function RadioSet({ options, uid, onChange }) {
  const [selected, setSelected] = useState(options.values[0]);

  const INVISIBLE = "-";

  const handleChange = (ev) => {
    setSelected(ev.target.value);
  };

  useEffect(() => {
    onChange(options.key, selected);
  }, [selected, options.key, onChange]);

  return (
    <fieldset className={"grid-fieldset-c " + options.class}>
      <legend>{options.name}</legend>

      {options.values.map((o) => {
        const optId = `${uid}-${options.key}-${o}`;

        return (
          <div className="grid-fieldset-item" key={optId}>
            {o !== INVISIBLE ? (
              <label htmlFor={optId}>
                <input
                  type="radio"
                  id={optId}
                  name={optId}
                  value={o}
                  checked={selected === o}
                  onChange={handleChange}
                />
                {o}
              </label>
            ) : (
              // Invisible space for alignment hack!
              <span>&#8203;</span>
            )}
          </div>
        );
      })}
    </fieldset>
  );
}
