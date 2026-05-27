"use client";

import Link from "next/link";
import AuthGuard from "../components/AuthGuard";

function Sidebar() {
  return (
    <div className="w-64 h-screen border-r p-4">
      <ul className="space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/clients">Clients</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </AuthGuard>
  );
}