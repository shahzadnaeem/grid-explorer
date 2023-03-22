import { useCallback, useState } from "react";

import Box from "./Box";
import GridOptions from "./GridOptions";

import "./Grid.css";

const toAry = (n) => (n ? Array(n).fill(0) : []);

export default function Grid({ shape, boxes, xtraBoxes, showSelectedOptions }) {
  const [options, setOptions] = useState({});

  const boxContent = (i) => "Text text ... ".repeat(i % 6);

  const onChange = useCallback((k, v) => {
    setOptions((opts) => {
      opts[k] = v;
      return { ...opts };
    });
  }, []);

  const selectedOptions = Object.keys(options)
    .filter((k) => options[k] !== "def")
    .map((k) => `${k}-${options[k]}`)
    .join(" ");

  return (
    <div className="Grid pad4">
      <h2>
        Shape: {shape}, Boxes: {boxes}, Extra Boxes: {xtraBoxes}
      </h2>

      <GridOptions
        selectedOptions={selectedOptions}
        showSelectedOptions={true}
        onChange={onChange}
      />

      <div className={`${shape} ${selectedOptions}`}>
        {toAry(boxes).map((b, i) => (
          <Box key={i + 1}>
            {`Box ${i + 1}`}
            <br />
            {`${boxContent(i)}`}
          </Box>
        ))}

        {toAry(xtraBoxes).map((b, i) => (
          <Box key={i + 1} xtra={true}>{`Xtra Box ${i + 1}`}</Box>
        ))}
      </div>
    </div>
  );
}
