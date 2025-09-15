export type InputModeType =
  | "none"
  | "text"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal"
  | "search";

export type FormDataType = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type UserInfoInput = {
  label: string;
  name: keyof FormDataType; // Ensure name matches formData keys
  type: string; // You can restrict this to "text" | "email" | "tel" if you want
  inputMode?: InputModeType;
  pattern?: string;
};