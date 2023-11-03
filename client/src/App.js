import { useState } from "react";
import FolderTree from "./component/FolderTree";
import explorer from './data/ExplorerData';
import './style.css';
import useTraverseTree from "./hook/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree()

  const handleInsertFolder = (folderId, item, isFolder)=>{
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  }

  return (
    <div>
      <h1>VS Code Clone</h1>
      <h2>Explorer</h2>
      <FolderTree handleInsertFolder={handleInsertFolder} explorerData={explorerData}/>
    </div>
  );
}

export default App;
