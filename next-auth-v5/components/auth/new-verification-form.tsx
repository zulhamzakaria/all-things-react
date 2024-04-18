import CardWrapper from "./card-wrapper";

const NewVerificationForm = () => {
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center"></div>
    </CardWrapper>
  );
};
export default NewVerificationForm;
