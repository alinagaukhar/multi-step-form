import "./NextStepButton.scss";

type ButtonProps = {
  disabled?: boolean;
  onClick: Function;
};

const NextStepButton = (props: ButtonProps) => {
  return (
    <button
      id="nextStepBtn"
      disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      Next Step
    </button>
  );
};

export default NextStepButton;
