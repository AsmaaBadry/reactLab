import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from 'axios';

export default function MoviesList(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=')
    return () => {
      console.log("DESTROYED");
    };
  }, []);
  return (
    <div>
      Welcome to MoviesList
      <Button
        name={"Redirect To Movie"}
        handleClick={() => history.push("/Movie")}
      />
    </div>
  );
}
