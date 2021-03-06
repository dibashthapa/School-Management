import styled, { css } from "styled-components";

export const Flex = styled.div(
  ({ gap, direction, justify, align, nowrap }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${nowrap ? "no-wrap" : "wrap"};

    & > *:not(:last-child) {
      ${direction === "column"
        ? css`
            margin-bottom: ${(p) => p.theme.space[gap]}px;
          `
        : css`
            margin-right: ${(p) => p.theme.space[gap]}px;
          `}
    }
  `
);
