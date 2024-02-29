import React from "react";
import styled from "styled-components";

function TaskLoading() {
  return (
    <>
      <LoaderBox />
      <LoaderBox />
      <LoaderBox />
      <LoaderBox />
      <LoaderBox />
      <LoaderBox />
    </>
  );
}

export { TaskLoading };

export const LoaderBox = styled.div`
  position: relative;
  height: 16px;
  border: 1px solid var(--gray-light);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 10px;
  color: var(--black);
  border-radius: 8px;
  outline-offset: -4px;
  gap: 10px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      110deg,
      rgba(227, 227, 227, 0) 0%,
      rgba(227, 227, 227, 0) 40%,
      rgba(227, 227, 227, 0.5) 50%,
      rgba(227, 227, 227, 0) 60%,
      rgba(227, 227, 227, 0) 100%
    );
    animation: gradient-animation_2 1.2s linear infinite;
  }

  @keyframes gradient-animation_2 {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;
