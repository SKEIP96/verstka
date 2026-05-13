"use client";

import Link from "next/link";
import Image from "next/image";
import { EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="w-full px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-[450px]">
        {/* FORM HEADER */}
        <div>
          <h2 className="text-1 font-semibold text-black">Welcome Back!</h2>

          <p className="mt-2 text-7 font-regular text-brand-muted sm:text-6 lg:mt-3 lg:text-4">
            Log in to manage your property searches, save favorites, and get
            personalized recommendations.
          </p>
        </div>

        {/* SOCIAL LOGIN BUTTONS */}
        <div className="mt-6 flex flex-col gap-3 text-7 font-regular sm:flex-row lg:mt-8 lg:text-5">
          <Button variant="outline" className="h-[40px] flex-1 gap-2 rounded-full lg:h-[44px]">
            <Image
              src="/images/icons/social_media/google.svg"
              alt="Google"
              width={18}
              height={18}
            />
            <span>Log In with Google</span>
          </Button>

          <Button variant="outline" className="h-[40px] flex-1 gap-2 rounded-full lg:h-[44px]">
            <Image
              src="/images/icons/social_media/Appl.svg"
              alt="Apple"
              width={18}
              height={18}
            />
            <span>Log In with Apple</span>
          </Button>
        </div>

        {/* DIVIDER */}
        <div className="relative mt-6 lg:mt-8">
          <div className="border-t border-black/10" />

          <span className="absolute left-1/2 top-0 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-7 font-regular text-brand-muted lg:text-5">
            or continue with email
          </span>
        </div>

        {/* LOGIN FORM */}
        <form className="mt-6 lg:mt-8">
          {/* EMAIL FIELD */}
          <div>
            <Label className="text-7 font-medium text-black lg:text-5">
              Username or Email
            </Label>

            <Input
              type="email"
              placeholder="Enter your username or email"
              className="mt-2 h-[44px] rounded-full border-black/10 px-5 text-7 shadow-none focus-visible:ring-0 lg:mt-3 lg:h-[48px] lg:text-5"
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="mt-4 lg:mt-5">
            <Label className="text-7 font-medium text-black lg:text-5">
              Password
            </Label>

            <div className="relative mt-2 lg:mt-3">
              <Input
                type="password"
                placeholder="Enter your password"
                className="h-[44px] rounded-full border-black/10 px-5 pr-12 text-7 shadow-none focus-visible:ring-0 lg:h-[48px] lg:text-5"
              />

              <button
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-muted"
              >
                <EyeOff size={18} />
              </button>
            </div>
          </div>

          {/* FORGOT PASSWORD */}
          <div className="mt-2 text-right lg:mt-3">
            <button
              type="button"
              className="text-7 font-semibold text-black transition-opacity hover:opacity-70"
            >
              Forgot your password?
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <Button className="mt-5 h-[46px] w-full rounded-full bg-brand-dark text-5 font-semibold text-white hover:bg-brand-dark/90 lg:mt-7 lg:h-[50px] lg:text-3">
            Log In
          </Button>
        </form>

        {/* SIGN UP LINK */}
        <p className="mt-6 text-center text-7 font-regular text-black lg:mt-8 lg:text-5">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-7 text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}