import axios from "axios";

export const submitGravityForm = (body, formId, loading, setLoading, submissions, sendSubmission) => {

  const url = import.meta.env.VITE_PUBLIC_WORDPRESS_URL;
  const username = import.meta.env.VITE_PRIVATE_USER_APP_USER
  const password = import.meta.env.VITE_PRIVATE_USER_APP_KEY
  const basicAuth = 'Basic ' + btoa(username + ':' + password);

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${url}${formId}/submissions`,
    headers: {
      'Authorization': basicAuth,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: body,
  };

  axios
    .request(config)
    .then((response) => {
      response.data.confirmation_type 
        && sendSubmission(true) 
      response.data
      setLoading(false)
    } )
    .catch((error) => console.log(error));

}

