import { MdOutlinePlayCircle } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { BsTrash3 } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
import SearchBar from "@/components/searchBar/SearchBar";
import { folderList } from "@/const/FolderList";

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

      <SearchBar />

      <table className="list-table">
        <thead>
          <tr>
            <th><input type='checkbox' /> </th>
            <th className="data-name">Nombre</th>
            <th className="data-cell">Videos</th>
            <th className="data-cell">Tamaño</th>
            <th className="data-cell">Última modificación</th>
          </tr>
        </thead>
        <tbody>
          {folderList.map((folder) =>
            <tr key={folder.id}>
              <td className="data-cell"><input type='checkbox' /> </td>
              <td className="data-name"><FaRegFolder /> {folder.name}</td>
              <td className="data-cell">{folder.videos}</td>
              <td className="data-cell">{folder.size}</td>
              <td className="data-cell">{folder.edited}</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
