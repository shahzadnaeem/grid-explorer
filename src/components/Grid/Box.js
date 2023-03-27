import "./Box.css";

export default function Box({ xtra, jaunty, children }) {
  return (
    <div
      className={"box pad1" + (xtra ? " xtra" : "") + (jaunty ? " jaunty" : "")}
    >
      {children}
    </div>
  );
}
