import "./filter.css";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { reset, setRegion } from "../../../features/countries/countrieSlice";

const Filter = () => {
  const regions = ["Africa", "Americas", "Europe", "Asia"];
  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const dispatch = useDispatch();

  const handleDropdown = () => {
    setDisplayDropDown(!displayDropDown);
  };

  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLowerCase()));
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down"></i>
      </div>

      {displayDropDown ? (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  handleDropdown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
