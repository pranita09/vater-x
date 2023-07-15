import { toast } from "react-hot-toast";

export const handleCopyToClipboard = (text) => {
  const textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
  toast.success("Copied to clipboard!");
};
