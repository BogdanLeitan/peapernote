import './SearchBar.css'

function SearchBar() {
  return (
    <>
      <div className="overlay">
        <label className="overlay-bg" htmlFor="search-toggle"></label>
        <div className="search-modal">
          <div className="search-row">
            <svg className="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-search" /></svg>
            <span className="search-static">Search pages</span>
            <label className="search-close" htmlFor="search-toggle">Esc</label>
          </div>
          <div className="search-results">
            <p className="search-label">Pages</p>
            <label className="search-item" htmlFor="page-untitled">
              <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
              <span>Untitled</span>
            </label>
            <label className="search-item" htmlFor="page-folder-personal">
              <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
              <span>Personal</span>
            </label>
            <label className="search-item" htmlFor="page-folder-projects">
              <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
              <span>Projects</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;