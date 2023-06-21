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
const HorizontalForm = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

function SettingsPopup() {
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
      <Button variant="contained" onClick={handleOpen}>
        Open Settings
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex' }}>
            <Tabs
              orientation="vertical"
              value={activeTab}
              onChange={handleTabChange}
              style={{ marginRight: '16px' }}
            >
              <Tab label="General" />
              <Tab label="Data Controls" />
            </Tabs>
            <FormGroup>
              {activeTab === 0 && (
                <div>
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
                    <Button variant="contained" onClick={handleClearChat}>
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
                    <h3>Shared Links</h3>
                    <Button variant="contained" onClick={handleExportData}>
                      Manage
                    </Button>
                  </HorizontalForm>
                  <Divider style={{ margin: '16px 0' }} />
                  <HorizontalForm>
                    <h3>Export Data</h3>
                    <Button variant="contained" onClick={handleExportData}>
                      Export
                    </Button>
                  </HorizontalForm>
                  <Divider style={{ margin: '16px 0' }} />
                  <HorizontalForm>
                    <h3>Delete Account</h3>
                    <Button variant="contained" onClick={handleDeleteAccount}>
                      Delete
                    </Button>
                  </HorizontalForm>
                </div>
              )}
            </FormGroup>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SettingsPopup;
