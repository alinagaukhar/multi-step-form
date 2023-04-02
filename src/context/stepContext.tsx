import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
  step: number;
  setStep: Function;
}

const defaultValue = {
  step: 1,
  setStep: () => {},
};

export const StepContext = createContext<ContextType>(defaultValue);

export const StepContextProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => useContext(StepContext);
