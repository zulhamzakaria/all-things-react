import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <>
      <nav className="bg-slate-900 text-center text-4xl font-extrabold pt-2 pb-2">
        TO DO App
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Calendar />
      </main>
    </>
  );
}
