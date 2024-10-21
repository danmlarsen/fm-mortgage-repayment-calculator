import { AnimatePresence, motion } from "framer-motion";

export default function CalculatorResultsCalculated({
  monthly,
  total,
}: {
  monthly: string;
  total: string;
}) {
  return (
    <div className="space-y-500">
      <div className="space-y-200">
        <h2 className="text-2xl text-white">Your results</h2>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>
      <div className="p-400 border-t-lime divide-y divide-slate-300/25 rounded-lg border-t-4 bg-black/25">
        <div className="space-y-100 pb-400">
          <p>Your monthly repayments</p>
          <AnimatePresence mode="wait">
            <motion.h3
              key={monthly}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lime text-[2.5rem] md:text-3xl"
            >
              {monthly}
            </motion.h3>
          </AnimatePresence>
        </div>
        <div className="space-y-100 pt-400">
          <p>Total you'll repay over the term</p>
          <AnimatePresence mode="wait">
            <motion.h4
              key={total}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25 }}
              className="text-2xl text-white"
            >
              {total}
            </motion.h4>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
