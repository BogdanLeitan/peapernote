import profil from '../assets/profil.png'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
    {/* ========== IconSprite: SVG symbols shared across the UI ========== */}
      <svg xmlns="http://www.w3.org/2000/svg" className="icon-sprite" aria-hidden="true">
        <symbol id="i-page" viewBox="0 0 20 20">
          <g transform="translate(2 2)">
            <path fill="currentColor" d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
          </g>
        </symbol>
        <symbol id="i-folder" viewBox="0 0 20 20">
          <path fill="currentColor" d="M2.625 5.75A2.125 2.125 0 0 1 4.75 3.625h2.672c.564 0 1.104.224 1.503.623l.726.726c.099.099.234.25.353.25h5.349A2.125 2.125 0 0 1 17.375 7.2v7.05A2.125 2.125 0 0 1 15.25 16.375H4.75A2.125 2.125 0 0 1 2.625 14.25V5.75zm1.25 0v8.5c0 .483.392.875.875.875h10.5a.875.875 0 0 0 .875-.875V7.2a.875.875 0 0 0-.875-.875h-5.35a1.75 1.75 0 0 1-1.237-.513l-.726-.726a.5.5 0 0 0-.353-.147H4.75a.875.875 0 0 0-.875.875z" />
        </symbol>
        <symbol id="i-plus" viewBox="0 0 20 20">
          <path fill="currentColor" d="M10 3.625a.625.625 0 0 1 .625.625v5.125h5.125a.625.625 0 1 1 0 1.25h-5.125v5.125a.625.625 0 1 1-1.25 0v-5.125H4.375a.625.625 0 1 1 0-1.25h5.125V4.25A.625.625 0 0 1 10 3.625z" />
        </symbol>
        <symbol id="i-trash" viewBox="0 0 20 20">
          <path fill="currentColor" d="M8.806 8.505a.55.55 0 0 0-1.1 0v5.979a.55.55 0 1 0 1.1 0zm3.488 0a.55.55 0 0 0-1.1 0v5.979a.55.55 0 1 0 1.1 0z" />
          <path fill="currentColor" d="M6.386 3.925v1.464H3.523a.625.625 0 1 0 0 1.25h.897l.393 8.646A2.425 2.425 0 0 0 7.236 17.6h5.528a2.425 2.425 0 0 0 2.422-2.315l.393-8.646h.898a.625.625 0 1 0 0-1.25h-2.863V3.925c0-.842-.683-1.525-1.525-1.525H7.91c-.842 0-1.524.683-1.524 1.525M7.91 3.65h4.18c.15 0 .274.123.274.275v1.464H7.636V3.925c0-.152.123-.275.274-.275m-.9 2.99h7.318l-.39 8.588a1.175 1.175 0 0 1-1.174 1.122H7.236a1.175 1.175 0 0 1-1.174-1.122l-.39-8.589z" />
        </symbol>
        <symbol id="i-archive" viewBox="0 0 20 20">
          <g transform="translate(2 2)">
            <path fill="currentColor" d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
          </g>
        </symbol>
        <symbol id="i-sun" viewBox="0 0 20 20">
          <path fill="currentColor" d="M10 6.875a3.125 3.125 0 1 0 0 6.25 3.125 3.125 0 0 0 0-6.25m-1.875 3.125a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0" />
          <path fill="currentColor" d="M10 2.625a.625.625 0 0 1 .625.625v1.5a.625.625 0 1 1-1.25 0v-1.5A.625.625 0 0 1 10 2.625m0 12a.625.625 0 0 1 .625.625v1.5a.625.625 0 1 1-1.25 0v-1.5A.625.625 0 0 1 10 14.625m7.375-4.625a.625.625 0 0 1-.625.625h-1.5a.625.625 0 1 1 0-1.25h1.5a.625.625 0 0 1 .625.625m-12 0a.625.625 0 0 1-.625.625h-1.5a.625.625 0 1 1 0-1.25h1.5a.625.625 0 0 1 .625.625m9.82-4.195a.625.625 0 0 1 0 .884l-1.06 1.061a.625.625 0 1 1-.884-.884l1.06-1.061a.625.625 0 0 1 .884 0m-8.485 8.485a.625.625 0 0 1 0 .884l-1.06 1.06a.625.625 0 1 1-.885-.883l1.061-1.061a.625.625 0 0 1 .884 0m8.485 0a.625.625 0 0 1-.884 0l-1.061-1.06a.625.625 0 1 1 .884-.885l1.061 1.061a.625.625 0 0 1 0 .884m-8.485-8.485a.625.625 0 0 1-.884 0L4.25 4.744a.625.625 0 0 1 .884-.884l1.061 1.06a.625.625 0 0 1 0 .885" />
        </symbol>
        <symbol id="i-moon" viewBox="0 0 20 20">
          <path fill="currentColor" d="M9.012 3.2a.625.625 0 0 1 .72.837 6.125 6.125 0 0 0 6.231 6.231.625.625 0 0 1 .837.72 7.375 7.375 0 1 1-7.788-7.788m.513 1.42a6.125 6.125 0 1 0 5.855 5.855 7.38 7.38 0 0 1-5.855-5.855" />
        </symbol>
        <symbol id="i-home" viewBox="0 0 20 20">
          <path fill="currentColor" d="M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 20 20">
          <path fill="currentColor" d="M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946" />
        </symbol>
        <symbol id="i-inbox" viewBox="0 0 20 20">
          <path fill="currentColor" d="M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z" />
        </symbol>
        <symbol id="i-search" viewBox="0 0 20 20">
          <path fill="currentColor" d="M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0" />
        </symbol>
        <symbol id="i-gear" viewBox="0 0 20 20">
          <g transform="translate(2 2)">
            <path fill="currentColor" d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path fill="currentColor" d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
          </g>
        </symbol>
      </svg>
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