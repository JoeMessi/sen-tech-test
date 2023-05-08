import { Link } from "react-router-dom";
import * as S from "./Button.styles";

interface ButtonProps {
  to: string;
  text: string;
}

export const Button = ({ to, text }: ButtonProps) => (
  <Link to={to}>
    <S.BackBtn>{text}</S.BackBtn>
  </Link>
);
