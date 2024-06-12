import { checkAuth } from "@/lib/auth/utils";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return ( <main><div className="flex h-screen">
<Sidebar />
<main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
<Navbar />
{children}
</main>
</div></main> )
}