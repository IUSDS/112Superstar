export default function SevenDayHeading() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-full pt-12 pb-6 px-0 md:px-10 lg:px-16">
        <div className="flex flex-col gap-5 py-6 md:flex-row md:items-end md:justify-between md:gap-10 md:py-8">
          {/* Left heading */}
          <p className="mx-auto  text-center font-body text-xl font-medium uppercase italic  text-[#0A2540] sm:text-2xl md:mx-0 md:max-w-none md:text-left md:text-3xl lg:text-4xl md:whitespace-nowrap">
            STEP ABOARD THE GULF COAST OF <br className="hidden md:block" />
            FLORIDA'S PREMIER SUPERYACHT
          </p>

          {/* Right heading (blue panel only on mobile) */}
          <div className="w-full bg-[#0A2540] px-6 py-5 text-white md:w-auto md:bg-transparent md:p-0 md:text-[#0A2540]">
            <div className="flex flex-col items-center text-center md:items-end md:text-right">
              <div className="flex items-end gap-2 leading-none">
                <span className="font-body text-2xl itali font-normal  sm:text-3xl md:text-4xl lg:text-4xl">
                  The
                </span>
                <span className="font-heading text-[32px] font-semibold italic sm:text-5xl md:text-[6xl lg:text-6xl">
                  7-DAY
                </span>
              </div>

              <span className="mt-1font-body text-2xl itali font-normal sm:text-3xl md:text-4x lg:text-4xl ">
                Superstar Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}