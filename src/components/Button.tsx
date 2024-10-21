export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-400 md:px-500 bg-lime py-200 hover:bg-lime/50 focus-visible:ring-lime flex items-center rounded-full text-xl text-slate-900 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
      {children}
    </button>
  );
}
