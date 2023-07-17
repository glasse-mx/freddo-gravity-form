import axios from "axios";
import { useState, useEffect } from "react";

export const getGravityForm = (id,loading, setLoading) => {
  const url = import.meta.env.VITE_PUBLIC_WORDPRESS_URL;
  const username = import.meta.env.VITE_PRIVATE_USER_APP_USER
  const password = import.meta.env.VITE_PRIVATE_USER_APP_KEY
  const basicAuth = 'Basic ' + btoa(username + ':' + password);
  const [gravityForm, setGravityForm] = useState({});

  const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url + id,
      headers: {
        'Authorization': basicAuth,
        'Content-Type': 'application/json',

      },
      withCredentials: true
    }

  useEffect( () => {
    axios.request(config)
      .then( response => {
        setGravityForm(response.data)
        setLoading(false)
      })
      .catch( error => console.error )
  }, [])
 


  
  return gravityForm;
};
