import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { styled, useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TextField from "@mui/material/TextField";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import "./Left.css";

export default function Response(props: any) {
  const { open, handleDrawerOpen, handleDrawerClose } = props;
  const [selected, setSelected] = React.useState([-1, -1]);
  const [editmode, setEditmode] = React.useState([-1, -1]);
  const [deletemode, setDeletemode] = React.useState([-1, -1]);

  const leftMenuData = {
    sections: [
      {
        title: "Yesterday",
        items: [
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
        ],
      },
      {
        title: "Previous 7 Days",
        items: [
          { title: "1Summarize Request: Test." },
          { title: "2Quantum Computing Explained" },
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
        ],
      },
      {
        title: "Previous 7 Days",
        items: [
          { title: "1Summarize Request: Test." },
          { title: "2Quantum Computing Explained" },
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
          { title: "Summarize Request: Test." },
          { title: "Quantum Computing Explained" },
        ],
      },
    ],
  };

  const menuItems = (i: any, ci: any) => {
    return (
      <div className="item-menu-icons">
        <div
          className="item-menu-icon"
          onClick={() => {
            setEditmode([i, ci]);
          }}
        >
          {/* edit */}
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </div>
        <div className="item-menu-icon">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </div>
        <div
          className="item-menu-icon"
          onClick={() => {
            setDeletemode([i, ci]);
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </div>
    );
  };

  const editMenuItems = (i: any, ci: any) => {
    return (
      <div className="item-menu-icons">
        <div className="item-menu-icon">
          <DoneIcon
            style={{ fontSize: "20px" }}
            onClick={() => {
              // update session title
            }}
          />
        </div>
        <div className="item-menu-icon">
          <CloseIcon
            style={{ fontSize: "20px" }}
            onClick={() => {
              setEditmode([-1, -1]);
            }}
          />
        </div>
      </div>
    );
  };

  const deleteMenuItems = (i: any, ci: any) => {
    return (
      <div className="item-menu-icons">
        <div className="item-menu-icon">
          <DoneIcon
            style={{ fontSize: "20px" }}
            onClick={() => {
              // update session title
              setDeletemode([-1, -1]);
            }}
          />
        </div>
        <div className="item-menu-icon">
          <CloseIcon
            style={{ fontSize: "20px" }}
            onClick={() => {
              setDeletemode([-1, -1]);
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`left-menu ${open ? "" : "close-menu"}`}>
      <div className="left-menu-top-section">
        <Toolbar style={{ height: "68px" }} />

        <Box
          sx={{
            overflow: "auto",
            flexDirection: "unset",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Button
            className="menu-button new-chat"
            variant="contained"
            component="label"
          >
            + New chat
          </Button>
          <Button
            className="menu-button minimizer"
            variant="contained"
            component="label"
            onClick={() => {
              open ? handleDrawerClose() : handleDrawerOpen();
            }}
          >
            <span>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
            </span>
            {/* <KeyboardArrowLeftIcon /> */}
          </Button>
        </Box>
      </div>
      <div className="left-menu-link-section">
        <Box>
          <List>
            {leftMenuData.sections.length &&
              leftMenuData.sections.map((item, i) => (
                <>
                  <ListItem
                    key={`text_${i}`}
                    disablePadding
                    className="list-heading"
                  >
                    <ListItemButton className="no-gutter">
                      <ListItemText
                        primary={item.title}
                        className="list-item-text"
                      />
                    </ListItemButton>
                  </ListItem>
                  {item.items &&
                    item.items.length &&
                    item.items.map((citem, ci) => (
                      <ListItem
                        key={`ctext_${ci}`}
                        disablePadding
                        className={`list-item ${
                          selected[0] === i && selected[1] === ci
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => {
                          setSelected([i, ci]);
                        }}
                      >
                        <ListItemButton className="no-gutter">
                          <ListItemIcon className="no-gutter icons">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="h-4 w-4"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                          </ListItemIcon>
                          {editmode[0] === i && editmode[1] === ci ? (
                            <>
                              <TextField
                                className="input-field"
                                defaultValue="Hello World"
                                variant="outlined"
                                size="small"
                                sx={{
                                  width: "60%",
                                  marginLeft: "5px",
                                }}
                                autoFocus={true}
                                onBlur={() => {
                                  setEditmode([-1, -1]);
                                }}
                              />

                              <div className="item-menu-edit">
                                {selected[0] === i && selected[1] === ci ? (
                                  <>{editMenuItems(i, ci)}</>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </>
                          ) : (
                            <>
                              {deletemode[0] === i && deletemode[1] === ci ? (
                                <>
                                  <ListItemText
                                    primary={citem.title}
                                    className="list-item-text"
                                  />
                                  <div className="item-menu">
                                    {deleteMenuItems(i, ci)}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <ListItemText
                                    primary={citem.title}
                                    className="list-item-text"
                                  />
                                  <div className="item-menu">
                                    {selected[0] === i && selected[1] === ci ? (
                                      <>{menuItems(i, ci)}</>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </>
                              )}
                            </>
                          )}
                        </ListItemButton>
                      </ListItem>
                    ))}
                </>
              ))}
          </List>
        </Box>
      </div>
      <Divider style={{ borderColor: "rgb(255 255 255 / 12%)" }} />

      <List>
        <ListItem key="ctext_" disablePadding className={`list-item`}>
          <ListItemButton className="no-gutter">
            <ListItemIcon className="no-gutter icons">
              <div className="left-menu-avatar">PA</div>
            </ListItemIcon>
            <ListItemText
              primary="pardekumar@deloitte.com"
              className="list-item-text"
            />
            <div className="item-menu bottom">
              <div className="item-menu-button">...</div>
            </div>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
