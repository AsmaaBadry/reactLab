import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../network/axiosConfig";

export default function Movie() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/Movie", {
        params: {
          limit: "5",
        },
      })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));

    // axios.post(
    //   "url",
    //   {
    //     username: "",
    //     age: "",
    //   },
    //   {
    //     params: {
    //       test: "param1",
    //     },
    //   }
    // );
  }, []);

  return (
    <div>
      Welcome to Users
      <ul>
        {movie.map((movie) => {
          return (
            <Link to={`/MovieDetails/${movie.id}`} key={movie.title}>
              <li>{movie.geners}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
