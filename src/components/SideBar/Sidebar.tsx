import { useStepContext } from "../../context/stepContext";
import "./Sidebar.scss";

const steps: any = {
  1: "Your info",
  2: "Select plan",
  3: "Add-ons",
  4: "Summary",
};
const Sidebar = () => {
  const { step } = useStepContext();

  return (
    <div className="sidebar">
      {Object.keys(steps).map((key, index) => {
        return (
          <div className="row" key={index}>
            <div
              className={
                step === Number(key)
                  ? "step_number_active step_number"
                  : "step_number"
              }
            >
              {key}
            </div>
            <div className="step_desc">
              STEP {key}
              <p>{steps[key]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
