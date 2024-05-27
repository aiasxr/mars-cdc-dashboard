import { signIn } from "@/app/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button
        className="bg-slate-900 text-white p-4 rounded-md w-48"
        type="submit"
      >
        Sign-in with GitHub
      </button>
    </form>
  );
}
