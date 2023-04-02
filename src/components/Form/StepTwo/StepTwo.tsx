import "./StepTwo.scss";
import NextStepButton from "../../Button/NextStepButton";
import GoBackButton from "../../Button/GoBackButton";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { Plans } from "../../../utils/utils";
import Plan from "./Plan";
import { useFormContext } from "../../../context/formContext";
import { useStepContext } from "../../../context/stepContext";

const StepTwo = () => {
  const { plan, yearly, setPlan, setYearly } = useFormContext();
  const [mode, setMode] = useState<boolean>(false);
  const { setStep } = useStepContext();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(plan ?? null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setMode(true);
      setYearly(true);
    } else {
      setMode(false);
      setYearly(false);
    }
  };

  const handlePlanChange = (key: string) => {
    setPlan(key);
    setSelectedPlan(key);
  };

  const goToNextStep = () => {
    setStep(3);
  };

  return (
    <div className="step step_two">
      <h1>Select your plan</h1>
      <h2>You have the option of monthly or yearly billing.</h2>
      <div className="choosePlan">
        {mode
          ? Object.keys(Plans)
              .filter((key) => Plans[key as keyof typeof Plans].yearly)
              .map((key, index) => (
                <Plan
                  key={index}
                  planKey={key}
                  name={Plans[key as keyof typeof Plans].name}
                  price={Plans[key as keyof typeof Plans].price}
                  imageSrc={Plans[key as keyof typeof Plans].icon}
                  setSelectedPlan={handlePlanChange}
                  desc="2 months free"
                  selectedPlan={selectedPlan}
                />
              ))
          : Object.keys(Plans)
              .filter((key) => !Plans[key as keyof typeof Plans].yearly)
              .map((key, index) => (
                <Plan
                  key={index}
                  planKey={key}
                  name={Plans[key as keyof typeof Plans].name}
                  price={Plans[key as keyof typeof Plans].price}
                  imageSrc={Plans[key as keyof typeof Plans].icon}
                  selectedPlan={selectedPlan}
                  setSelectedPlan={handlePlanChange}
                />
              ))}
      </div>

      <div className="chooseMode">
        <p className={!mode ? "mode mode-active" : "mode"}>Monthly</p>
        <Switch
          checked={mode}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p className={mode ? "mode mode-active" : "mode"}>Yearly</p>
      </div>
      <GoBackButton />
      <NextStepButton disabled={selectedPlan === null} onClick={goToNextStep} />
    </div>
  );
};

export default StepTwo;
