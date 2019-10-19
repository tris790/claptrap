import { h } from "preact";
import style from "./style";
import FileContainer from "../../components/file-container";
import FileUpload from "../../components/file-upload";
import Login from "../../components/login";

const Home = () => (
  <div class={style.home}>
    <Login />
    <FileContainer />
    <FileUpload />
  </div>
);

export default Home;
