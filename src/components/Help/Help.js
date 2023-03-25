import "./Help.css";

export default function Help() {
  return (
    <div className="Help">
      <h1>Help</h1>
      <ul>
        <li>Select a Layout from the dropdown list above</li>
        <li>Adjust the options to see what effect they have</li>
        <li>
          You can adjust the <i>Height</i> to allow you to better see the impact
          of the <i>Align Content</i> <i>spc-</i> options
        </li>
        <li>Similarly, you can add and remove Boxes and/or Xtra Boxes</li>
        <li>
          If you choose a <i>flexbox</i> layout you can also try the <i>wrap</i>{" "}
          option - you will likely need to adjust the <i>Height</i> so that
          wrapping is required
        </li>
        <hr />
        <li>You can also add your own Layouts and Options</li>
        <p>
          <span>src/App.js</span> is where the Layouts are defined
        </p>
        <p>
          <span>src/components/Grid/Grid.css</span> is where the CSS for Options
          are defined - the <i>Selected options: </i> list
        </p>
      </ul>
    </div>
  );
}
