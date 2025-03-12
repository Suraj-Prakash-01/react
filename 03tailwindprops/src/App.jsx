import "./App.css";
import Card from "./components/Card";

// Will use username given as props if provided or use Hc
function App({ username = "Hc" }) {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">
        Vite with Tailwind {username}{" "}
      </h1>
      <Card />
    </>
  );
}

export default App;
