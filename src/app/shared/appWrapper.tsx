import { ComponentType, ReactNode } from "react";
import * as S from "./appWrapper.styles";

export const withAppWrapper = (WrappedComponent: any) => {
  return () => {
    return (
      <S.Wrapper>
        <WrappedComponent />
      </S.Wrapper>
    );
  };
};
