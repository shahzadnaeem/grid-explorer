import "./css/reset.css";
import "./css/base.css";
import "./css/debug.css";

import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <Wrapper>
      <main className="app-base">
        <Grid shape="grid-8cols" xtra="" numBoxes={14} />
        <Grid shape="grid-4cols" xtra="" numBoxes={3} />

        <Grid shape="grid-6c4r" xtra="" numBoxes={4} />
        <Grid shape="grid-6c4r" xtra="" numBoxes={24} />
        <Grid shape="grid-6c4r" xtra="" numBoxes={22} numXtraBoxes={10} />

        <Grid shape="grid-4rows" xtra="" numBoxes={4} />
        <Grid shape="grid-4rows" xtra="jc-beg" numBoxes={4} />
        <Grid shape="grid-4rows" xtra="jc-cen" numBoxes={4} />
        <Grid shape="grid-4rows" xtra="jc-end" numBoxes={4} />
      </main>
    </Wrapper>
  );
}

export default App;
