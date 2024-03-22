import React, { Component } from "react";

import styled from "styled-components";
import StyledLabel from "../../styledComponents/StyledLabel";

import StyledButton from "../../styledComponents/StyledButton";
import { StyledFlex } from "../../styledComponents/StyledFlex";

const INITIAL_STATE = {
  name: "",
  surname: "",
  email: "",
  age: "",
  country: "ukraine",
  gender: "male",
  text: "",
  agree: false,
};
class RegisterForm extends Component {
  state = { ...INITIAL_STATE };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState(INITIAL_STATE); // cкидання форми замість form.reset(). Поки ми не змінимо state, форма ніколи reset() не зробить, так як зав'язана на стейті.
  };
  handleChange = ({ target }) => {
    //деструктуризація- витягуємо target з (e)
    const { name, value } = target; //   деструктуризація target.name  target.value

    // IF-ELSE variant
    // if (name === "name") {
    //   this.setState({ name: value }); //міняємо значення в стейт, на те, що ввели в інпут, або визначили в радіо чи чекбоксі
    //   }
    //   if (name === "surname") {
    //     this.setState({ name: value }); //міняємо значення в стейт, на те, що ввели в інпут, або визначили в радіо чи чекбоксі
    //   }

    //swich -case variant
    // switch (name) {
    //   case "name":
    //     this.setState({ name: value });
    //     break;
    //   case "surname":
    //     this.setState({ surname: value });
    //     break;
    //   default:
    //     break;
    // }

    // Обчислювані дані  [key]

    if (name === "agree") {
      this.setState({ agree: !this.state.agree }); // переключаємо чекбокс
      return;
    }
    this.setState({ [name]: value }); // витягуємо кожний раз своє значення поля
  };
  render() {
    const { name, surname, email, age, country, gender, text, agree } =
      this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledFlex $gap="20px" $direction="column">
          <h1>Register form</h1>
          <StyledLabel>
            First Name
            <input
              value={name}
              name="name"
              placeholder="Enter name..."
              onChange={this.handleChange}
            />
          </StyledLabel>
          <StyledLabel>
            Last Name
            <input
              onChange={this.handleChange}
              value={surname}
              name="surname"
              placeholder="Enter surname..."
            />
          </StyledLabel>
          <StyledLabel>
            Email
            <input
              onChange={this.handleChange}
              name="email"
              value={email}
              placeholder="Enter email..."
            />
          </StyledLabel>
          <StyledLabel>
            Age
            <input
              onChange={this.handleChange}
              name="age"
              value={age}
              type="number"
              placeholder="Enter age..."
            />
          </StyledLabel>
          <StyledLabel>
            Choose your country
            <select onChange={this.handleChange} name="country" value={country}>
              <option value="ukraine">Ukraine</option>
              <option value="usa">USA</option>
              <option value="spain">Spain</option>
            </select>
          </StyledLabel>
          <StyledFlex>
            <StyledLabel $display="flex">
              <input
                checked={gender === "male"}
                onChange={this.handleChange}
                type="radio"
                value="male"
                name="gender"
              />
              Male
            </StyledLabel>
            <StyledLabel $display="flex">
              <input
                checked={gender === "female"}
                onChange={this.handleChange}
                type="radio"
                value="female"
                name="gender"
              />
              Female
            </StyledLabel>
          </StyledFlex>
          <StyledLabel>
            Send us your letter
            <textarea
              onChange={this.handleChange}
              // value={text}
              name="text"
              placeholder="Are you so cool today!!"
              value={text}
            />
          </StyledLabel>
          <StyledLabel $display="flex">
            <input
              onChange={this.handleChange}
              name="agree"
              checked={agree}
              type="checkbox"
            />
            I'm confirm this rules!
          </StyledLabel>
          <StyledButton disabled={!agree}>Submit</StyledButton>
        </StyledFlex>
      </StyledForm>
    );
  }
}
const StyledForm = styled.form`
  border: 1px solid black;
  background-color: white;
  padding: 10px 22px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
export default RegisterForm;
