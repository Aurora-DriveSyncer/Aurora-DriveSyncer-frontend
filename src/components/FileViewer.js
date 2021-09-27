import React, { useEffect, useState } from "react";
import File from "./File";
const fileViewerWrapper = {
  display: "flex",
  flexWrap: "wrap",
  margin: "20px",
};
function FileViewer(props) {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const temp = [];
    props.curPathData.forEach((file) => {
      temp.push(
        <File
          type={file.directory ? "folder" : "file"}
          filename={file.filename}
          status={file.status}
        />
      );
    });
    setFiles(temp);
  }, [props.curPathData]);
  return <div style={fileViewerWrapper}>{files}</div>;
}
export default FileViewer;
