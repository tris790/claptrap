import { h } from "preact";
import style from "./style";
import FileItem from "../file-item";
import {
  shareFile,
  deleteFile,
  registerOnFileReceived
} from "../../firebase.js";
import { useContext, useState, useCallback } from "preact/hooks";
import { AuthContext } from "../auth";

function onFileReceived(files) {}

const FileContainer = () => {
  const { auth } = useContext(AuthContext);
  const [files, setFiles] = useState([]);
  if (auth) {
    registerOnFileReceived(auth.user, files => setFiles(files));
  }

  return (
    <div class={style["container"]}>
      <ul class={style["list"]}>
        {files.map(file => (
          <FileItem file={file} onDelete={() => deleteFile(auth.user, file)} />
        ))}
      </ul>
    </div>
  );
};

export default FileContainer;
