function App() {
  const style = {
    padding: "10px",
    color: "darkgreen",
    backgroundColor: "black",
    textAlign: "center",
  };
  return (
    <>
      <h1 style={style}>Papinwit Lertwassana</h1>
      <p style={style}> Age: {new Date().getUTCFullYear() - 1993}</p>
      <Challenge style={style} />
    </>
  );
}

function Challenge(props) {
  const { style } = props;
  const now = new Date();
  const birth = new Date("26 Oct 1993");
  const year = now.getUTCFullYear() - birth.getUTCFullYear();
  const month = now.getMonth() - birth.getMonth();
  const day = now.getDate() - birth.getDate();
  const lastDateMonth = new Date(year, now.getMonth() + 1, 0).getDate();
  //   console.log(lastDateMonth);
  return (
    <p style={style}>
      Age: {year} Year {month < 0 ? month + 12 : month} Month{" "}
      {day < 0 ? day + lastDateMonth : day} Day
    </p>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(App());
