import style from "./style";

function displaySize(size) {
  return `${Math.round((size / 1000000) * 10) / 10}Mb`;
}

const FileItem = props => (
  <li class={style["list-item"]}>
    <div class={style["card"]}>
      <div class={style["card-icon"]}>
        <img
          class={style["file-icon"]}
          src="assets/icons/word.png"
          title={props.file.type}
          alt="File icon"
        />
      </div>
      <div class={style["card-text"]}>
        <div class={style["file-title-section"]}>
          <div class={style["text-ellipsis"]}>{props.file.name}</div>
          <div class={style["file-action-section"]}>
            <button>
              <a
                href={props.file.downloadURL}
                download={props.file.name}
                target="_blank"
              >
                Download
              </a>
            </button>
            <button onClick={props.onDelete}>Delete</button>
          </div>
        </div>
        <div class={style["file-info-section"]}>
          <div>{displaySize(props.file.size)}</div>
          <div>Created {props.file.date}</div>
        </div>
      </div>
    </div>
  </li>
);

export default FileItem;
