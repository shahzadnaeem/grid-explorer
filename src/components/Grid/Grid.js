import "./Grid.css";

function Box(props) {
  return <div className="box pad1">{props.children}</div>;
}

export default function Grid(props) {
  const boxes = new Array(props.numBoxes).fill(0);
  const xtraBoxes = new Array(props.numXtraBoxes).fill(0);

  const boxContent = (i) => "Text ".repeat((i % 6) + 1);

  return (
    <div className="Grid grid-1col pad4">
      <h2>
        Boxes: {props.numBoxes}, Shape: {props.shape}, Extra: {props.xtra}
      </h2>
      <div className={`${props.shape} ${props.xtra}`}>
        {boxes.map((b, i) => (
          <Box key={i + 1}>
            {`Box ${i + 1}`}
            <br />
            {`${boxContent(i)}`}
          </Box>
        ))}

        {xtraBoxes.map((b, i) => (
          <Box key={i + 1}>{`Xtra Box ${i + 1}`}</Box>
        ))}
      </div>
    </div>
  );
}
