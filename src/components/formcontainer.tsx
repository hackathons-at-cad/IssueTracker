import React from "react";
import styled from "@emotion/styled";

const FormLayout = styled.div`
  width: 40%;
  margin: 0 auto;
`;
//@ts-ignore
const FormContainer = ({ props }) => {
  return <FormLayout>{props.children}</FormLayout>;
};

export default FormContainer;
