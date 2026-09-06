import Header from "../header/Header";
import SearchBar from "../searchBar/SearchBar";
import Sidebar from "../sidebar/Sidebar";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
// Default styles for the mantine editor
import "@blocknote/mantine/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";
import "./Workspace.css"

function Workspace() {
  const editor = useCreateBlockNote();
  return (
    <>
      <div className="app">
        <Sidebar />

        {/* ========== Main: topbar + page content ========== */}
        <main className="main">
          {/* --- Topbar --- */}
          <Header />

          {/* --- Page: Untitled (default) --- */}
          <article id="untitled" className="sheet view-blank">
            <div className="page">
              <div className="page-controls">
                <span className="ghost-btn">
                  <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="M5.4 9.1c.7.9 1.6 1.3 2.6 1.3s1.9-.4 2.6-1.3" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><circle cx="6.2" cy="6.6" r=".7" /><circle cx="9.8" cy="6.6" r=".7" /></svg>
                  Add icon
                </span>
                <span className="ghost-btn">
                  <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.4" y="3.4" width="11.2" height="9.2" rx="1.3" fill="none" stroke="currentColor" strokeWidth="1.3" /><path d="m2.8 10.6 3-3 2.4 2.4 2-2 3.2 3.2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
                  Add cover
                </span>
              </div>
              <h1 className="page-title" data-placeholder="Untitled"></h1>
              <div className="editor">
                <BlockNoteView editor={editor} />
              </div>
            </div>
          </article>
        </main>
      </div>

      <SearchBar />
    </>
  );
}

export default Workspace