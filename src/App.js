import "./css/reset.css";
import "./css/base.css";
import "./css/debug.css";

import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Grid from "./components/Grid/Grid";

function App() {
  const grids = [
    { shape: "grid-demo", boxes: 4, xtraBoxes: 2 },

    { shape: "grid-4cols", boxes: 3, xtraBoxes: 3 },

    { shape: "grid-6c4r", boxes: 4 },
    { shape: "grid-auto-c", boxes: 5, xtraBoxes: 2 },
    { shape: "grid-6c4r", boxes: 11, xtraBoxes: 10 },

    { shape: "grid-4rows", boxes: 2, xtraBoxes: 1 },
  ];

  return (
    <Wrapper>
      <main className="app-base">
        {grids.map((gridOpts, key) => {
          return <Grid key={key} {...gridOpts} />;
        })}
      </main>
    </Wrapper>
  );
}

export default App;
