import React, { useState } from 'react';

const FolderTree = ({ handleInsertFolder, explorerData}) => {

   const [expand, setExpand] = useState(false);
   const [showInput, setShowInput] = useState({
    visible:false,
    isFolder:null,
   })

   const handleAddFolder = (e,isFolder)=>{
    e.stopPropagation();

    setExpand(true);

    setShowInput({
        visible:true,
        isFolder
    })
   }

   const onAddFolder = (e)=>{
      if(e.keyCode === 13 && e.target.value){
         //add logic
         handleInsertFolder(explorerData.id, e.target.value, showInput.isFolder);
         setShowInput({...showInput, visible:false})
      }
   }

   if (explorerData.isFolder) {
    return (
           <div style={{ marginLeft: "5px" }}>
              <div className='folder' onClick={()=> setExpand(!expand)}>
              <span>📁{explorerData.name}</span> 
               
               <div>
               <button onClick={(e)=> handleAddFolder(e,true)}>📁 +</button>
               <button onClick={(e)=> handleAddFolder(e,false)}>📄 +</button>
               </div>
              </div>
           <div style={{ display: expand? "block":"none", paddingLeft: "25px" }}>

           {showInput.visible && (
            <div className="inputContainer">
           <span>{showInput.isFolder? "📁" : "📄"}</span> 
           <input
              type="text"
              className="inputContainer__input"
              onKeyDown={onAddFolder}
              autoFocus
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
              </div>
          )}


             {
                explorerData.items.map((exp)=>{
                    return <FolderTree handleInsertFolder={handleInsertFolder} explorerData={exp}  key={exp.id}/>
                })
             }
           </div>
           </div>
      )
   } else {
     return <span className='file'>📄{explorerData.name}</span>
   }
    
}

export default FolderTree;
