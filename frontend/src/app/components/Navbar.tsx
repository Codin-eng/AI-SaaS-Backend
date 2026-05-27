"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex justify-between p-4 border-b">
      <h1 className="font-bold">SaaS Dashboard</h1>

      <button
        onClick={logout}
        className="text-red-500"
      >
        Logout
      </button>
    </div>
  );
}