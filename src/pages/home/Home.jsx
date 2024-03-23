import { MdOutlinePlayCircle } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { BsTrash3 } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="home">
      <header className="header">
        <div className="header-actions">
          <button className="tab-btn selected"><VscLibrary /> Biblioteca</button>
          <button className="tab-btn"><BsTrash3 /> Papelera</button>
        </div>
        <div className="header-actions">
          <button className="action-btn"><FaRegFolder /> Nueva carpeta</button>
          <button className="action-btn selected"><MdOutlinePlayCircle /> Nuevo video</button>
        </div>

      </header>

      <table>
        <thead>
          <tr>
            <th><input type='checkbox' /> </th>
            <th>Nombre</th>
            <th>Videos</th>
            <th>Tamaño</th>
            <th>Última modificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='checkbox' /> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>


    </main>
  );
}
