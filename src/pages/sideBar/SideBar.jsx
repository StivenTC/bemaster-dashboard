import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import CardPlan from "../../components/cardPlan/CardPlan";
import { navList } from "@/const/NavList";
import Link from 'next/link';

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
        {navList.map((item) =>
          <Link href={`/dashboard`} key={item.id} className={item.class}>
            {item.icon}
            <span>{item.name}</span>
          </Link>
        )}
      </nav>

      <CardPlan />

    </aside>
  );
}
