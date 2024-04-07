// Home.tsx
import HeroPage from "@/components/Home/Hero";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col overflow-y-hidden">
      <Header/>
      <HeroPage />
    </main>
  );
}
