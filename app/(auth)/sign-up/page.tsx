
"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

import { signUpAction } from "@/lib/actions/users";

import AuthFormError from "@/components/auth/AuthFormError";

export default function SignUpPage() {
  const [state, formAction] = useFormState(signUpAction, {
    error: "",
  });

  return (
    <main className="max-w-lg mx-auto my-4 bg-popover p-10">
      <h1 className="text-2xl font-bold text-center">Create an account</h1>
      <AuthFormError state={state} />
      <form action={formAction}>
        <label
          htmlFor="email"
          className="block font-medium text-sm text-muted-foreground"
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
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
      <div className="mt-4 text-muted-foreground text-center text-sm">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-secondary-foreground underline">
          Sign in
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
      Sign{pending ? "ing" : ""} up
    </button>
  );
};

