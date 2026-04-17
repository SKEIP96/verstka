import Image from "next/image";

const stats = [
  { label: "Home for Rent", value: "5300+" },
  { label: "Home to Buy", value: "3000+" },
  { label: "Agents", value: "120+" },
  { label: "Cities Covered", value: "83+" },
  { label: "Total Properties", value: "9200+" },
];

export default function PropertySection() {
  return (
    <section className="w-full py-5">
      <div className="relative overflow-hidden  bg-[#090C1B] px-[60px] py-[80px] ">
        {/* Left decoration */}
        <Image
          src="/images/logos/Pattern1.svg"
          alt="logo decor"
          width={235}
          height={265}
          className="absolute -left-8 bottom-0 z-0  w-[255px] h-[235px] object-fill pointer-events-none"
        />
        {/* Right decoration */}
        <Image
          src="/images/logos/Pattern1.svg"
          alt="logo decor"
          width={235}
          height={265}
          className="absolute -right-12 -top-6 z-0  w-[201px] h-[176px] object-fill rotate-45 pointer-events-none"
        />

        <div className="relative z-10 flex items-center justify-center gap-[90px]">
          {stats.map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="text-4 font-regular text-white/60">{item.label}</p>
              <h2 className="my-2 font-semibold leading-none tracking-[-0.03em] text-white">
                {item.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
