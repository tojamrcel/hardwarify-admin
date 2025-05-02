function ChartBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center rounded-md bg-stone-100 shadow-md dark:bg-gray-800">
      {children}
    </div>
  );
}

export default ChartBox;
