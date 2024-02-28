import { FormComponent, Label, Input } from "./styles";

export interface FormProps {
  text: string;
  type?: "text" | "email" | "number";
}

function ComponentForm({ text }: FormProps) {
  return (
    <>
      <FormComponent>
        <Label>{text}</Label>
        <Input />
      </FormComponent>
    </>
  );
}

export default ComponentForm;
