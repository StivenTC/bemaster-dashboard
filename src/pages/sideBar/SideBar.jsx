import Image from "next/image";
import LogoImage from "@/assets/logo.png"
import CardPlan from "../../components/cardPlan/CardPlan";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <figure>
        <Image
          alt="Trulli"
          src={LogoImage}
          width={48}
          height={48} />
      </figure>

      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Videos</li>
          <li>Player</li>
          <li>Analytics</li>
          <li>Configurations</li>
          <li>Help</li>
        </ul>
      </nav>

      <CardPlan />

    </aside>
  );
}
