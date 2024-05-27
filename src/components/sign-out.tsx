import { signOut } from "@/app/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className="bg-slate-900 text-white p-4 rounded-md w-48"
        type="submit"
      >
        Sign Out
      </button>
    </form>
  );
}
