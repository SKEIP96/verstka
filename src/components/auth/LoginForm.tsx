"use client";

import Link from "next/link";
import { EyeOff } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="w-full px-10 py-10">
      <div className="mx-auto w-full max-w-[380px]">
        {/* FORM HEADER */}
        <div>
          {/* TITLE */}
          <h2 className="text-1 font-semibold text-black">
            Welcome Back!
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 text-4 font-regular leading-[1.6] text-[#8C8C8C]">
            Log in to manage your property searches, save favorites, and get
            personalized recommendations.
          </p>
        </div>

        {/* SOCIAL LOGIN BUTTONS */}
        <div className="mt-8 flex gap-4 text-5 font-regular ">
          {/* GOOGLE BUTTON */}
          <Button variant="outline" className="h-[44px] flex-1 rounded-full">
            <Image src="/images/icons/social_media/google.svg" alt="Google" width={20} height={20} />
            <span>Log In with Google</span>
          </Button>

          {/* APPLE BUTTON */}
          <Button variant="outline" className="h-[44px] flex-1 rounded-full">
            <Image src="/images/icons/social_media/Appl.svg" alt="Apple" width={20} height={20} />
            <span>Log In with Apple</span>
          </Button>
        </div>

        {/* DIVIDER */}
        <div className="relative mt-8">
          <div className="border-t border-black/10" />

          <span className="absolute text-5 font-regular left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[12px] text-[#8C8C8C]">
            or continue with email
          </span>
        </div>

        {/* LOGIN FORM */}
        <form className="mt-8">
          {/* EMAIL FIELD */}
          <div>
            <Label className="text-5 font-medium text-black">
              Username or Email
            </Label>

            <Input
              type="email"
              placeholder="Enter your username or email"
              className="mt-3 h-[48px] rounded-full border-black/10 px-5 shadow-none focus-visible:ring-0"
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="mt-5">
            <Label className="text-5 font-medium text-black">
              Password
            </Label>

            <div className="relative mt-3">
              <Input
                type="password"
                placeholder="Enter your password"
                className="h-[48px] rounded-full border-black/10 px-5 pr-12 shadow-none focus-visible:ring-0"
              />

              {/* PASSWORD ICON BUTTON */}
              <button
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8C8C8C]"
              >
                <EyeOff size={18} />
              </button>
            </div>
          </div>

          {/* FORGOT PASSWORD */}
          <div className="mt-3 text-right">
            <button
              type="button"
              className="text-[12px] font-semibold text-black transition-opacity hover:opacity-70"
            >
              Forgot your password?
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <Button className="mt-7 h-[50px] text-3 font-semibod w-full rounded-full bg-[#050817] text-white hover:bg-[#050817]/90">
            Log In
          </Button>
        </form>

        {/* SIGN UP LINK */}
        <p className="mt-8 text-center text-5 font text-black">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[12px] text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}