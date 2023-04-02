import { useEffect, useState } from "react";
import { useFormContext } from "../../../context/formContext";
import { useStepContext } from "../../../context/stepContext";
import { Plans, Adds } from "../../../utils/utils";
import "./StepFour.scss";
import GoBackButton from "../../Button/GoBackButton";

const StepFour = () => {
  const { plan, yearly, adds } = useFormContext();
  const { setStep } = useStepContext();
  const selectedAds = adds.map((key) => Adds[key as keyof typeof Adds]);
  const selectedPlan = Plans[plan as keyof typeof Plans];
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    selectedAds.map(
      (add) => (total += yearly ? add.price.yearly : add.price.monthly)
    );
    total += selectedPlan.price;
    setTotal(total);
  }, []);

  const goToStepTwo = () => {
    setStep(2);
  };
  return (
    <div className="step">
      <h1>Finishing up</h1>
      <h2>Double-check everything looks OK before confirming.</h2>
      <div className="summary">
        <h3>
          <span>
            {selectedPlan.name}({yearly ? "Yearly" : "Monthly"})
            <button onClick={goToStepTwo}>Change</button>
          </span>
          <p>
            {selectedPlan.price}$/{yearly ? "yr" : "mo"}
          </p>
        </h3>
        <hr></hr>
        {selectedAds.map((item, index) => (
          <p key={index}>
            {item.name}
            <span>
              +{yearly ? item.price.yearly : item.price.monthly}$/
              {yearly ? "yr" : "mo"}
            </span>
          </p>
        ))}
      </div>
      <div className="total">
        <p>
          Total(per year)
          <span>
            {total}$/{yearly ? "yr" : "mo"}
          </span>
        </p>
      </div>
      <GoBackButton />
    </div>
  );
};

export default StepFour;
