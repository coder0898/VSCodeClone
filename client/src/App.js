import { useState } from "react";
import FolderTree from "./component/FolderTree";
import explorer from './data/ExplorerData';
import './style.css';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      <h1>VS Code Clone</h1>
      <h2>Explorer</h2>
      <FolderTree explorerData={explorerData}/>
    </div>
  );
}

export default App;
