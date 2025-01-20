import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      <fieldset>
        <h1>Hello CodeSandbox</h1>
        <h2 style={{ color: props.color }}>
          Start editing to see some magic happen!
        </h2>
      </fieldset>
    </div>
  );
}
