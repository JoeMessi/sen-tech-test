import { ComponentType } from "react";
import * as S from "./appWrapper.styles";

export const withAppWrapper = (WrappedComponent: ComponentType) => {
  return () => {
    return (
      <S.Wrapper>
        <S.H1>Tech Test for SED</S.H1>
        <WrappedComponent />
      </S.Wrapper>
    );
  };
};
