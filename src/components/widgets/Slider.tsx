import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
interface ISlider {
  marks: any[];
  value: number[];
  step: number;
  min: number;
  max: number;
  disabled?: boolean;
  updateSliderValue: (value: number[]) => any;
}


const SliderComp: React.FC<ISlider> = ({
  marks,
  value,
  step,
  min,
  max,
  disabled = false,
  updateSliderValue,
}) => {

  const [sliderMarks, setSliderMarks] = React.useState(marks);
  const [sliderStep, setSliderStep] = React.useState(step);
  const [sliderValue, setSliderValue] = React.useState<number[]>(value);

  const handleSliderHighChange = (event: Event, newValue: any) => {
    if (disabled) return;
    setSliderValue(newValue as number[]);
    const temp: any = [];
    for (var i = 0; i < newValue.length; i++) {
      temp.push({
        value: newValue[i],
        label: newValue[i],
      });
    }
    setSliderMarks(temp);
    updateSliderValue(newValue);
  };

  useEffect(() => { setSliderMarks(marks) }, [marks])
  useEffect(() => { setSliderValue(value) }, [value])
  useEffect(() => { setSliderStep(step) }, [step])


  return (
    <>
      <Slider
        size="small"
        getAriaLabel={() => "MS"}
        onChange={handleSliderHighChange}
        step={sliderStep}
        min={min}
        max={max}
        marks={sliderMarks}
        value={sliderValue}
        disabled={disabled}
        componentsProps={{ track: { style: styles.track }, thumb: { style: styles.track }, rail: { style: styles.rail } }}
        valueLabelDisplay="auto"
        color="secondary"
        disableSwap
      />
    </>
  );
};

export default SliderComp;

const styles: {
  [key: string]: React.CSSProperties
} = {
  track: {
    color: "#86bc25",
  },
  rail: {
    color: "grey"
  }
}


