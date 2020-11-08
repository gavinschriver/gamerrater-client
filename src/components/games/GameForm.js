import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../categories/CategoryProvider";
import { GameContext } from "./GameProvider";

export default (props) => {
  const { categories, getCategories } = useContext(CategoryContext);
  const { createGame } = useContext(GameContext);
  const [formValues, setFormValues] = useState({
    title: "",
    time_to_play: 0,
    age_recommendation: 0,
    designer: "",
    number_of_players: 0,
    year_realeased: 0,
    description: "",
    category_id: 0,
  });

  const handleControlledInputChange = (e) => {
    const newValues = Object.assign({}, formValues);
    newValues[e.target.name] = e.target.value;
    setFormValues(newValues);
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();
    const newGame = {
      title: formValues.title,
      time_to_play: parseInt(formValues.time_to_play),
      age_recommendation: parseInt(formValues.age_recommendation),
      designer: formValues.designer,
      description: formValues.description,
      number_of_players: parseInt(formValues.number_of_players),
      year_realeased: parseInt(formValues.year_realeased),
      category_id: parseInt(formValues.category_id)
    };
      createGame(newGame).then(() => {
          props.history.push("/games")
      })
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <form>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleControlledInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="time">Est. time to play (hours)</label>
        <input
          type="number"
          name="time_to_play"
          value={formValues.time_to_play}
          onChange={handleControlledInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="age_recommendation">Recommended minimum age</label>
        <input
          type="number"
          name="age_recommendation"
          value={formValues.age_recommendation}
          onChange={handleControlledInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="designer">Designer</label>
        <input
          type="text"
          name="designer"
          value={formValues.designer}
          onChange={handleControlledInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="number_of_players">Number of players</label>
        <input
          type="number"
          name="number_of_players"
          value={formValues.number_of_players}
          onChange={handleControlledInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="year_realeased">Year Released</label>
        <input
          type="number"
          name="year_realeased"
          value={formValues.year_realeased}
          onChange={handleControlledInputChange}
        />
      </fieldset>

      <label htmlFor="category">Category</label>
      <select
        name="category_id"
        value={formValues.category_id}
        onChange={handleControlledInputChange}
      >
        <option value="0">Please select a category</option>
        {categories.map((c) => {
          return (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          );
        })}
      </select>

      <button type="submit" onClick={handleSubmitButtonClick}>
        Add
      </button>
    </form>
  );
};
