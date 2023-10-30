import { useState } from "react";
import "./App.css";
import { Select } from "./components/select/Select";

function App() {
  const options = [
    { value: "paris", label: "Paris" } as HTMLOptionElement,
    { value: "london", label: "Londres" } as HTMLOptionElement,
  ];

  const [value, setValue] = useState<string>("paris");

  const handleOnChange = (value: HTMLOptionElement) => {
    setValue(value.value);
  };

  return (
    <>
      <Select
        options={options}
        value={value}
        onChange={(e) => handleOnChange(e as HTMLOptionElement)}
      />
    </>
  );
}

export default App;
