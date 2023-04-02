import { useStepContext } from "../../context/stepContext";
import "./GoBackButton.scss";

const GoBackButton = () => {
  const { step, setStep } = useStepContext();
  const goBack = () => {
    setStep(step - 1);
  };
  return (
    <button id="goBack" onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBackButton;
