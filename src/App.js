import "./css/reset.css";
import "./css/base.css";
import "./css/debug.css";

import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Grid from "./components/Grid/Grid";

function App() {
  const grids = [
    { shape: "grid-8cols", xtra: "", numBoxes: 10 },
    { shape: "grid-8cols", xtra: "ji-cen", numBoxes: 10 },
    { shape: "grid-4cols", xtra: "ji-cen", numBoxes: 3 },

    { shape: "grid-6c4r", xtra: "ji-cen", numBoxes: 4 },
    { shape: "grid-auto-c", xtra: "ji-cen jc-cen", numBoxes: 15 },
    { shape: "grid-6c4r", xtra: "jc-cen", numBoxes: 22, numXtraBoxes: 10 },

    { shape: "grid-4rows", xtra: "", numBoxes: 2 },
    { shape: "grid-4rows", xtra: "jc-beg", numBoxes: 4 },
    { shape: "grid-4rows", xtra: "jc-cen", numBoxes: 4 },
    { shape: "grid-4rows", xtra: "jc-end", numBoxes: 4 },
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
