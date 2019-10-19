import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

function onSearchChange() {
    console.log("Search");

}

const Header = () => (
    <header>
        <input class={style["header-input"]} placeholder="Claptrap" type="text" oninput={onSearchChange} />
    </header>
);

export default Header;
