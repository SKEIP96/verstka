import Navbar from "@/components/layout/Navbar";
import LoginForm from "@/components/auth/LoginForm";
import LoginPreview from "@/components/auth/LoginPreview";

export default function LoginPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="pb-16 pt-[110px] lg:pb-[80px] lg:pt-[120px]">
        <div className="container-main">
          {/* LOGIN GRID */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            {/* LEFT FORM CARD */}
            <div className="self-start max-h-[700px] h-auto rounded-[24px] border border-black/10 bg-white">
              <LoginForm />
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="hidden overflow-hidden rounded-[24px] lg:block">
              <LoginPreview />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}