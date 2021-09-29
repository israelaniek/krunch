import styled from "styled-components";

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
export const ContactUsHeading = styled.h2`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 100px;
`;
export const ContactUsSubheading = styled.p`
  font-style: italic;
  color: #5c5c76;
  font-size: 20px;
`;
export const FormContainer = styled.form`
  /* width: 100%; */
  display: grid;
  grid-template-columns: 400px 400px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 50px;

  @media screen and (max-width: 1083px) {
    display: flex;
    flex-direction: column;
  }
`;
// export const NameInputWrapper = styled.div``;
export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  color: #333;
  border: 1px solid #cccccc;

  &:focus {
    border-color: #3898ec;
    outline: 0;
  }
`;

export const FormInputEmail = styled.input`
  grid-column: 1 / span 2;
  width: 100%;
  height: 50px;
  padding: 15px;
  color: #333;
  border: 1px solid #cccccc;
  &:focus {
    border-color: #3898ec;
    outline: 0;
  }
`;

export const FormTextArea = styled.textarea`
  grid-column: 1 / span 2;
  width: 100%;
  height: 200px;
  padding: 15px;
  color: #333;
  border: 1px solid #cccccc;
  &:focus {
    border-color: #3898ec;
    outline: 0;
  }
`;

export const FormButton = styled.input`
  width: auto;
  height: auto;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  background: #4d8cf5;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  grid-column: 1 / span 2;
  &:hover {
    background: #352317;
    color: #fff;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;
