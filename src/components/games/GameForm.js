import React from "react";

// Title title text
// time to play  time_to_play duration(string)
// Age rec age_recommendation int
// Designer designer text
// Number of players number_of_players int
// year realeased year_realeased int
// categories dropdown for cat ids (parseint)

export default (props) => {
  return (
    <form>
      <fieldset>
        <label htmlFor="title">Title</label>
              <input type="text" name="title" />
      </fieldset>

      <fieldset>
        <label htmlFor="time">Est. time to play</label>
        <input type="time" name="time_toplay" />
      </fieldset>

      <fieldset>
        <label htmlFor="age_recommendation">Recommended minimum age</label>
        <input type="number" name="age_recommendation" />
      </fieldset>

      <fieldset>
        <label htmlFor="designer">Designer</label>
        <input type="text" name="designer" />
      </fieldset>

      <fieldset>
        <label htmlFor="number_of_players">Number of players</label>
        <input type="number" name="number_of_players" />
      </fieldset>

      <fieldset>
        <label htmlFor="year_realeased">Year Released</label>
        <input type="date" name="year_realeased" />
      </fieldset>

      <label htmlFor="category">Category</label>
          <select>
              <option value="0">Please select a category</option>
          </select>
    </form>
  );
};
 