import { setSearchTerm } from "../../../features/countries/countrieSlice";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const { SearchTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const handleInputValue = (e) =>
    dispatch(setSearchTerm(e.target.value.toLowerCase()));

  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={SearchTerm}
        onChange={handleInputValue}
      />
    </section>
  );
};

export default Search;
