import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + query);
  };

  const handleClean = (e) => {
    // e.preventDefault()
    navigate("/");
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <input type="submit" value="Buscar" />
      <input type="button" value="Voltar" onClick={handleClean} />
    </form>
  );
};

export default Search;
