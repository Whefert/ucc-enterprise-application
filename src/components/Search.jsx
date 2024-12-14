function Search({ handleSearch, label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="search">{label}</label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        className="border border-blue-600 rounded-sm p-2"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
