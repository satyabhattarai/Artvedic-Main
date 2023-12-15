import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDatafromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();
  return data;
};
// export const postDatatoApi = async (endpoint, formData) => {
//   const options = {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer " + STRAPI_API_TOKEN,
//     },
//     body: formData,
//   };
//   const response = await fetch(`${API_URL}${endpoint}`, options);
//   const data = await response.json();
//   return data;
// };
export const postDatatoApi = async (endpoint, formData) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: formData,
  };
  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();
  return data;
};

export const uploadDatatoApi = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
    body: formData,
  };
  const response = await fetch(`${API_URL}/api/upload`, options);
  const data = await response.json();
  return data;
};
