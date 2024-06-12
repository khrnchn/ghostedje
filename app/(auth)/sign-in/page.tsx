"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

import { signInAction } from "@/lib/actions/users";

import AuthFormError from "@/components/auth/AuthFormError";

export default function SignInPage() {
  const [state, formAction] = useFormState(signInAction, {
    error: "",
  });

  return (
    <main className="max-w-lg mx-auto my-4 bg-popover p-10">
      <h1 className="text-2xl font-bold text-center">
        Sign in to your account
      </h1>
      <AuthFormError state={state} />
      <form action={formAction} className="flex flex-col">
        <label
          htmlFor="email"
          className="block font-medium text-sm text-muted-foreground"
        >
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          required
          className="block w-full px-3 py-2 rounded-md border border-border focus:outline-primary"
        />
        <br />
        <label
          htmlFor="password"
          className="block font-medium text-sm text-muted-foreground"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="block w-full px-3 py-2 rounded-md border border-border focus:outline-primary"
        />
        <br />
        <SubmitButton />
      </form>
      <div className="mt-4 text-sm text-center text-muted-foreground">
        Don&apos;t have an account yet?{" "}
        <Link
          href="/sign-up"
          className="text-accent-foreground underline hover:text-primary"
        >
          Create an account
        </Link>
      </div>
    </main>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-primary w-full p-2.5 rounded-md font-medium text-primary-foreground text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      Sign{pending ? "ing" : ""} in
    </button>
  );
};
