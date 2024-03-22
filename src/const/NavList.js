import { MdHelpOutline, MdOutlineDashboard, MdOutlinePlayCircle } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { PiGearDuotone } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";

export const navList = [
  {
    id: 1,
    icon: <MdOutlineDashboard />,
    name: 'Dashboard'
  },
  {
    id: 2,
    icon: <FaRegFolder />,
    name: 'Videos'
  },
  {
    id: 3,
    icon: <MdOutlinePlayCircle />,
    name: 'Player'
  },
  {
    id: 4,
    icon: <IoBarChartOutline />,
    name: 'Analytics'
  },
  {
    id: 5,
    icon: <PiGearDuotone />,
    name: 'Configurations'
  },
  {
    id: 6,
    icon: <MdHelpOutline />,
    name: 'Help'
  },
]