import { useState } from "react";

import "./Wrapper.css";

function WrapperControls(props) {
  return (
    <div className="wrapper-controls grid-cols just-middle">
      <button className="wrapper-button" onClick={props.toggleDebug}>
        {"CSS Debug " + (props.debug ? "🟢" : "🔴")}
      </button>
    </div>
  );
}

export default function Wrapper(props) {
  const [debug, setDebug] = useState(false);

  const toggleDebug = () => {
    setDebug((d) => {
      return !d;
    });
  };

  return (
    <div className={"wrapper grid-1col" + (debug ? " __CSSDEBUG__" : "")}>
      <WrapperControls debug={debug} toggleDebug={toggleDebug} />
      {props.children}
    </div>
  );
}
