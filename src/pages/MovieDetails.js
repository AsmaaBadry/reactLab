import React, { useEffect, useState } from "react";
import { movieParams } from "react-router-dom";
import { axiosInstance } from "../network/axiosConfig";

export default function MovieDetails() {
  const [MovieDetails, setMovieDetails] = useState({});
  const params = movieParams();
  console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`/Movie/${params.id}`, {
        params: {
          page: 1,
        },
      })
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <img src={`http/postpath/${poster_path}`} /> */}
      MovieDetails :   {MovieDetails.overview}, {MovieDetails.title},
      {MovieDetails.geners}
    </div>
  );
}

// useHistory -> navigate between routes -> .push / .replace / .goback / .goForward
// useLocation -> to get details about current [active] route
// useParams -> to get the dynamic url params values for current [active] route
