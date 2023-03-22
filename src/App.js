import "./css/reset.css";
import "./css/base.css";
import "./css/debug.css";

import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Grid from "./components/Grid/Grid";

function App() {
  const grids = [
    { shape: "grid-8cols", boxes: 10, xtraBoxes: 4 },
    { shape: "grid-4cols", boxes: 3, xtraBoxes: 3 },

    { shape: "grid-6c4r", boxes: 4 },
    { shape: "grid-auto-c", boxes: 15 },
    { shape: "grid-6c4r", boxes: 22, xtraBoxes: 10 },

    { shape: "grid-4rows", boxes: 2 },
    { shape: "grid-4rows", boxes: 2, xtraBoxes: 2 },
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
