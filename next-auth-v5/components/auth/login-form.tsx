import React from "react";
import CardWrapper from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back!"
      backButtonLabel="No Account?"
      backButtonHref="/auth/register/"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};
