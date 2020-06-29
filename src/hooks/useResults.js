import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [resutls, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {

    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "San Jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("There is something wrong");
    }
  };

  useEffect(() => {
    searchApi("steak");
  }, []);

  return [searchApi, resutls, errorMessage];
};
