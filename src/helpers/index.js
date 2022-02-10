import axios from "axios";
import { toast, Slide } from "react-toastify";

export const api = axios.create({
  timeout: 325000,
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
  baseURL: "https://aia-assessment-server.herokuapp.com",
});

export const notification = (type, text, delay = 2000) => {
  switch (type) {
    case "success":
      return toast.success(text, {
        containerId: "A",
        transition: Slide,
        autoClose: delay,
      });
    case "warning":
      return toast.warning(text, {
        containerId: "A",
        transition: Slide,
        autoClose: delay,
      });
    case "error":
      return toast.error(text, {
        containerId: "A",
        transition: Slide,
        autoClose: delay,
      });
  }
};
