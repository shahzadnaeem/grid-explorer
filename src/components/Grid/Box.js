export default function Box(props) {
  return (
    <div className={"box pad1" + (props.xtra === true ? " xtra" : "")}>
      {props.children}
    </div>
  );
}
