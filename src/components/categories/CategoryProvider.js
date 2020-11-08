import React, { useState } from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    return fetch(`http://localhost:8000/categories`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("gr_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(setCategories);
  };

  return (
    <CategoryContext.Provider value={{ getCategories, categories }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
