import { MenuItem, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import './settings.css';
import StepSlider from '../../widgets/StepSlider';
import Temperature from '../../widgets/Temperature';


interface GeneralProps{
    selectedTheme:string;
    themeChange:any;
    ClearChat:()=>void;
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
  
function General({selectedTheme,themeChange,ClearChat}:GeneralProps){
    return (<div style={{ padding: '1em'}}>
    <HorizontalForm>
      <TextField
        select
        label="Theme"
        value={selectedTheme}
        onChange={themeChange}
        style={{ marginRight: '16px', width: '150px' }}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </TextField>

      <Button  variant="contained" color="error" onClick={ClearChat}>
        Clear Chat
      </Button>
    </HorizontalForm>
     <HorizontalForm>
        <span>Max Token</span>
        <StepSlider></StepSlider>
    </HorizontalForm>
    <HorizontalForm>
    <span>Engine</span>
      <TextField
        select
        label="Engine"
        value={selectedTheme}
        onChange={themeChange}
        style={{ marginRight: '16px', width: '150px' }}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </TextField>
    </HorizontalForm>
    <HorizontalForm>
      <span>Temperature</span>
      <Temperature></Temperature>
    </HorizontalForm>
  </div>)
}
export default General;