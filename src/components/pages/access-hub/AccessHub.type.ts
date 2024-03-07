export type TSignInFormSchema = {
  username: string;
  password: string;
};

export type TSignUpFormSchema = {
  username: string;
  password: string;
  confirmPassword: string;
  createdAt?: Date;
};
