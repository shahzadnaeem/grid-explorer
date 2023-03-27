import { useCallback, useState, useEffect } from "react";

import Box from "./Box";
import GridOptions from "./GridOptions";
import Help from "../Help/Help";

import "./Grid.css";

const toAry = (n) => (n ? Array(n).fill(0) : []);

const useNotify = () => {
  const [notification, setNotification] = useState({});

  const notify = () => {
    setNotification({});
  };

  return [notification, notify];
};

export default function Grid({ shape, boxes, xtraBoxes, showSelectedOptions }) {
  const [options, setOptions] = useState({});
  const [numBoxes, setNumBoxes] = useState(0);
  const [numXtraBoxes, setNumXtraBoxes] = useState(0);

  const [notification, notify] = useNotify();

  useEffect(() => {
    setNumBoxes(boxes);
    setNumXtraBoxes(xtraBoxes);
  }, [shape, boxes, xtraBoxes]);

  const boxContent = (i) => "Text text ... ".repeat(i % 6);

  const onChange = useCallback((k, v) => {
    setOptions((opts) => {
      opts[k] = v;
      return { ...opts };
    });
  }, []);

  const handleReset = () => {
    notify();
  };

  const handleBoxUpdate = (setter, delta) => {
    setter((p) => {
      if (p > 0 || delta > 0) {
        return p + delta;
      } else {
        return 0;
      }
    });
  };

  const selectedOptions = Object.keys(options)
    .filter((k) => options[k] !== "def")
    .map((k) => `${k}-${options[k]}`)
    .join(" ");

  const showHelp = shape === "help";

  return (
    <div className="Grid pad4">
      {!showHelp && (
        <h2>
          Shape: {shape}, Boxes: {boxes}, Extra Boxes: {xtraBoxes}
        </h2>
      )}

      <GridOptions
        shape={shape}
        selectedOptions={selectedOptions}
        showSelectedOptions={true}
        onChange={onChange}
        resetNotification={notification}
      />

      {showHelp ? (
        <Help />
      ) : (
        <>
          <div className="grid-controls grid-cols just-left mb4">
            <div className="grid-cols">
              <button onClick={handleReset}>Reset Options</button>
            </div>
            <div className="grid-cols">
              Boxes
              <button onClick={() => handleBoxUpdate(setNumBoxes, 1)}>+</button>
              <button onClick={() => handleBoxUpdate(setNumBoxes, -1)}>
                -
              </button>
            </div>

            <div className="grid-cols">
              Xtra Boxes
              <button onClick={() => handleBoxUpdate(setNumXtraBoxes, 1)}>
                +
              </button>
              <button onClick={() => handleBoxUpdate(setNumXtraBoxes, -1)}>
                -
              </button>
            </div>
          </div>

          <div className={`layout ${shape} ${selectedOptions}`}>
            {toAry(numBoxes).map((b, i) => (
              <Box key={i + 1}>
                {`Box ${i + 1}`}
                <br />
                {`${boxContent(i)}`}
              </Box>
            ))}

            {toAry(numXtraBoxes).map((b, i) => (
              <Box key={i + 1} xtra={true}>{`Xtra Box ${i + 1}`}</Box>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
