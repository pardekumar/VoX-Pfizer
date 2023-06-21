import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { MenuItem, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import './settings.css';
import { makeStyles } from '@mui/styles';
import { Settings as SettingsIcon, DataUsage as DataUsageIcon } from '@mui/icons-material';

const HorizontalForm = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center'
});
  const useStyles = makeStyles(() => ({
    btnNeutral : {
        backgroundColor:'rgba(255,255,255,1) !important',
        borderColor:'rgba(0,0,0,.1) !important',
        borderWidth:'1px',
        color:'rgba(64,65,79,1) !important',
        fontSize:'.875rem',
        lineHeight:'1.25rem',
        alignItems: 'center',
        borderRadius:'0.25rem',
        padding: '0.5rem 0.75rem',
        height: '3em'
    },
  iconTabs:{
    color: '#000',
    display: 'flex  !important',
    flexFlow: 'row  !important',
    alignItems: 'center  !important',
    minHeight: '37px',
    justifyContent: 'flex-start',
    
  }
  }));
function SettingsPopup() {
const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleExportData = () => {
    // Logic to export data
  };

  const handleDeleteAccount = () => {
    // Logic to delete account
  };

  const handleThemeChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedTheme(event.target.value);
  };

  const handleClearChat = () => {
    // Logic to clear chat
  };

  return (
    <div>
      <Button  variant="outlined" onClick={handleOpen}>
        Open Settings
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Settings</DialogTitle>
        <Divider style={{ margin: '1em 0' }} />
        <DialogContent>
          <div style={{ display: 'flex' }}>
            <Tabs
              orientation="vertical"
              value={activeTab}
              onChange={handleTabChange}
              style={{ marginRight: '1em' }}
            >
              <Tab label="General" icon={<SettingsIcon />} className={classes.iconTabs}/>
              <Tab label="Data Controls"icon={<DataUsageIcon />} className={classes.iconTabs}/>
            </Tabs>
            <FormGroup>
              {activeTab === 0 && (
                <div style={{ padding: '1em'}}>
                  <HorizontalForm>
                    <TextField
                      select
                      label="Theme"
                      value={selectedTheme}
                      onChange={handleThemeChange}
                      style={{ marginRight: '16px', width: '150px' }}
                    >
                      <MenuItem value="system">System</MenuItem>
                      <MenuItem value="light">Light</MenuItem>
                      <MenuItem value="dark">Dark</MenuItem>
                    </TextField>
                    <Button  variant="contained" color="error" onClick={handleClearChat}>
                      Clear Chat
                    </Button>
                  </HorizontalForm>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <div>
                    <FormControlLabel
                    className="right-sideswitch"
                      control={
                        <Switch
                          checked={notifications}
                          onChange={handleNotificationsChange}
                          color="success"
                        />
                      }
                      label="Chat History & Training"
                    />
                    <p className="subText">
                      Save new chats on this browser to your history and allow them to be used to improve our models.
                      Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across
                      browsers or devices.
                    </p>
                  </div>
                  <Divider style={{ margin: '16px 0' }} />
                  <HorizontalForm>
                    <div>Shared Links</div>
                    <Button  variant="outlined"  className={classes.btnNeutral}  onClick={handleExportData}>
                      Manage
                    </Button>
                  </HorizontalForm>
                  <Divider style={{ margin: '16px 0' }} />
                  <HorizontalForm>
                    <div>Export Data</div>
                    <Button  variant="outlined" className={classes.btnNeutral} onClick={handleExportData}>
                      Export
                    </Button>
                  </HorizontalForm>
                  <Divider style={{ margin: '16px 0' }} />
                  <HorizontalForm>
                    <div>Delete Account</div>
                    <Button  variant="contained" color="error" onClick={handleDeleteAccount}>
                      Delete
                    </Button>
                  </HorizontalForm>
                </div>
              )}
            </FormGroup>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SettingsPopup;
