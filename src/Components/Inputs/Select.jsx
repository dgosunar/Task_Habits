import React from "react";
import "./../../styles/index.css";
import Input from "./Input";
import styled from "styled-components";

export default function Select({ label, defaultValue, values, onChange }) {
  return (
    <Input label={label}>
      <SelectStyle
        className="aaa generalText"
        value={defaultValue}
        onChange={onChange}
      >
        {values.map((v) => (
          <option key={v.id}>{v.name}</option>
        ))}
      </SelectStyle>
    </Input>
  );
}

export const SelectStyle = styled.select`
  display: flex;
  width: 100%;
  background-color: #fff;
  margin-top: -10px;
  border-radius: 8px;
  border: 2px solid var(--gray);
  padding: 10px;

  &:focus-visible {
    outline: none;
    border: 2px solid var(--secondary-main);
  }
`;
