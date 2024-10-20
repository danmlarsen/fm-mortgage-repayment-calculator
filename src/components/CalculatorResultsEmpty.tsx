import IllustrationEmpty from "../assets/images/illustration-empty.svg";

export default function CalculatorResultsEmpty() {
  return (
    <div className="space-y-200 flex flex-col items-center text-center">
      <img src={IllustrationEmpty} alt="Calculator illustration" />
      <h2 className="text-2xl text-white">Results shown here</h2>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
