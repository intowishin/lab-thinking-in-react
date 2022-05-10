
const SearchBar = ({searchHandler}) => {
  return (
    <div>
        <input onChange={searchHandler} type="text" placeholder="Search..." />
    </div>
  )
}

export default SearchBar