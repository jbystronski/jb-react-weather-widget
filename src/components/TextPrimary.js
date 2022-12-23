import styled from "styled-components";
import Text from "./Text";

const TextPrimary = styled(Text)`
  font-size: 1rem;
  color: ${(props) => props.color};
  margin-bottom: 0.3rem;
`;

export default TextPrimary;
