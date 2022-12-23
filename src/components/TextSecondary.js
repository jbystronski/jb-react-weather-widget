import styled from "styled-components";
import Text from "./Text";

const TextSecondary = styled(Text)`
  font-size: 0.875rem;
  color: ${(props) => props.color};
`;

export default TextSecondary;
