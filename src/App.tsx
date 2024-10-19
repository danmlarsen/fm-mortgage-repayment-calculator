import CalculatorForm from "./components/CalculatorForm";
import CalculatorResults from "./components/CalculatorResults";

function App() {
  return (
    <div className="md:py-500 min-h-screen lg:grid lg:place-items-center">
      <main className="mx-auto grid max-w-2xl overflow-hidden bg-white md:rounded-3xl lg:max-w-5xl lg:grid-cols-2">
        <div className="py-400 px-300 md:py-500 md:px-500">
          <CalculatorForm />
        </div>
        <div className="py-400 px-300 md:py-500 md:px-500 bg-slate-900 lg:rounded-bl-[100px]">
          <CalculatorResults />
        </div>
      </main>
    </div>
  );
}

export default App;
