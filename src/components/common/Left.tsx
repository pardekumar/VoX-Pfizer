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
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

import "./Left.css";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Response(props: any) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="left-menu">
      <div
        style={{
          overflowY: "auto",
        }}
      >
        <Toolbar />
        <br />

        <Box
          sx={{
            overflow: "auto",
            flexDirection: "unset",
            justifyContent: "space-between",
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <Button
            className="new-chat"
            variant="contained"
            component="label"
            sx={{ marginLeft: "10px" }}
          >
            + New Chat
          </Button>
          <Button
            variant="contained"
            component="label"
            sx={{ marginRight: "10px" }}
          >
            <KeyboardArrowLeftIcon
              onClick={() => {
                open ? handleDrawerClose() : handleDrawerOpen();
              }}
            />
          </Button>
        </Box>
      </div>
      <div>
        <Box>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton className="left-item">
                  {/* <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    </div>
  );
}
