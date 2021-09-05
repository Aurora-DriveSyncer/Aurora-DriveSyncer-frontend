import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
const data = {};

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
    marginLeft: 0,
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
          {/* <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography> */}
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

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 300,
    margin: "10px",
  },
});

function SideIndex() {
  const classes = useStyles();
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={FolderIcon} />
      <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={FolderIcon} />
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
        />
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
      <StyledTreeItem nodeId="4" labelText="History" labelIcon={FolderIcon} />
    </TreeView>
  );
}
export default SideIndex;
