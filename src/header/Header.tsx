import './Header.css'

function Header() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          <label className="icon-btn open-sidebar" htmlFor="sidebar-toggle" title="Arată bara laterală">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <rect x="2.2" y="2.5" width="11.6" height="11" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <path d="M6.2 2.5v11" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </label>
          <div className="breadcrumb crumb-blank">
            <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
            <span className="crumb-title">Untitled</span>
          </div>
          <div className="breadcrumb crumb-path crumb-folder-personal">
            <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
            <span className="crumb-title">Personal</span>
          </div>
          <div className="breadcrumb crumb-path crumb-folder-projects">
            <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
            <span className="crumb-title">Projects</span>
          </div>
          <div className="breadcrumb crumb-path crumb-note">
            <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
            <span className="crumb-title">Untitled</span>
          </div>
        </div>
        <div className="topbar-right">
          <span className="text-btn">Share</span>
          <span className="icon-btn" title="Comments">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.2h10a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1H8.2L5 13.6v-2.2H3a1 1 0 0 1-1-1V5.2a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
          </span>
          <label className="icon-btn favorite-btn" htmlFor="favorite-toggle" title="Favorite">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m8 2.8 1.5 3.2 3.5.4-2.6 2.4.7 3.4L8 10.6 4.9 12.2l.7-3.4L3 6.4l3.5-.4L8 2.8Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
          </label>
          <div className="more-wrap">
            <span className="icon-btn" tabIndex={0} title="More">
              <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="3.6" cy="8" r="1" /><circle cx="8" cy="8" r="1" /><circle cx="12.4" cy="8" r="1" /></svg>
            </span>
            <div className="menu">
              <span>Open in new window</span>
              <span>Copy link</span>
              <span className="danger">Move to Trash</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;