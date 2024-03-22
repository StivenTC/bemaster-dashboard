import SideBar from "@/pages/sideBar/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dashboard">
      <SideBar />
      <section className="section">
        <h1>main</h1>
      </section>
    </main>
  );
}
