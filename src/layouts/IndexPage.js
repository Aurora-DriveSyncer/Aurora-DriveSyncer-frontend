import React from "react";
import SideIndex from "../components/SideIndex";
import PathViewer from "../components/PathViewer";
import FileViewer from "../components/FileViewer";

function IndexPage() {
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
          <FileViewer />
        </div>
      </div>
    </div>
  );
}
export default IndexPage;
