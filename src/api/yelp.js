import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer RjU1nt9_SAH_Jq0878M4DGnA8RZdRFOKzbdqgNflgJpjCr4nkt0B6q9GaWpaNSAsdzLBuPtivgyqZkNslsaYrgmLAMfNnwWEJ_JBDZZMXwaoANaNmY5IRUtHcWziXnYx",
  },
});