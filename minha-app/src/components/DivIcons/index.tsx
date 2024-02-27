import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";
import { device } from "../../styles/responsive";

interface DivIconsProps {
  children: React.ReactNode;
  whileInView?: string;
  initial?: string;
  viewport?: object;
  variants?: object;
}

const StyledDivIcons = styled(motion.div)<DivIconsProps>`
  display: flex;
  justify-content: space-between;
  max-width: ${pixelToRem(1440)};
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    gap: ${pixelToRem(64)};
    padding-bottom: ${pixelToRem(72)};
    max-width: ${pixelToRem(222)};

    & image {
      margin: 0 auto;
    }
  }
`;

const DivIcons: React.FC<DivIconsProps> = ({
  children,
  whileInView,
  initial,
  viewport,
  variants,
}) => {
  return (
    <StyledDivIcons
      whileInView={whileInView}
      initial={initial}
      viewport={viewport}
      variants={variants}
    >
      {children}
    </StyledDivIcons>
  );
};

export default DivIcons;
