import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Select } from "../../components/select/Select";
import styles from "./ProfileForm.module.scss";
import { profileFormSchema } from "./ProfileFormSchema";

export const ProfileForm = () => {
  const options = [
    { value: "gdansk", label: "Gdansk" } as HTMLOptionElement,
    { value: "warszawa", label: "Warszawa" } as HTMLOptionElement,
  ];
  const { handleSubmit, formState, setValue, getValues } = useForm({
    defaultValues: {},
    resolver: yupResolver(profileFormSchema),
  });
  const { errors } = formState;
  const onSubmit = (data: any) => console.log(data);

  const handleChange = (option?: HTMLOptionElement) => {
    setValue("city", option?.value);
    console.log(getValues("city"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <Select
        value={getValues("city")}
        options={options}
        onChange={handleChange}
      />
      <div className={styles.errorMessage}>{errors.city?.message}</div>
      <input type="submit" className={styles.submitButton} />
    </form>
  );
};
