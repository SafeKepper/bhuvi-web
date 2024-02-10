"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default async function ContactForm() {
  const [state, handleSubmit] = useForm("xvoyoevn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto py-1 pl-16 bg-white">
        {/* <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-lg font-bold">BhuvaN</Link>
          <Link href={'./RESUME'} className="text-cyan-400 flex items-center gap-5 text-lg font-bold">
            RESUME
          </Link>
        </header> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}

