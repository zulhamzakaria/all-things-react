// @ means root directive. defined inside the tsconfig.json "paths" section
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1>Trello with AI</h1>
    </main>
  );
}