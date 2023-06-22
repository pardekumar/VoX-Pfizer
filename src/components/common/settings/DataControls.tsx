import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import './settings.css';
interface DataControlProps{
  notifications:boolean;
  NotificationsChange:() => void;
  ExportData:() => void;
  DeleteAccount:() => void;
  ClearChat:() => void;
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
  const HorizontalForm = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center'
  });
function DataControls({notifications,NotificationsChange,ExportData,DeleteAccount,ClearChat}:DataControlProps){
    const classes = useStyles();
    return (<div>
        <div>
          <FormControlLabel
          className="right-sideswitch"
            control={
              <Switch
                checked={notifications}
                onChange={NotificationsChange}
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
          <Button  variant="outlined"  className={classes.btnNeutral}  onClick={ExportData}>
            Manage
          </Button>
        </HorizontalForm>
        <Divider style={{ margin: '16px 0' }} />
        <HorizontalForm>
          <div>Export Data</div>
          <Button  variant="outlined" className={classes.btnNeutral} onClick={ExportData}>
            Export
          </Button>
        </HorizontalForm>
        <Divider style={{ margin: '16px 0' }} />
        <HorizontalForm>
          <div>Delete Account</div>
          <Button  variant="contained" color="error" onClick={DeleteAccount}>
            Delete
          </Button>
        </HorizontalForm>
      </div>)
}
export default DataControls;