/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Jobghosters from "@/components/Jobghosters";
import Button from "@/components/neo/Button";
import { Ghost } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Ghost className="h-6 w-6" />
          <span className="sr-only">GhostedJe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#companies"
          >
            Companies
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Sign In
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div
                className="bg-neutral-100 dark:bg-neutral-800 mx-auto aspect-video overflow-hidden object-cover sm:w-full lg:order-last lg:aspect-square"
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "100%",
                }}
              >
                <Image
                  src="/assets/jobghoster.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="JobGhoster"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    GhostedJe: The one-stop website for
                    <br />
                    viewing JobGhosters{" "}
                  </h1>
                  <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                    Empowering job seekers by exposing companies that waste time
                    with ghosting. Take control of your career journey.
                  </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link href="#features">
                    <Button
                      buttonText="Get Started"
                      color="violet"
                      className="w-full"
                    />
                  </Link>
                  <Link href="#">
                    <Button
                      buttonText="Request Removal"
                      className="w-full bg-slate-100 hover:bg-slate-300 active:bg-white"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Jobghosters />

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Sign Up for Updates
                </h2>
                <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                  Stay updated with the latest jobghosters.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    className="max-w-lg flex-1 px-4 py-2 border-border border "
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 GhostedJe. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
