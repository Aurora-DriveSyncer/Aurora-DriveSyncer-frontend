import React, { useEffect, useState, useContext } from "react";
import SideIndex from "../components/SideIndex";
import PathViewer from "../components/PathViewer";
import FileViewer from "../components/FileViewer";
import { SettingContext } from "../App";
import service from "../utils/axios";

function IndexPage() {
  const { localPath, innerPath } = useContext(SettingContext);
  const [curPathData, setCurPathData] = useState([]);
  useEffect(() => {
    if (localPath) {
      const url = "/api/list/?path=" + (innerPath ? innerPath + "/" : "");
      service
        .get(url)
        .then((res) => {
          setCurPathData(res.data);
        })
        .catch((err) => {
          alert(err.toString());
        });
    }
  }, [localPath, innerPath]);
  return (
    <div id="content">
      <div id="side-index">
        <SideIndex />
      </div>
      <div id="file-viewer">
        <div id="file-path">
          <PathViewer />
        </div>
        <div id="files">
          <FileViewer curPathData={curPathData} />
        </div>
      </div>
    </div>
  );
}
export default IndexPage;
