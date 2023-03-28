import './Filter.css'

export default function Filter(props) {
  const { setFilters, filters } = props.filters

  return(
    <div className="filter-container">
      <div className="filter-bar">
        <div className="filter-items">
        {
          Array.from(filters).map((filter, index) => {
            return (
              <div className="filter-item-container" key={index}>
                <span className="filter-item">{filter}</span>
                <img
                  className="filter-remove-item"
                  src="./images/icon-remove.svg"
                  height="20" width="20"
                  onClick={() => {
                    filters.delete(filter)
                    setFilters(new Set([...filters]))
                  }}/>
              </div>
            )
          })
        }
        </div>
        <button onClick={() => setFilters(new Set([]))}>Clear</button>
      </div>
    </div>
  )
}