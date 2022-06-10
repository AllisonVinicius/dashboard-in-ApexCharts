import React from "react";
import { Button, Container, StyleIcon } from "./styles";

type IButtonProps = {
  text: string;
};

const ButtonFilter = ({ text }: IButtonProps) => {
  return (
    <Container>
      <Button>
        <StyleIcon />
        {text}
      </Button>
    </Container>
  );
};

export default ButtonFilter;
