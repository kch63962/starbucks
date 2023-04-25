import styled from "styled-components";

export const OneBadge = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const Badge = ({ src }) => {
  return (
    <OneBadge>
      <img src={src} alt='Badge' />
    </OneBadge>
  );
};

export default Badge;
