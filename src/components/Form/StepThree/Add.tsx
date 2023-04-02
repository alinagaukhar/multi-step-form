import "./Add.scss";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useFormContext } from "../../../context/formContext";

type AddProps = {
  addKey: string;
  name: string;
  desciption: string;
  price: number;
};

const Add = (props: AddProps) => {
  const { adds, setAdds, yearly } = useFormContext();
  const [checked, setChecked] = useState(adds.includes(props.addKey));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      setChecked(false);
      const index = adds.indexOf(props.addKey);
      let copy = [...adds];
      if (index !== -1) {
        copy.splice(index, 1);
      }
      setAdds(copy);
    } else {
      setAdds([...adds, props.addKey]);
      setChecked(true);
    }
  };
  return (
    <div className="add">
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{
          color: "hsl(231, 11%, 63%)",
          marginRight: "10px",
          "&.Mui-checked": {
            color: "hsl(243, 100%, 62%)",
          },
        }}
      />
      <div className="text">
        <h1>{props.name}</h1>
        <p>{props.desciption}</p>
      </div>
      <div className="price">
        +${props.price}/{yearly ? "yr" : "mo"}
      </div>
    </div>
  );
};
export default Add;
