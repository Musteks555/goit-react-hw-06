import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
    return (
        <>
            <label className={css.contactsLabel}>
                <span>Find contacts by name</span>
                <input type="text" value={value} onChange={(event) => onFilter(event.target.value)} />
            </label>
        </>
    );
};

export default SearchBox;
