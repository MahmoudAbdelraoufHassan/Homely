import styled, { css } from "styled-components";
const Btn = styled.button`
  border-radius: 30px;
  transition: background 0.3s;
  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background-color: var(--color-primary);
      color: var(--color-white-100);
      padding: 17px 32px;

      &:hover {
        background-color: #079c72;
      }
    `}
  ${({ $variant }) =>
    $variant === "primary-light" &&
    css`
      background-color: var(--color-white-100);
      color: var(--color-black-100);
      padding: 17px 32px;
      &:hover {
      background-color: #dbd6d6;
      }
    `}
  ${({ $variant }) =>
    $variant === "primary-light-small" &&
    css`
      background-color: var(--color-black-5);
      color: var(--color-black-100);
      padding: 10px 20px;
    `}
  ${({ $variant }) =>
    $variant === "primary-dark" &&
    css`
      background-color: var(--color-black-100);
      color: var(--color-white-100);
      padding: 17px 32px;
    `}

  ${({ $variant }) =>
    $variant === "outline" &&
    css`
      background-color: transparent;
      color: var(--color-white-100);
      border: 2px solid var(--color-white-100);
      padding: 17px 32px;
    `}
  ${({ $variant }) =>
    $variant === "rounded" &&
    css`
      background-color: var(--color-white-100);
      color: var(--color-black-100);
      /* border: 2px solid var(--color-white-100); */
      border-radius: 100%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      /* margin: 0; */
      width: 60px;
      height: 60px;
    `}
  ${({ $variant }) =>
    $variant === "rounded-dark" &&
    css`
      background-color: var(--color-black-100);
      color: var(--color-white-100);
      /* border: 2px solid var(--color-white-100); */
      border-radius: 100%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      /* margin: 0; */
      width: 60px;
      height: 60px;
    `}
  ${({ $variant }) =>
    $variant === "rounded-white-10" &&
    css`
      background-color: var(--color-white-10);
      color: var(--color-white-100);
      /* border: 2px solid var(--color-white-100); */
      border-radius: 100%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      /* margin: 0; */
      width: 60px;
      height: 60px;
    `}

  ${({ $variant }) =>
    $variant === "secondary-dark" &&
    css`
      background-color: var(--color-black-100);
      color: var(--color-white-100);
      padding: 8px 32px;
    `}
  
  font-size: var(--text-base-size);
  line-height: var(--text-base-line-height);
  letter-spacing: var(--text-base-letter-spacing);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
`;
function Button({ children, variant, className, onClick, ...buttonProps }) {
  if (onClick) {
    return (
      <Btn
        $variant={variant}
        className={className}
        onClick={onClick}
        {...buttonProps}
      >
        {children}
      </Btn>
    );
  }
  return (
    <Btn $variant={variant} className={className} {...buttonProps}>
      {children}
    </Btn>
  );
}

export default Button;
