import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import CardPlan from "../../components/cardPlan/CardPlan";
import { navList } from "@/const/NavList";
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";

export default function SideBar({ hasBack }) {

  return (
    <aside className="sidebar">

      {hasBack && <button className="back-button">
        <IoIosArrowBack />
      </button>}

      <figure>
        <Image
          alt="Logo image"
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

        {hasBack && <Link href={`/dashboard`} > <MdHelpOutline /> <span>Ayuda</span></Link>}
      </nav>

      <CardPlan />

    </aside>
  );
}
