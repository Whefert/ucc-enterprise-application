import { useRef } from "react";

function Search({ handleSearch, label, placeholder }) {
  const searchRef = useRef(null);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="search">{label}</label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        className="border border-blue-600 rounded-sm p-2"
        ref={searchRef}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
