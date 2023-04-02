import "./Form.scss";
import StepOne from "./StepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";
import { withFormik, FormikProps, FormikErrors } from "formik";
import { useStepContext } from "../../context/stepContext";
import StepThree from "./StepThree/StepThree";
import StepFour from "./StepFour/StepFour";

export interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
}

interface MyFormProps {}

const FormComponent = (props: FormikProps<FormValues>) => {
  const { step } = useStepContext();
  const renderSwitch = () => {
    switch (step) {
      case 1:
        return <StepOne {...props} />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
    }
  };

  return <div className="form-component">{renderSwitch()}</div>;
};

const isValidEmail = (email: string) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return expression.test(email);
};

const isValidPhoneNumber = (phoneNumber: string) => {
  const expression: RegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return expression.test(phoneNumber);
};

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      name: "",
      email: "",
      phoneNumber: "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) errors.email = "This field is required";
    else if (!isValidEmail(values.email))
      errors.email = "Invalid email address";

    if (!values.name) errors.name = "This field is required";

    if (!values.phoneNumber) errors.phoneNumber = "This field is required";
    else if (!isValidPhoneNumber(values.phoneNumber))
      errors.phoneNumber = "Invalid phone number";

    return errors;
  },

  handleSubmit: (values) => {
    console.log(values);
  },
})(FormComponent);

export default MyForm;
