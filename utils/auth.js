import axios from "axios";
import { API_URL } from "./urls";

export async function signIn({ email, password }) {
  const res = await axios.post(`${API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });

  return res.data;
}
