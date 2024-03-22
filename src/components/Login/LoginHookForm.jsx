import React from "react";
import { StyledFlex } from "../../styledComponents/StyledFlex";
import styled from "styled-components";
import StyledLabel from "../../styledComponents/StyledLabel";
import StyledButton from "../../styledComponents/StyledButton";
import { useForm } from "react-hook-form";

const LoginHookForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur", // коли я вийшов з поля
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFlex $gap="20px" $direction="column">
        <h1>Login Form</h1>
        <StyledLabel>
          First Name
          <input
            placeholder="Enter name..."
            {...register("name", {
              required: "Field is required",
              minLength: {
                value: 2,
                message: "Minimum 2 chars",
              },
            })}
          />
          {errors?.name && <Error>{errors?.name.message}</Error>}
        </StyledLabel>
        <StyledLabel>
          Last Name
          <input
            placeholder="Enter surname..."
            {...register("surname", { required: "Field is required" })}
          />
          {errors?.surname && <Error>{errors?.surname.message}</Error>}
        </StyledLabel>
        <StyledLabel>
          Email
          <input
            placeholder="Enter email..."
            {...register("email", { required: "Field is required" })}
          />
          {errors?.email && <Error>{errors?.email.message}</Error>}
        </StyledLabel>
        <StyledButton>Submit</StyledButton>
      </StyledFlex>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  background-color: white;
  padding: 10px 22px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
const Error = styled.span`
  color: red;
`;
export default LoginHookForm;
