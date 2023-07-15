import { toast } from "react-hot-toast";

import {defaultDriverAvatar,defaultCabImage} from "./constants";

export const handleCopyToClipboard = (text) => {
  const textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
  toast.success("Copied to clipboard!");
};

export const defaultAvatar=(image)=>image?image:defaultDriverAvatar;

export const defaultCab=(image)=>image?image:defaultCabImage;
