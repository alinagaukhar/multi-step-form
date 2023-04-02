import NextStepButton from "../../Button/NextStepButton";
import Add from "./Add";
import { Adds } from "../../../utils/utils";
import { useFormContext } from "../../../context/formContext";
import { useStepContext } from "../../../context/stepContext";
import GoBackButton from "../../Button/GoBackButton";

const StepThree = () => {
  const { yearly } = useFormContext();
  const { setStep } = useStepContext();

  const goToNextStep = () => {
    setStep(4);
  };

  return (
    <div className="step">
      <h1>Pick add-ons</h1>
      <h2>Add-ons help enhance your gaming experience.</h2>
      {Object.keys(Adds).map((item, index) => (
        <Add
          key={index}
          addKey={item}
          name={Adds[item as keyof typeof Adds].name}
          desciption={Adds[item as keyof typeof Adds].description}
          price={
            yearly
              ? Adds[item as keyof typeof Adds].price.yearly
              : Adds[item as keyof typeof Adds].price.monthly
          }
        />
      ))}
      <GoBackButton />
      <NextStepButton onClick={goToNextStep} />
    </div>
  );
};

export default StepThree;
