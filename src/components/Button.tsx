export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-500 bg-lime py-200 flex items-center rounded-full text-xl text-slate-900">
      {children}
    </button>
  );
}
