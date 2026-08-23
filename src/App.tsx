import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('getting-started')

  useEffect(() => {
    document.body.dataset.page = page
  }, [page])

  useEffect(() => {
    const path = window.location.pathname
    if (path.endsWith('home.html') || window.location.hash) {
      history.replaceState(null, '', '/')
    }
  }, [])

  const go = (id: string) => {
    setPage(id)
    const search = document.getElementById('search-toggle') as HTMLInputElement | null
    if (search) search.checked = false
  }

  return (
    <>
      <input className="ctrl" type="checkbox" id="theme-toggle" />
      <input className="ctrl" type="checkbox" id="sidebar-toggle" defaultChecked />
      <input className="ctrl" type="checkbox" id="search-toggle" />
      <input className="ctrl" type="checkbox" id="favorite-toggle" />
      <input className="ctrl" type="checkbox" id="f-x1" />
      <input className="ctrl" type="checkbox" id="f-x2" />
      <input className="ctrl" type="checkbox" id="f-x3" />

      <svg xmlns="http://www.w3.org/2000/svg" className="icon-sprite" aria-hidden="true">
        <symbol id="i-page" viewBox="0 0 16 16">
          <path d="M4 2.5h5.5L12.5 5.5V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5A1 1 0 0 1 4 2.5Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
          <path d="M9.5 2.5v3h3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
          <path d="M5.3 8.8h5.4M5.3 11h3.4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
        </symbol>
        <symbol id="i-folder" viewBox="0 0 16 16">
          <path d="M2.4 6h11.2v6.2a1.2 1.2 0 0 1-1.2 1.2H3.6A1.2 1.2 0 0 1 2.4 12.2V6Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
          <path d="M2.4 6 3.9 3.8h3.4L8.7 6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
        </symbol>
        <symbol id="i-flag" viewBox="0 0 16 16">
          <path d="M4.3 13.4V3.3h7.1L9.6 6.1l1.8 2.8H4.3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round" />
        </symbol>
        <symbol id="i-book" viewBox="0 0 16 16">
          <path d="M3.3 3.1h4c.9 0 1.6.7 1.6 1.6v8.4H4.9A1.6 1.6 0 0 0 3.3 14.7V3.9a.8.8 0 0 1 .8-.8Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
          <path d="M12.7 3.1H8.7c-.9 0-1.6.7-1.6 1.6v8.4h4a1.6 1.6 0 0 1 1.6 1.6V3.9a.8.8 0 0 0-.8-.8Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
        </symbol>
        <symbol id="i-bulb" viewBox="0 0 16 16">
          <path d="M8 2.5a3.4 3.4 0 0 0-2 6.16V10.3h4V8.66A3.4 3.4 0 0 0 8 2.5Z" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M6.4 11.6h3.2M6.8 13.1h2.4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 16 16">
          <rect x="3" y="3" width="10" height="10" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="m5.5 8.1 1.8 1.8 3.5-3.6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>
        <symbol id="i-globe" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M2.8 8h10.4M8 2.8c1.6 1.6 2.4 3.4 2.4 5.2S9.6 11.6 8 13.2C6.4 11.6 5.6 9.8 5.6 8S6.4 4.4 8 2.8Z" fill="none" stroke="currentColor" stroke-width="1.3" />
        </symbol>
        <symbol id="i-stack" viewBox="0 0 16 16">
          <rect x="4" y="5.2" width="8.4" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M5.4 3.8h8.2v8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
          <path d="M6.6 2.5h8.2v8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
        </symbol>
        <symbol id="i-calendar" viewBox="0 0 16 16">
          <rect x="2.7" y="4.3" width="10.6" height="9" rx="1.3" fill="none" stroke="currentColor" stroke-width="1.3" />
          <path d="M5 3v2.4M11 3v2.4M2.7 7.2h10.6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
        </symbol>
        <symbol id="i-star" viewBox="0 0 16 16">
          <path d="m8 2.8 1.5 3.2 3.5.4-2.6 2.4.7 3.4L8 10.6 4.9 12.2l.7-3.4L3 6.4l3.5-.4L8 2.8Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" />
        </symbol>
        <symbol id="i-plus" viewBox="0 0 16 16">
          <path d="M8 3.2v9.6M3.2 8h9.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
        </symbol>
      </svg>




      <div className="app">
        <aside className="sidebar">
          <div className="sidebar-top">
            <a className="workspace">
              <img className="workspace-icon" src="assets/profile.png" alt="Leitan Bogdan" />
              <span className="workspace-name">Leitan Bogdan</span>
              <svg className="chevron" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4.5 6.2 8 9.7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <label className="icon-btn" htmlFor="sidebar-toggle" title="Ascunde bara laterală">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <rect x="2.2" y="2.5" width="11.6" height="11" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.3" />
                <path d="M6.2 2.5v11" stroke="currentColor" stroke-width="1.3" />
              </svg>
            </label>
          </div>

          <div className="sidebar-scroll">
            <nav className="nav-block">
              <label className="nav-item" htmlFor="search-toggle">
                <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.2" fill="none" stroke="currentColor" stroke-width="1.4" /><path d="m10.2 10.2 3.1 3.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
                <span>Search</span>
                <kbd>Ctrl K</kbd>
              </label>
              <div className="nav-item nav-home">
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.6 7.1 8 2.8l5.4 4.3V13a1 1 0 0 1-1 1H3.6a1 1 0 0 1-1-1V7.1Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /></svg>
                <span>Home</span>
              </div>
              <a className="nav-item">
                <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.6" y="3.2" width="10.8" height="9.6" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.3" /><path d="M5 6.4h6M5 9.2h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
                <span>Inbox</span>
              </a>
              <div className="nav-item">
                <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="2.1" fill="none" stroke="currentColor" stroke-width="1.3" /><path d="M8 2.4v1.4M8 12.2v1.4M2.4 8h1.4M12.2 8h1.4M4 4l1 1M11 11l1 1M12 4l-1 1M5 11l-1 1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
                <span>Settings</span>
              </div>
            </nav>

            <nav className="tree">
              <a className="page-item item-started" onClick={() => go('getting-started')}>
                <svg className="ui-icon" aria-hidden="true"><use href="#i-flag" /></svg>
                <span>Getting Started</span>
                <svg className="ui-icon page-star" aria-hidden="true"><use href="#i-star" /></svg>
              </a>

              <div className="folder folder-personal">
                <input className="ctrl n1" type="checkbox" id="n-personal-1" />
                <input className="ctrl n2" type="checkbox" id="n-personal-2" />
                <a className="page-item folder-name" onClick={() => go('folder-personal')}>
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                  <span>Personal</span>
                </a>
                <label className="folder-add add-1" htmlFor="n-personal-1" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <label className="folder-add add-2" htmlFor="n-personal-2" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <details open>
                  <summary className="twist">
                    <svg className="tiny-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 4.4 6 7.2l2.8-2.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
                  </summary>
                  <ul className="tree-list">
                    <li className="note-slot slot-1">
                      <a className="page-item" onClick={() => go('note-personal-1')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                    <li className="note-slot slot-2">
                      <a className="page-item" onClick={() => go('note-personal-2')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                  </ul>
                </details>
              </div>

              <div className="folder folder-projects">
                <input className="ctrl n1" type="checkbox" id="n-projects-1" />
                <input className="ctrl n2" type="checkbox" id="n-projects-2" />
                <a className="page-item folder-name" onClick={() => go('folder-projects')}>
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                  <span>Projects</span>
                </a>
                <label className="folder-add add-1" htmlFor="n-projects-1" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <label className="folder-add add-2" htmlFor="n-projects-2" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <details open>
                  <summary className="twist">
                    <svg className="tiny-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 4.4 6 7.2l2.8-2.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
                  </summary>
                  <ul className="tree-list">
                    <li className="note-slot slot-1">
                      <a className="page-item" onClick={() => go('note-projects-1')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                    <li className="note-slot slot-2">
                      <a className="page-item" onClick={() => go('note-projects-2')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                  </ul>
                </details>
              </div>

              <div className="folder folder-x folder-x1">
                <input className="ctrl n1" type="checkbox" id="n-x1-1" />
                <input className="ctrl n2" type="checkbox" id="n-x1-2" />
                <a className="page-item folder-name" onClick={() => go('folder-x1')}>
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                  <span>Untitled folder</span>
                </a>
                <label className="folder-add add-1" htmlFor="n-x1-1" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <label className="folder-add add-2" htmlFor="n-x1-2" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <details open>
                  <summary className="twist">
                    <svg className="tiny-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 4.4 6 7.2l2.8-2.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
                  </summary>
                  <ul className="tree-list">
                    <li className="note-slot slot-1">
                      <a className="page-item" onClick={() => go('note-x1-1')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                    <li className="note-slot slot-2">
                      <a className="page-item" onClick={() => go('note-x1-2')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                  </ul>
                </details>
              </div>

              <div className="folder folder-x folder-x2">
                <input className="ctrl n1" type="checkbox" id="n-x2-1" />
                <input className="ctrl n2" type="checkbox" id="n-x2-2" />
                <a className="page-item folder-name" onClick={() => go('folder-x2')}>
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                  <span>Untitled folder</span>
                </a>
                <label className="folder-add add-1" htmlFor="n-x2-1" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <label className="folder-add add-2" htmlFor="n-x2-2" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <details open>
                  <summary className="twist">
                    <svg className="tiny-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 4.4 6 7.2l2.8-2.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
                  </summary>
                  <ul className="tree-list">
                    <li className="note-slot slot-1">
                      <a className="page-item" onClick={() => go('note-x2-1')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                    <li className="note-slot slot-2">
                      <a className="page-item" onClick={() => go('note-x2-2')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                  </ul>
                </details>
              </div>

              <div className="folder folder-x folder-x3">
                <input className="ctrl n1" type="checkbox" id="n-x3-1" />
                <input className="ctrl n2" type="checkbox" id="n-x3-2" />
                <a className="page-item folder-name" onClick={() => go('folder-x3')}>
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                  <span>Untitled folder</span>
                </a>
                <label className="folder-add add-1" htmlFor="n-x3-1" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <label className="folder-add add-2" htmlFor="n-x3-2" title="Add a note">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                </label>
                <details open>
                  <summary className="twist">
                    <svg className="tiny-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 4.4 6 7.2l2.8-2.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
                  </summary>
                  <ul className="tree-list">
                    <li className="note-slot slot-1">
                      <a className="page-item" onClick={() => go('note-x3-1')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                    <li className="note-slot slot-2">
                      <a className="page-item" onClick={() => go('note-x3-2')}>
                        <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                        <span>Untitled</span>
                      </a>
                    </li>
                  </ul>
                </details>
              </div>

              <a className="page-item item-blank" onClick={() => go('untitled')}>
                <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                <span>Untitled</span>
              </a>
              <label className="nav-item new-page add-folder add-folder-1" htmlFor="f-x1">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                <span>New folder</span>
              </label>
              <label className="nav-item new-page add-folder add-folder-2" htmlFor="f-x2">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                <span>New folder</span>
              </label>
              <label className="nav-item new-page add-folder add-folder-3" htmlFor="f-x3">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                <span>New folder</span>
              </label>
              <a className="nav-item new-page" onClick={() => go('untitled')}>
                <svg className="ui-icon" aria-hidden="true"><use href="#i-plus" /></svg>
                <span>New page</span>
              </a>
            </nav>
          </div>

          <div className="sidebar-bottom">
            <label className="nav-item" htmlFor="theme-toggle">
              <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3.1" fill="none" stroke="currentColor" stroke-width="1.3" /><path d="M8 2.2v1.2M8 12.6v1.2M2.2 8h1.2M12.6 8h1.2M4 4l.9.9M11.1 11.1l.9.9M12 4l-.9.9M4.9 11.1l-.9.9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /></svg>
              <span className="theme-on">Light mode</span>
              <span className="theme-off">Dark mode</span>
            </label>
            <div className="nav-item">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 12.4 6.2 4.8h3.6L13 12.4M4.4 9.4h7.2" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" /></svg>
              <span>Templates</span>
            </div>
            <div className="nav-item">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.2 5.2h9.6v7.2a1.2 1.2 0 0 1-1.2 1.2H4.4a1.2 1.2 0 0 1-1.2-1.2V5.2Z" fill="none" stroke="currentColor" stroke-width="1.3" /><path d="M5.6 5.2V4a2.4 2.4 0 0 1 4.8 0v1.2" stroke="currentColor" stroke-width="1.3" /></svg>
              <span>Trash</span>
            </div>
          </div>
        </aside>

        <main className="main">
          <header className="topbar">
            <div className="topbar-left">
              <label className="icon-btn open-sidebar" htmlFor="sidebar-toggle" title="Arată bara laterală">
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2.2" y="2.5" width="11.6" height="11" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.3" />
                  <path d="M6.2 2.5v11" stroke="currentColor" stroke-width="1.3" />
                </svg>
              </label>
              <div className="breadcrumb crumb-started">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-flag" /></svg>
                <span className="crumb-title">Getting Started</span>
              </div>
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
              <div className="breadcrumb crumb-path crumb-folder-x">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
                <span className="crumb-title">Untitled folder</span>
              </div>
              <div className="breadcrumb crumb-path crumb-note">
                <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
                <span className="crumb-title">Untitled</span>
              </div>
            </div>
            <div className="topbar-right">
              <span className="text-btn">Share</span>
              <span className="icon-btn" title="Comments">
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.2h10a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1H8.2L5 13.6v-2.2H3a1 1 0 0 1-1-1V5.2a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /></svg>
              </span>
              <label className="icon-btn favorite-btn" htmlFor="favorite-toggle" title="Favorite">
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m8 2.8 1.5 3.2 3.5.4-2.6 2.4.7 3.4L8 10.6 4.9 12.2l.7-3.4L3 6.4l3.5-.4L8 2.8Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /></svg>
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

          <article id="getting-started" className="sheet view-started">
            <div className="cover cover-1"></div>
            <div className="page">
              <div className="page-icon"><svg className="page-icon-svg" aria-hidden="true"><use href="#i-flag" /></svg></div>
              <h1 className="page-title">Getting Started</h1>
              <div className="editor">
                <p>Bine ai venit. Aceasta este o aplicație statică de notițe, făcută doar cu HTML și CSS, cu aspect de Notion.</p>
                <h2>Cum o folosești</h2>
                <ul>
                  <li>Paginile de start sunt <b>Getting Started</b> și <b>Untitled</b>.</li>
                  <li>Adaugă un folder cu <b>New folder</b>.</li>
                  <li>Pe hover, pe un folder apare <b>+</b> ca să pui o notă direct în el.</li>
                  <li>Caută din <b>Search</b> sau comută <b>Dark mode</b>.</li>
                </ul>
                <div className="callout">
                  <svg className="ui-icon" aria-hidden="true"><use href="#i-bulb" /></svg>
                  <div>New folder adaugă un folder. Hover pe un folder și apasă + ca să pui o notă.</div>
                </div>
                <blockquote>Write, plan, organize. That’s Notion.</blockquote>
                <hr />
                <p>Începe de pe <span className="inline-link">Home</span>.</p>
              </div>
            </div>
          </article>

          <article id="folder-personal" className="sheet">
            <div className="page">
              <div className="page-icon"><svg className="page-icon-svg" aria-hidden="true"><use href="#i-folder" /></svg></div>
              <h1 className="page-title">Personal</h1>
              <div className="editor">
                <p className="muted folder-empty">Folder gol. Hover pe folder în sidebar și apasă +.</p>
                <div className="subpages">
                  <a className="subpage slot-1" onClick={() => go('note-personal-1')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                  <a className="subpage slot-2" onClick={() => go('note-personal-2')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                </div>
              </div>
            </div>
          </article>

          <article id="folder-projects" className="sheet">
            <div className="page">
              <div className="page-icon"><svg className="page-icon-svg" aria-hidden="true"><use href="#i-folder" /></svg></div>
              <h1 className="page-title">Projects</h1>
              <div className="editor">
                <p className="muted folder-empty">Folder gol. Hover pe folder în sidebar și apasă +.</p>
                <div className="subpages">
                  <a className="subpage slot-1" onClick={() => go('note-projects-1')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                  <a className="subpage slot-2" onClick={() => go('note-projects-2')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                </div>
              </div>
            </div>
          </article>

          <article id="folder-x1" className="sheet">
            <div className="page">
              <div className="page-icon"><svg className="page-icon-svg" aria-hidden="true"><use href="#i-folder" /></svg></div>
              <h1 className="page-title">Untitled folder</h1>
              <div className="editor">
                <p className="muted folder-empty">Folder gol. Hover pe folder în sidebar și apasă +.</p>
                <div className="subpages">
                  <a className="subpage slot-1" onClick={() => go('note-x1-1')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                  <a className="subpage slot-2" onClick={() => go('note-x1-2')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                </div>
              </div>
            </div>
          </article>

          <article id="folder-x2" className="sheet">
            <div className="page">
              <div className="page-icon"><svg className="page-icon-svg" aria-hidden="true"><use href="#i-folder" /></svg></div>
              <h1 className="page-title">Untitled folder</h1>
              <div className="editor">
                <p className="muted folder-empty">Folder gol. Hover pe folder în sidebar și apasă +.</p>
                <div className="subpages">
                  <a className="subpage slot-1" onClick={() => go('note-x2-1')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                  <a className="subpage slot-2" onClick={() => go('note-x2-2')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                </div>
              </div>
            </div>
          </article>

          <article id="folder-x3" className="sheet">
            <div className="page">
              <div className="page-icon"><svg className="page-icon-svg" aria-hidden="true"><use href="#i-folder" /></svg></div>
              <h1 className="page-title">Untitled folder</h1>
              <div className="editor">
                <p className="muted folder-empty">Folder gol. Hover pe folder în sidebar și apasă +.</p>
                <div className="subpages">
                  <a className="subpage slot-1" onClick={() => go('note-x3-1')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                  <a className="subpage slot-2" onClick={() => go('note-x3-2')}><svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg><span>Untitled</span></a>
                </div>
              </div>
            </div>
          </article>

          <article id="note-personal-1" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-personal-2" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-projects-1" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-projects-2" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-x1-1" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-x1-2" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-x2-1" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-x2-2" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-x3-1" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>
          <article id="note-x3-2" className="sheet note-sheet"><div className="page"><h1 className="page-title" contentEditable="true" data-placeholder="Untitled"></h1><div className="editor"><p data-placeholder="Start writing..."></p></div></div></article>

          <article id="untitled" className="sheet view-blank">
            <div className="page">
              <div className="page-controls">
                <span className="ghost-btn">
                  <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" stroke-width="1.3" /><path d="M5.4 9.1c.7.9 1.6 1.3 2.6 1.3s1.9-.4 2.6-1.3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle cx="6.2" cy="6.6" r=".7" /><circle cx="9.8" cy="6.6" r=".7" /></svg>
                  Add icon
                </span>
                <span className="ghost-btn">
                  <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.4" y="3.4" width="11.2" height="9.2" rx="1.3" fill="none" stroke="currentColor" stroke-width="1.3" /><path d="m2.8 10.6 3-3 2.4 2.4 2-2 3.2 3.2" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /></svg>
                  Add cover
                </span>
              </div>
              <h1 className="page-title" data-placeholder="Untitled"></h1>
              <div className="editor">
                <p data-placeholder="Start writing..."></p>
              </div>
            </div>
          </article>
        </main>
      </div>

      <div className="overlay">
        <label className="overlay-bg" htmlFor="search-toggle"></label>
        <div className="search-modal">
          <div className="search-row">
            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.2" fill="none" stroke="currentColor" stroke-width="1.4" /><path d="m10.2 10.2 3.1 3.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
            <span className="search-static">Search pages</span>
            <label className="search-close" htmlFor="search-toggle">Esc</label>
          </div>
          <div className="search-results">
            <p className="search-label">Pages</p>
            <a className="search-item" onClick={() => go('getting-started')}>
              <svg className="ui-icon" aria-hidden="true"><use href="#i-flag" /></svg>
              <span>Getting Started</span>
            </a>
            <a className="search-item" onClick={() => go('untitled')}>
              <svg className="ui-icon" aria-hidden="true"><use href="#i-page" /></svg>
              <span>Untitled</span>
            </a>
            <a className="search-item" onClick={() => go('folder-personal')}>
              <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
              <span>Personal</span>
            </a>
            <a className="search-item" onClick={() => go('folder-projects')}>
              <svg className="ui-icon" aria-hidden="true"><use href="#i-folder" /></svg>
              <span>Projects</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
