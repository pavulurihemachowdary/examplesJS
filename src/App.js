import ChangeColors from "./ChangeColors";
import DisplayData from "./DisplayData";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div>
      {" "}
      <div style={{ width: "90%", margin: "0 auto" }}>
        <ChangeColors />
      </div>
      <br />
      <br />
      <DisplayData />
      <br />
      <br />
      <br />
      <ParentComponent />
    </div>
  );
}

export default App;
