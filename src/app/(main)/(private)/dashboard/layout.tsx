import HeaderProjects from "@/ui/organisms/header/HeaderProjects";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=' flex h-screen'>
      <HeaderProjects />
      <div className="container-children w-full bg-slate-200">
        {children}
      </div>
    </main>
  );
}
