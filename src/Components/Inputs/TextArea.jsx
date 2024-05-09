import React from "react";
import styled from "styled-components";
import Input from "./Input";

export default function TextArea({ label, placeholder, onChange }) {
  return (
    <Input label={label}>
      <TextAreaStyle
        className="generalText"
        placeholder={placeholder}
        onChange={onChange}
      />
    </Input>
  );
}

export const TextAreaStyle = styled.textarea`
  display: flex;
  width: calc(100% - 22px);
  height: 18px;
  background-color: #fff;
  margin-top: -10px;
  border-radius: 8px;
  border: 2px solid var(--gray);
  padding: 10px;
  resize: none;
  overflow: auto;
  scrollbar-width: none;

  &:focus-visible {
    outline: none;
    border: 2px solid var(--secondary-main);
  }
`;
