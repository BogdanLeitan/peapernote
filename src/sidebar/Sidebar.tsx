import profil from '../assets/profil.png'

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        {/* --- SidebarHeader: workspace switcher + collapse --- */}
        <div className="sidebar-top">
          <div className="workspace-row">
            <div className="workspace-wrap">
              <a className="workspace" tabIndex={0}>
                <img className="workspace-icon" src={profil} alt="Leitan Bogdan" />
                <span className="workspace-name">Leitan Bogdan</span>
                <svg className="chevron" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M4.5 6.2 8 9.7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="menu workspace-menu">
                <span>
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-gear" /></svg>
                  Settings
                </span>
              </div>
            </div>
            <label className="icon-btn" htmlFor="sidebar-toggle" title="Ascunde bara laterală">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <rect x="2.2" y="2.5" width="11.6" height="11" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <path d="M6.2 2.5v11" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </label>
          </div>

          {/* --- SidebarNavTabs: Home / Chat / Settings / Inbox / Search --- */}
          <nav className="nav-tabs" aria-label="Sidebar navigation">
            <label className="nav-tab nav-tab-home" htmlFor="nav-home" title="Home">
              <svg className="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-home" /></svg>
              <span>Home</span>
            </label>
            <label className="nav-tab nav-tab-chat" htmlFor="nav-chat" title="Chat">
              <svg className="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-chat" /></svg>
              <span>Chat</span>
            </label>
            <label className="nav-tab nav-tab-settings" htmlFor="nav-settings" title="Settings">
              <svg className="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-gear" /></svg>
              <span>Settings</span>
            </label>
            <label className="nav-tab nav-tab-inbox" htmlFor="nav-inbox" title="Inbox">
              <svg className="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-inbox" /></svg>
              <span>Inbox</span>
            </label>
            <label className="nav-tab nav-tab-search" htmlFor="search-toggle" title="Search">
              <svg className="nav-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-search" /></svg>
            </label>
          </nav>
        </div>

        <div className="sidebar-scroll">
          {/* --- PageTree: folders + pages (Home tab) --- */}
          <nav className="tree">
            <p className="tree-subtitle">Folders</p>

            {/* Folder: Personal (static — + vizual, fără creare fișiere) */}
            <div className="folder folder-personal">
              <label className="page-item folder-name" htmlFor="page-folder-personal">
                <svg className="ui-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-folder" /></svg>
                <span>Personal</span>
              </label>

              <span className="folder-add add-1" title="Add a note" aria-hidden="true">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
              </span>
              <details open>
                <summary className="twist">
                  <svg className="tiny-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 4.4 6 7.2l2.8-2.8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                </summary>
              </details>
            </div>

            {/* Folder: Projects */}
            <div className="folder folder-projects">
              <input className="ctrl n1" type="checkbox" id="n-projects-1" />
              <input className="ctrl n2" type="checkbox" id="n-projects-2" />
              <label className="page-item folder-name" htmlFor="page-folder-projects">
                <svg className="ui-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-folder" /></svg>
                <span>Projects</span>
              </label>
              <label className="folder-add add-1" htmlFor="n-projects-1" title="Add a note">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
              </label>
              <label className="folder-add add-2" htmlFor="n-projects-2" title="Add a note">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
              </label>
              <details open>
                <summary className="twist">
                  <svg className="tiny-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 4.4 6 7.2l2.8-2.8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                </summary>
              </details>
            </div>

            <label className="page-item item-blank" htmlFor="page-untitled">
              <svg className="ui-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-page" /></svg>
              <span>Untitled</span>
            </label>

            <div className="nav-item new-page add-folder">
              <svg className="ui-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-folder" /></svg>
              <span>New folder</span>
            </div>

            <label className="nav-item new-page" htmlFor="page-untitled">
              <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
              <span>New page</span>
            </label>
          </nav>

          {/* --- SidePanelChat --- */}
          <div className="side-panel panel-chat">
            <div className="nav-item new-page">
              <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
              <span>New chat</span>
            </div>
            <p className="side-panel-empty">No chats yet</p>
          </div>

          {/* --- SidePanelSettings --- */}
          <div className="side-panel panel-settings">
            <div className="nav-item">
              <svg className="ui-icon" aria-hidden="true"><use href="#i-gear" /></svg>
              <span>Preferences</span>
            </div>
            <p className="side-panel-empty">Settings coming soon</p>
          </div>

          {/* --- SidePanelInbox --- */}
          <div className="side-panel panel-inbox">
            <p className="side-panel-empty">You're all caught up</p>
          </div>
        </div>

        {/* --- SidebarFooter: theme + trash --- */}
        <div className="sidebar-bottom">
          <label className="nav-item" htmlFor="theme-toggle">
            <svg className="ui-icon theme-icon-moon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-moon" /></svg>
            <svg className="ui-icon theme-icon-sun" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-sun" /></svg>
            <span className="theme-on">Light mode</span>
            <span className="theme-off">Dark mode</span>
          </label>

          <div className="nav-item">
            <svg className="ui-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-archive" /></svg>
            <span>Archive</span>
          </div>

          <div className="nav-item">
            <svg className="ui-icon" viewBox="0 0 20 20" aria-hidden="true"><use href="#i-trash" /></svg>
            <span>Trash</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar