import PropTypes  from "prop-types";

const Filter = ({filter, handleChange}) => {
    return (
        <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input value={filter} required name="filter" onChange={handleChange} />
        </div>
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
  }