import axios from "axios";
// const { UNSPLASH_API_KEY } = process.env;
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c1eab98eb55a7d338cc759f8ecd048f78ae4ac321f553d5d68d902a360e998f6"
  }
});
