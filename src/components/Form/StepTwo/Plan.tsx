type PlanProps = {
  planKey: string;
  imageSrc: string;
  name: string;
  price: number;
  desc?: string;
  setSelectedPlan: Function;
  selectedPlan: string | null;
};
const Plan = (props: PlanProps) => {
  const setCurrentPlan = () => {
    props.setSelectedPlan(props.planKey);
  };
  return (
    <button
      className={
        props.selectedPlan === props.planKey ? "plan plan-selected" : "plan"
      }
      onClick={setCurrentPlan}
    >
      <img src={props.imageSrc} />
      <div className="text">
        <p className="plan-name">{props.name}</p>
        <p className="plan-price">
          ${props.price}/{props.desc ? "yr" : "mo"}
        </p>
        <p className="plan-desc">{props.desc}</p>
      </div>
    </button>
  );
};

export default Plan;
