"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

import { updateUser } from "@/lib/actions/users";
import { AccountCard, AccountCardFooter, AccountCardBody } from "./AccountCard";

export default function UpdateEmailCard({ email }: { email: string }) {
  const [state, formAction] = useFormState(updateUser, {
    error: "",
  });

  useEffect(() => {
    if (state.success == true) alert("Updated User");
    if (state.error) alert("Error");
  }, [state]);

  return (
    <AccountCard
      params={{
        header: "Your Email",
        description:
          "Please enter the email address you want to use with your account.",
      }}
    >
      <form action={formAction}>
        <AccountCardBody>
          <input
            defaultValue={email ?? ""}
            name="email"
            className="block text-sm w-full px-3 py-2 rounded-md border border-neutral-200 focus:outline-neutral-700"
          />
        </AccountCardBody>
        <AccountCardFooter description="We will email vou to verify the change.">
          <SubmitBtn />
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`bg-neutral-900 py-2.5 px-3.5 rounded-md font-medium text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={pending}
    >
      Updat{pending ? "ing" : "e"} Email
    </button>
  );
};
