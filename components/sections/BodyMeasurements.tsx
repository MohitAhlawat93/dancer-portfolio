import { siteContent } from "@/content/site-content";

export function BodyMeasurements() {
  return (
    <section
      aria-labelledby="measurements-title"
      className="relative overflow-hidden border-y border-[#1f2926]/10 bg-[#f3ede4] px-5 py-16 sm:px-6 sm:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.27em] text-[#9a6a3a]">
              Measurements
            </p>
            <h2
              id="measurements-title"
              className="mt-4 font-display text-4xl font-light tracking-[-.035em] text-[#18201e] sm:text-5xl"
            >
              Body <span className="italic text-[#9a6a3a]">measurements.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#707773]">
              Listed in inches.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-[1.4rem] border border-[#1f2926]/10 bg-[#fffdf9] shadow-[0_18px_45px_rgba(65,50,33,.06)]">
            {siteContent.bodyMeasurements.map((measurement) => (
              <div
                key={measurement.label}
                className="border-r border-[#1f2926]/10 px-4 py-7 text-center last:border-r-0 sm:px-7 sm:py-9"
              >
                <p className="font-display text-4xl font-light text-[#123338] sm:text-5xl">
                  {measurement.value}
                </p>
                <p className="mt-2 text-[8px] font-bold uppercase tracking-[.18em] text-[#777d79]">
                  {measurement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
