import { Button as BootstrapButton, ButtonProps as BootstrapButtonProps } from 'react-bootstrap';

interface ButtonProps extends BootstrapButtonProps {
  customProp?: string;
}

const Button: React.FC<ButtonProps> = ({ customProp, ...otherProps }) => {
  return <BootstrapButton {...otherProps}>{customProp}</BootstrapButton>;
};

export default Button;
