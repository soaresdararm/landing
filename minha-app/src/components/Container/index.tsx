import React, { ReactNode } from "react";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";
import styled from "styled-components";

interface GalleryFlexContainerProps {
  flex?: "row" | "column";
  width?: string;
  margin?: string;
  padding?: string;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  children?: ReactNode;
}

const Container = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  }
`;

const GalleryFlexContainer: React.FC<GalleryFlexContainerProps> = ({
  children,
  flex = "column",
  width,
  margin,
  padding,
  alignItems,
  justifyContent,
}) => {
  return (
    <Container
      flex={flex}
      width={width}
      margin={margin}
      padding={padding}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Container>
  );
};

export default GalleryFlexContainer;
