import { useState } from "react";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder="Search..."
    ></input>
  );
}

function SearchButton() {
  return <button>Search</button>;
}

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  return (
    <form>
      <SearchInput value={query} onChange={handleChange} />
      <SearchButton />
    </form>
  );
}
