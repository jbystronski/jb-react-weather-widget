import styled from "styled-components";
import { Text } from "./Text";

export const TextSecondary = styled(Text)`
  font-size: 0.8rem;
  color: ${(props) => props.color};
`;
