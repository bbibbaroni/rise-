import * as _ from "./style";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  Text: React.ReactNode;
  Icon: React.ReactNode;
  Link?: string;
  onClick?: () => void;
}

const Button = ({ Text, Icon, Link, onClick }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (Link) {
      navigate("/" + Link);
    }
  };

  return (
    <_.Container>
      <_.Button onClick={handleClick}>
        {Text}
        <_.Icon>{Icon}</_.Icon>
      </_.Button>
    </_.Container>
  );
};

export default Button;
