
import HomePage from "@/pages/home/Home";
import SideBar from "@/pages/sideBar/SideBar";

export default function Home() {
  return (
    <main className="dashboard">
      <SideBar />
      <HomePage />
    </main>
  );
}
