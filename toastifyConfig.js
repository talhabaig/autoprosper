// toastifyConfig.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastifyConfig = {
  position: "top-right",
  autoClose: 5000, // Time in milliseconds before the toast automatically closes
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showToast = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message, toastifyConfig);
      break;
    case "error":
      toast.error(message, toastifyConfig);
      break;
    case "warning":
      toast.warning(message, toastifyConfig);
      break;
    default:
      toast.info(message, toastifyConfig);
  }
};
