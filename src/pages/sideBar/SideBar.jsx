import Image from "next/image";
import LogoImage from "@/assets/logo.png"
import CardPlan from "../../components/cardPlan/CardPlan";
import { navList } from "@/const/NavList";

export default function SideBar({ anchor }) {

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
        {navList.map((item) =>
          <a href={`#${item.name}`} key={item.id} className={item.class}>
            {item.icon}
            <span>{item.name}</span>
          </a>
        )}
      </nav>

      <CardPlan />

    </aside>
  );
}
