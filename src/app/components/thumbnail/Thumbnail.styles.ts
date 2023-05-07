import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Para = styled.p`
  padding: 0 10px;
  height: 2em;
`;
