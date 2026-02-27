export default function SpecsSection() {
  const specs = [
    { value: "112’", label: "LENGTH" },
    { value: "8", label: "CHARTER OPTIONS" },
    { value: "7", label: "DAYS MAXIMUM" },
  ];

  return (
    <section
      aria-label="Yacht specs"
      className="w-full hidden sm:block bg-[#0A2540] "
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-y-6 py-12 sm:grid-cols-3 sm:gap-y-0">
          {specs.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="font-heading text-[#FFC93F] text-3xl font-semibold leading-none sm:text-4xl">
                {item.value}
              </div>
              <div className="mt-2 font-body text-white text-[11px] font-semibold tracking-[0.22em] sm:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}