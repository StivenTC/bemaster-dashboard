import { movieList } from "@/const/MovieList";
import SideBar from "@/pages/sideBar/SideBar";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlinePlayCircle } from "react-icons/md";
import Link from 'next/link'

export default function Dashboard() {
  return (
    <>
      <SideBar />

      <main className="home">
        <header className="dashboard-header">
          <button><IoArrowBack /></button>
          <Link href="/">
            <h1>Home / <strong>Bemaster</strong></h1>
          </Link>
        </header>

        <table className="list-table">
          <thead>
            <tr>
              <th><input type='checkbox' /> </th>
              <th className="data-name">Nombre</th>
              <th className="data-cell">Tamaño</th>
              <th className="data-cell">Duración</th>
              <th className="data-cell">Última modificación</th>
            </tr>
          </thead>
          <tbody>
            {movieList.map((folder) =>
              <tr key={folder.id}>
                <td className="data-cell"><input type='checkbox' /> </td>
                <td className="data-name"><MdOutlinePlayCircle /> {folder.name}</td>
                <td className="data-cell">{folder.time}</td>
                <td className="data-cell">{folder.size}</td>
                <td className="data-cell">{folder.edited}</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  );
}
