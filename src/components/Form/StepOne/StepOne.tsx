import "./StepOne.scss";
import { Form, Field, FormikProps } from "formik";
import { useFormContext } from "../../../context/formContext";
import { FormValues } from "../Form";
import NextStepButton from "../../Button/NextStepButton";
import { useStepContext } from "../../../context/stepContext";
import { useEffect } from "react";

const StepOne = (props: FormikProps<FormValues>) => {
  const { touched, errors, handleChange } = props;
  const { setEmail, setName, setPhoneNumber } = useFormContext();
  const { setStep } = useStepContext();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setEmail(e.target.value);
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setPhoneNumber(e.target.value);
  };

  const checkAll = () => {
    if (errors.email || errors.name || errors.phoneNumber) return true;
    return false;
  };

  const goToNextStep = () => {
    setStep(2);
  };
  return (
    <div className="step">
      <h1>Personal info</h1>
      <h2>Please provide your name, email address, and phone number.</h2>

      <Form>
        <label htmlFor="name">
          Name
          <span>{touched.name && errors.name && <div>{errors.name}</div>}</span>
        </label>
        <Field
          type="name"
          name="name"
          placeholder="e.g. Stephen King"
          onChange={handleNameChange}
          className={
            touched.name && errors.name ? "field field-error" : "field"
          }
        />

        <label htmlFor="email">
          Email
          <span>
            {touched.email && errors.email && <div>{errors.email}</div>}
          </span>
        </label>
        <Field
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleEmailChange}
          className={
            touched.email && errors.email ? "field field-error" : "field"
          }
        />

        <label htmlFor="phoneNumber">
          Phone Number
          <span>
            {touched.phoneNumber && errors.phoneNumber && (
              <div>{errors.phoneNumber}</div>
            )}
          </span>
        </label>
        <Field
          type="phoneNumber"
          name="phoneNumber"
          placeholder="87774563877"
          onChange={handlePhoneNumberChange}
          className={
            touched.phoneNumber && errors.phoneNumber
              ? "field field-error"
              : "field"
          }
        />
      </Form>
      <NextStepButton disabled={checkAll()} onClick={goToNextStep} />
    </div>
  );
};

export default StepOne;
