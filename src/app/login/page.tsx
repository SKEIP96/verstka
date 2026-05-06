import LoginForm from "@/components/auth/LoginForm";
import LoginPreview from "@/components/auth/LoginPreview";

export default function LoginPage() {
  return (
    <main className="bg-[#FCFCFC]">
      {/* LOGIN PAGE SECTION */}
      <section className="pt-[120px] pb-[80px]">
        <div className="container-main">
          {/* LOGIN PAGE GRID */}
          <div className="grid min-h-[560px] grid-cols-[0.9fr_1.1fr]  gap-6">
            <div className="flex items-center justify-center">
              {/* LEFT FORM CARD */}
              <div className="h-[680px] w-[560px] rounded-[24px] border border-black/10 bg-white">
                <LoginForm />
              </div>
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="h-[750px] w-[700px] overflow-hidden rounded-[24px]">
              <LoginPreview />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
