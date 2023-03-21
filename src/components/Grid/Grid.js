import { useId, useCallback, useEffect, useState } from "react";

import "./Grid.css";

function Box(props) {
  return (
    <div className={"box pad1" + (props.xtra === true ? " xtra" : "")}>
      {props.children}
    </div>
  );
}

function Radio({ options, uid, onChange }) {
  const [selected, setSelected] = useState(options.values[0]);

  const handleChange = (ev) => {
    setSelected(ev.target.value);
  };

  useEffect(() => {
    onChange(options.key, selected);
  }, [selected, options.key, onChange]);

  return (
    <fieldset className="grid-fieldset-c">
      <legend>{options.name}</legend>

      {options.values.map((o) => {
        const optId = `${uid}-${options.key}-${o}`;

        return (
          <div key={optId}>
            <input
              type="radio"
              id={optId}
              name={optId}
              value={o}
              checked={selected === o}
              onChange={handleChange}
            />
            <label htmlFor={optId}>{o}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

const JustifyContent = {
  name: "Justify Content",
  key: `jc`,
  values: ["def", "beg", "cen", "end"],
};

const JustifyItems = {
  name: "Justify Items",
  key: `ji`,
  values: ["def", "beg", "cen", "end"],
};

const AlignContent = {
  name: "Align Content",
  key: `ac`,
  values: ["def", "beg", "cen", "end"],
};

const AlignItems = {
  name: "Align Items",
  key: `ai`,
  values: ["def", "beg", "cen", "end"],
};

const PlaceContent = {
  name: "Place Content",
  key: `pc`,
  values: ["def", "beg", "cen", "end"],
};

const PlaceItems = {
  name: "Place Items",
  key: `pi`,
  values: ["def", "beg", "cen", "end"],
};

export default function Grid(props) {
  const uid = useId();
  const [options, setOptions] = useState({});

  const boxes = new Array(props.numBoxes).fill(0);
  const xtraBoxes = new Array(props.numXtraBoxes ?? 0).fill(0);

  const boxContent = (i) => "Text ...".repeat((i % 3) + 1);

  const onChange = useCallback((k, v) => {
    setOptions((opts) => {
      opts[k] = v;
      return { ...opts };
    });
  }, []);

  const selectedOptions = Object.keys(options)
    .map((k) => `${k}-${options[k]}`)
    .join(" ");

  return (
    <div className="Grid pad4">
      <h2>
        Boxes: {props.numBoxes}, Shape: {props.shape}, Extra: {props.xtra}
      </h2>
      <div className="grid-1col mb4">
        <div className="grid-2cols">
          <Radio options={JustifyContent} uid={uid} onChange={onChange} />
          <Radio options={JustifyItems} uid={uid} onChange={onChange} />
          <Radio options={AlignContent} uid={uid} onChange={onChange} />
          <Radio options={AlignItems} uid={uid} onChange={onChange} />
          <Radio options={PlaceContent} uid={uid} onChange={onChange} />
          <Radio options={PlaceItems} uid={uid} onChange={onChange} />
        </div>
        <fieldset className="grid-fieldset-c">
          <div>Selected options: </div>
          {Object.keys(options).map((k) => {
            return (
              <div key={k} className="option">
                {k}-{options[k]}
              </div>
            );
          })}
        </fieldset>
      </div>

      <div className={`${props.shape} ${selectedOptions}`}>
        {boxes.map((b, i) => (
          <Box key={i + 1}>
            {`Box ${i + 1}`}
            <br />
            {`${boxContent(i)}`}
          </Box>
        ))}

        {xtraBoxes.map((b, i) => (
          <Box key={i + 1} xtra={true}>{`Xtra Box ${i + 1}`}</Box>
        ))}
      </div>
    </div>
  );
}
