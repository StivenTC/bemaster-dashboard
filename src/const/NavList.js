import { MdHelpOutline, MdOutlineDashboard, MdOutlinePlayCircle } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { PiGearDuotone } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";

export const navList = [
  {
    id: 1,
    icon: <MdOutlineDashboard />,
    name: 'Dashboard',
    class: ''
  },
  {
    id: 2,
    icon: <FaRegFolder />,
    name: 'Videos',
    class: ''
  },
  {
    id: 3,
    icon: <MdOutlinePlayCircle />,
    name: 'Player',
    class: 'selected'
  },
  {
    id: 4,
    icon: <IoBarChartOutline />,
    name: 'Analytics',
    class: ''
  },
  {
    id: 5,
    icon: <PiGearDuotone />,
    name: 'Configuraciones',
    class: ''
  },
  {
    id: 6,
    icon: <MdHelpOutline />,
    name: 'Help',
    class: ''
  },
]