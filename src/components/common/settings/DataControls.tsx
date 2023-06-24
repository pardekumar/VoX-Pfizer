import React, { useEffect } from "react";
import "./settings.scss";
import SliderComp from "../../widgets/Slider";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
interface DataControlProps {
  title: string;
  maxToken: number;
  engineList: string[];
  selEngine: string;
  temperature: number;
  selTheme: string;
  handleSliderUpdate: (fieldName: string, value: number | string) => void;
}

function DataControls({
  title,
  maxToken,
  engineList,
  selEngine,
  temperature,
  selTheme,
  handleSliderUpdate,
}: DataControlProps) {
  const [formTitle, setTitle] = React.useState(title);
  const [formMaxToken, setMaxToken] = React.useState(maxToken);
  const [formEngine, setEngine] = React.useState(selEngine);
  const [formTemperature, setTemperature] = React.useState(temperature);
  const handleUpdate = (fieldName: string, value: number) => {
    handleSliderUpdate(fieldName, value);
  };
  const engineDropdownListener = (event: any) => {
    setEngine(event.target.value);
    handleSliderUpdate("engine", event.target.value);
  };
  const titleListener = (event: any) => {
    setTitle(event.target.value);
    handleSliderUpdate("title", event.target.value);
    
  };

  useEffect(() => {
    setTitle(title);
    setMaxToken(maxToken);
    setEngine(selEngine);
    setTemperature(temperature);
  }, [title, maxToken, selEngine, temperature]);
  return (
    <div>
      <div className="">
        <div className="text-sm">
          <div className="d-flex  justify-content-between flex-fill">
            <div style={{ marginTop: "5px" }}>Title</div>
            <TextField
              id="standard-basic"
              placeholder="Enter Title"
              variant="standard"
              value={formTitle}
              onChange={(event: any) => titleListener(event)}
            />
          </div>
          <Divider  className="divider"  />
          <div className="d-flex  justify-content-between">
            <div className="mt-2 w-50">Temperature</div>
            <div className="p-2 w-100">
              <SliderComp
                key={1}
                disabled={false}
                marks={[{ value: 1, label: 1 }]}
                step={0.1}
                value={[formTemperature]}
                min={0}
                max={1}
                updateSliderValue={(value: any) =>
                  handleUpdate("temperature", value)
                }
              ></SliderComp>
            </div>
          </div>
          <Divider className="divider" />
          <div className="d-flex  justify-content-between flex-fill">
            <div className="mt-2 w-50">Max Tokens</div>
            <div className="p-2 w-100">
              <SliderComp
                key={1}
                disabled={false}
                step={1}
                marks={[{ value: 1024, label: 1024 }]}
                value={[formMaxToken]}
                min={1}
                max={4096}
                updateSliderValue={(value: any) =>
                  handleUpdate("max-token", value)
                }
              ></SliderComp>
            </div>
          </div>
          <Divider className="divider"  />
          <div className="d-flex  justify-content-between">
            <div className="mt-2 w-50">Engine</div>
            <div className="mt-2">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formEngine}
                  className="text-sm"
                  onChange={(event: any) => engineDropdownListener(event)}
                  disableUnderline
                >
                  {engineList.map((engineData) => (
                    <MenuItem value={engineData}  className={`text-sm ${selTheme}`} >
                      {engineData}
                  </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataControls;
