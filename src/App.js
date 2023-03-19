import { useState } from "react";

import "./css/reset.css";
import "./css/utils.css";
import "./css/debug.css";

import "./App.css";

function WrapperControls(props) {
  return (
    <div className="wrapper-controls grid-cols just-middle">
      <button className="wrapper-button" onClick={props.toggleDebug}>
        {"CSS Debug " + (props.debug ? "🟢" : "🔴")}
      </button>
    </div>
  );
}

function Wrapper(props) {
  const [debug, setDebug] = useState(false);

  const toggleDebug = () => {
    setDebug((d) => {
      console.log(`setDebug: ${d} => ${!d}`);
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

function Box(props) {
  return <div className="box pad1">{props.children}</div>;
}

function Grid(props) {
  const boxes = new Array(props.numBoxes).fill(0);

  return (
    <div className="grid grid-1col pad4">
      <div className={props.shape}>
        {boxes.map((b, i) => (
          <Box key={i}>{`Box ${i}`}</Box>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Wrapper>
      <main className="app-base">
        <Grid shape="grid-8cols" numBoxes={10} />
        <Grid shape="grid-8rows" numBoxes={4} />
      </main>
    </Wrapper>
  );
}

export default App;
