import React, { useState, useEffect } from "react";
import "./settings.scss";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
interface GeneralProps {
  selTheme: string;
  themeList: string[];
  clearChat: () => void;
  handleThemeChange: (theme: string) => void;
}

function General({ selTheme, themeList, clearChat, handleThemeChange }: GeneralProps) {
  const [theme, setTheme] = React.useState("");
  useEffect(() => { setTheme(selTheme) }, [selTheme, themeList]);

  const themeChangeListener= (event: any) => {
    handleThemeChange(event.target.value);
  }
  return (
    <div>
      <div className="">
        <div className="text-sm">
          <div className="d-flex  justify-content-between">
            <div style={{ marginTop: "5px" }}>Theme</div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }} >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={theme}
                className="text-sm"
                disableUnderline
                onChange={themeChangeListener}
              >
                  {themeList.map((themeData) => (
                    <MenuItem value={themeData} className={`text-sm ${selTheme}`} >
                      {themeData}
                  </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <Divider  className="divider mt-2"  />
          <div className="d-flex  justify-content-between mt-2">
            <div style={{ marginTop: "5px" }}>Clear All Chats</div>

            <Button variant="contained" color="error" onClick={clearChat}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default General;
