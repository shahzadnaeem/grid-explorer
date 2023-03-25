import "./Help.css";

export default function Help() {
  return (
    <div className="Help">
      <h1>Help</h1>
      <p>Select a Layout from the dropdown list</p>
      <p>Adjust the options to see what effect they have</p>
      <p>
        You can adjust the <i>Height</i> to allow you to better see the impact
        of the <i>spc-</i> options of <i>Align Content</i>
      </p>
      <p>
        If you choose a <i>flexbox</i> layout you can also try the <i>wrap</i>{" "}
        option - you will likely need to adjust the <i>Height</i> so that
        wrapping is required
      </p>
      <hr />
      <p>You can also add your own Layouts and Options</p>
      <p>
        <span>src/App.js</span> is where the Layouts are defined
      </p>
      <p>
        <span>src/components/Grid/Grid.css</span> is where the CSS for Options
        are defined - the <i>Selected options: </i> list
      </p>
    </div>
  );
}
