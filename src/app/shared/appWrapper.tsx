import { ComponentType } from "react";
import * as S from "./appWrapper.styles";

export const withAppWrapper = <T extends {}>(
  WrappedComponent: ComponentType<T>
) => {
  return (props: T) => {
    return (
      <S.Wrapper>
        <S.H1>Tech Test for SED</S.H1>
        <WrappedComponent {...props} />
      </S.Wrapper>
    );
  };
};
