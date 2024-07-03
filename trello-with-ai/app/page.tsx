// @ means root directive. defined inside the tsconfig.json "paths" section
import Board from "@/components/board";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Board />
    </main>
  );
}
