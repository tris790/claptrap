import style from "./style";

const fileDropHandler = ev => {
  ev.preventDefault();
  console.log("File dropped");
};
const fileDragOverHandler = ev => {
  ev.preventDefault();
};

const FileUpload = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const display = isMobile ? (
    <input type="file" onChange={fileDropHandler} />
  ) : (
    <div
      onDrop={fileDropHandler}
      onDragOver={fileDragOverHandler}
      class={style["upload-container"]}
    ></div>
  );

  return display;
};

export default FileUpload;
