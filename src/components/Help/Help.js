import "./Help.css";

export default function Help() {
  return (
    <div className="Help">
      <h1>Help</h1>
      <ul>
        <li>
          The 🌈 COLOURS <span className="flip-h">🌈</span>. You can change that
          if you like 🖹.
        </li>
        <li>Select a Layout from the dropdown list above.</li>
        <li>
          Select options, eg <i>Justify Content</i>, to see what effect they
          have.
        </li>
        <li>
          You can adjust the <i>Height</i> to allow you to better see the impact
          of the <i>Align Content</i> <i>spc-</i> options. You can also adjust
          the <i>Overflow</i> to deal with overflows. In some cases, the
          overflow will not allow you to scroll to the top of the container -{" "}
          <a href="https://www.w3.org/TR/css-align-3/#overflow-values">
            See w3.org Overflow Alignment: the safe and unsafe keywords and
            scroll safety limits
          </a>
          .
        </li>
        <li>
          If you choose a <i>flexbox</i> layout you can also try the <i>wrap</i>{" "}
          option - you will likely need to adjust the <i>Height</i> so that
          wrapping is required.
        </li>
        <li>Other Controls</li>
        <ul>
          <li>
            All options can reset via <i>Reset Options</i>.
          </li>
          <li>Boxes, Xtra Boxes or Jaunty Boxes can be added or removed.</li>
        </ul>
        <li>
          <b>Selected options: </b> shows the classes used to implement the
          options that you have selected.
        </li>
        <hr />
        <li>To examine or add more Layouts and Options...</li>
        <p>
          <span>src/App.js</span> is where the Layouts are defined.
        </p>
        <p>
          <span>src/components/Grid/Grid.css</span> is where the CSS for Options
          are defined.
        </p>
        <pre>
          {"eg "}
          <span>.jc-start &#123; justify-content: start; &#125;</span>
        </pre>
      </ul>
    </div>
  );
}
