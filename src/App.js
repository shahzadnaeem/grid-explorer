import { useState } from "react";

import "./css/reset.css";
import "./css/base.css";
import "./css/debug.css";

import "./App.css";

import Grid from "./components/Grid/Grid";
import Select from "./components/Select/Select";
import Wrapper from "./components/Wrapper/Wrapper";

const grids = {
  title: "Select Grid",
  options: [
    {
      name: "Demo Grid",
      settings: { shape: "grid-demo", boxes: 4, xtraBoxes: 2 },
    },

    {
      name: "4 Col Grid",
      settings: { shape: "grid-4cols", boxes: 3, xtraBoxes: 3 },
    },

    {
      name: "6 Row x 4 Col Grid",
      settings: { shape: "grid-6c4r", boxes: 4 },
    },
    {
      name: "Auto Cols Grid",
      settings: { shape: "grid-auto-c", boxes: 5, xtraBoxes: 2 },
    },
    {
      name: "6 Row x 4 Col Grid - Many boxes",
      settings: { shape: "grid-6c4r", boxes: 11, xtraBoxes: 10 },
    },
    {
      name: "4 Row Grid",
      settings: { shape: "grid-4rows", boxes: 2, xtraBoxes: 1 },
    },
  ],
};

function AppControls({ options, setSelected }) {
  return (
    <div className="app-controls grid-cols just-middle">
      <Select options={options} onChange={setSelected} />
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <Wrapper>
      <main className="app-base">
        <AppControls options={grids} setSelected={setSelected} />

        {selected && <Grid {...selected.settings} />}
      </main>
    </Wrapper>
  );
}

export default App;
