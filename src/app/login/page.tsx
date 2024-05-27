import { SignIn } from "@/components/sign-in";

export default function Login() {
  return (
    <main className="bg-slate-700 h-screen w-screen">
      <div className="flex justify-center items-center h-full">
        <div className="bg-slate-800 px-5 py-24 rounded-lg space-y-4">
          <div>
            <p className="text-white font-medium text-2xl">
              Hello,
              <br />
              Welcome to CDC Dashboard.
            </p>

            <p className="text-white">Sign in to continue.</p>
          </div>
          <div>
            <SignIn />
          </div>
        </div>
      </div>
    </main>
  );
}
