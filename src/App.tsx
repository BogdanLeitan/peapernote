import Workspace from './workspace/Workspace.tsx'
import './App.css'

function App() {
  return (
    <>
      {/* ========== GlobalControls: checkbox/radio state (theme, sidebar, search, pages, nav) ========== */}
      <input className="ctrl" type="checkbox" id="theme-toggle" />
      <input className="ctrl" type="checkbox" id="sidebar-toggle" defaultChecked />
      <input className="ctrl" type="checkbox" id="search-toggle" />
      <input className="ctrl" type="checkbox" id="favorite-toggle" />

      <input className="ctrl" type="radio" name="nav" id="nav-home" defaultChecked />
      <input className="ctrl" type="radio" name="nav" id="nav-chat" />
      <input className="ctrl" type="radio" name="nav" id="nav-settings" />
      <input className="ctrl" type="radio" name="nav" id="nav-inbox" />

      <input className="ctrl" type="radio" name="page" id="page-untitled" defaultChecked />
      <input className="ctrl" type="radio" name="page" id="page-folder-personal" />
      <input className="ctrl" type="radio" name="page" id="page-folder-projects" />
      <input className="ctrl" type="radio" name="page" id="page-note-projects-1" />
      <input className="ctrl" type="radio" name="page" id="page-note-projects-2" />
      <Workspace />
    </>
  )
}

export default App