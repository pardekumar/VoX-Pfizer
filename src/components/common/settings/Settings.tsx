import {
  Close as CloseIcon,
  DataUsage as DataUsageIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import Dialog, { DialogProps } from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState, useEffect } from "react";
import GeneralComponent from "./General";
import DataControlComponent from "./DataControls";
import "./settings.scss";
import Box from "@mui/material/Box";
import StorageIcon from "@mui/icons-material/Storage";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface SettingsPopupProps {
  open: boolean;
  handleClose: () => void;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      style={{ width: "70%" }}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pl: 3 }}>{children}</Box>}
    </div>
  );
}
function SettingsPopup({ open, handleClose }: SettingsPopupProps) {
  const [notifications, setNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [value, setValue] = React.useState(0);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [engineList, setEngineList] = React.useState<string[]>(["Rule Engine", "Workflow Engine"]);
  const [themeList, setThemeList] = React.useState<string[]>(["System", "Light", "Dark"]);
  const [selTheme, setSelTheme] = React.useState("Dark");

  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleClearChat = () => {
    alert("Clear Button clicked");
  };

  const handleSliderUpdate = (fieldName: string, value: number | string) => {
    alert("FieldName Changed :: "+fieldName +"   ,  value :: "+value);
  };

  const handleThemeChange= (theme: string)=>{
    setSelTheme(theme);
  }
  return (
    <div className={selTheme}>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className={selTheme}
      >
        <DialogTitle id="scroll-dialog-title">
          Settings
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 224,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="fullWidth"
              value={value}
              onChange={handleTabsChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab
                label={
                  <div>
                    <SettingsIcon
                      style={{ verticalAlign: "middle", fontSize: "14px", marginBottom: "3px"}}
                      className="text-sm"
                    />{" "}
                    <div style={{display: "inline-block", marginTop: "8px"}}>General</div>
                  </div>
                }
              />
              <Tab
                label={
                  <div>
                    <StorageIcon
                      style={{ verticalAlign: "middle", fontSize: "14px", marginBottom: "3px" }}
                      className="text-sm"
                    />{" "}
                    <div style={{display: "inline-block", marginTop: "8px"}}>Data Controls{" "}</div>
                  </div>
                }
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <GeneralComponent clearChat={handleClearChat} selTheme={selTheme} themeList={themeList} handleThemeChange={handleThemeChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <DataControlComponent
                title={""}
                maxToken={1024}
                temperature={1}
                selEngine={"Rule Engine"}
                engineList={engineList}
                selTheme={selTheme}
                handleSliderUpdate={handleSliderUpdate}
              />
            </TabPanel>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SettingsPopup;
