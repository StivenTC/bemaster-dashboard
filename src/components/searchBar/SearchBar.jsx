import { IoMdSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <search role="search" className="search-bar">
      <label htmlFor="search" aria-label="Search">
        <IoMdSearch />
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Buscar video"
      />
    </search>
  );
}
