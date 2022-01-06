import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void; 
}


export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  retutn (
    <IconButton onOpen={onOpen}></IconButton>
  )
});