import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
import { SettingContext } from "../App";
import service from "../utils/axios";

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)",
      //   backgroundColor: "rgb(230, 244, 234)",
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":
      {
        backgroundColor: "transparent",
      },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    width: "auto",
  },
  group: {
    // marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
    fontSize: "16px",
    color: "#3c8039",
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

function FolderItem(props) {
  const [childrenFolder, setChildrenFolder] = useState([]);
  const { setInnerPath, localPath } = useContext(SettingContext);
  useEffect(() => {
    const url =
      props.path === localPath
        ? "/api/list/?path="
        : "/api/list/?path=" + props.path + "/";
    service
      .get(url)
      .then((res) => {
        const temp = [];
        res.data.map((file) => {
          if (file.directory) {
            temp.push(file);
          }
        });
        setChildrenFolder(temp);
      })
      .catch((err) => {
        alert(err);
      });
  }, [props.path]);

  function handleClick() {
    if (props.path !== localPath) setInnerPath(props.path);
  }

  return (
    <StyledTreeItem
      nodeId={props.nodeId}
      labelText={props.folderName}
      labelIcon={FolderIcon}
      title={props.path}
      color="#3c8039"
      bgColor="#e6f4ea"
      onClick={handleClick}
    >
      {childrenFolder.map((folder, index) => {
        return (
          <FolderItem
            nodeId={folder.fullPath}
            folderName={folder.filename}
            path={folder.fullPath}
            expanded={props.expanded}
            setExpanded={props.setExpanded}
          />
        );
      })}
    </StyledTreeItem>
  );
}

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 300,
    margin: "10px",
  },
  selected: {
    backgroundColor: "#e6f4ea",
  },
  unselected: {},
});

function SideIndex(props) {
  const classes = useStyles();
  const { localPath, innerPath } = useContext(SettingContext);
  const [expanded, setExpanded] = useState([]);
  useEffect(() => {
    console.log("innerPath = " + innerPath);
    const parts = innerPath ? innerPath.split("/") : [];
    const temp = [localPath];
    parts.reduce((prev, cur, index) => {
      temp.push(prev + cur);
      return prev + cur + "/";
    }, "");
    setExpanded(temp);
  }, [innerPath]);
  console.log(expanded);
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
    >
      <FolderItem
        nodeId={localPath}
        folderName={localPath}
        path={localPath}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      {/* <StyledTreeItem
        nodeId="1"
        labelText="."
        labelIcon={FolderIcon}
        // style={selected === "." ? classes.selected : classes.unselected}
        // bgColor={"#e6f4ea"}
      /> */}
      {/* <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={FolderIcon} />
      <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={FolderIcon}>
        <StyledTreeItem
          nodeId="5"
          labelText="Social"
          labelIcon={FolderIcon}
          labelInfo="90"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Updates"
          labelIcon={FolderIcon}
          labelInfo="2,294"
          color="#3c8039"
          bgColor="#e6f4ea"
        ></StyledTreeItem>
        <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={FolderIcon}
          labelInfo="3,566"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={FolderIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="History" labelIcon={FolderIcon} /> */}
    </TreeView>
  );
}
export default SideIndex;
