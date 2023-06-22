import { Close as CloseIcon, DataUsage as DataUsageIcon, Settings as SettingsIcon } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import DataControls from './DataControls';
import General from './General';
import './settings.css';

const HorizontalForm = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center'
});
interface SettingsPopupProps {
  open: boolean;
  handleClose: () => void;
}
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
function SettingsPopup({ open, handleClose }:SettingsPopupProps) {
const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const  [notifications,setNotifications]= useState(false)
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('');

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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Settings
        <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
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
              {/* <Tab label="Data Controls"icon={<DataUsageIcon />} className={classes.iconTabs}/> */}
            </Tabs>
            <FormGroup>
              {activeTab === 0 && (
                <General selectedTheme={selectedTheme} themeChange={handleThemeChange} ClearChat={handleClearChat}></General>
              )}
              {/* {activeTab === 1 && (
                <DataControls notifications={notifications} NotificationsChange={handleNotificationsChange} ExportData={handleExportData} DeleteAccount={handleDeleteAccount} ClearChat={handleClearChat}></DataControls>
              )} */}
            </FormGroup>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SettingsPopup;
