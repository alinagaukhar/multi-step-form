import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
  name: string;
  setName: Function;
  email: string;
  setEmail: Function;
  phoneNumber: string;
  setPhoneNumber: Function;
  yearly: boolean;
  setYearly: Function;
  plan: string;
  setPlan: Function;
  adds: string[];
  setAdds: Function;
}

const defaultValue = {
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  phoneNumber: "",
  setPhoneNumber: () => {},
  yearly: false,
  setYearly: () => {},
  plan: "",
  setPlan: () => {},
  adds: [],
  setAdds: () => {},
};

export const FormContext = createContext<ContextType>(defaultValue);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [yearly, setYearly] = useState(false);
  const [plan, setPlan] = useState("arcade_monthly");
  const [adds, setAdds] = useState([]);

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        yearly,
        setYearly,
        plan,
        setPlan,
        adds,
        setAdds,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
