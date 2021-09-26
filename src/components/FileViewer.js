import React, { useEffect, useState } from "react";
import File from "./File";
import service from "../utils/axios";
const fileViewerWrapper = {
  display: "flex",
  flexWrap: "wrap",
  margin: "20px",
};

// const files = [];
// for (let i = 0; i < 10; i++) {
//   files.push(<File type="folder" filename="folder" status="done" />);
// }
// for (let i = 0; i < 10; i++) {
//   files.push(<File type="folder" filename="folder" status="sync" />);
// }
// for (let i = 0; i < 10; i++) {
//   files.push(<File type="folder" filename="folder" status="err" />);
// }
// for (let i = 0; i < 10; i++) {
//   files.push(<File type="file" filename="file123456789" status="done" />);
// }
// for (let i = 0; i < 10; i++) {
//   files.push(<File type="file" filename="file123456789" status="sync" />);
// }
// for (let i = 0; i < 10; i++) {
//   files.push(<File type="file" filename="file123456789" status="err" />);
// }
function FileViewer() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    service
      .get("/api/list/")
      .then((res) => {
        const data = res.data;
        const temp = [];
        data.forEach((file) => {
          temp.push(
            <File type="folder" filename={file.filename} status={file.status} />
          );
        });
        setFiles(temp);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }, []);
  return <div style={fileViewerWrapper}>{files}</div>;
}
export default FileViewer;
