import Image from "next/image";

export default function LoginPreview() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/auth/login-preview.jpg"
        alt="Luxury property"
        fill
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* BOTTOM GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-black/80 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-10 left-10 z-10 max-w-[420px] text-white">
        {/* TITLE */}
        <h3 className="h4 font-semibold">
          Explore Properties
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-5 text-white/80">
          Once your profile is setup, it’s time to explore! Use our advanced
          search features to find properties based on location, price, and type.
          You can also save your favorite properties for later viewing.
        </p>

        {/* SLIDER DOTS */}
        <div className="mt-8 flex items-center gap-2">
          <span className="h-2 w-10 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
