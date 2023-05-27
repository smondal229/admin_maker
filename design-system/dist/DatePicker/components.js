import o, { css as t } from "styled-components";
import { InputWrapper as n } from "../Field/FieldInput.js";
import { Popover as i } from "../Popover/Popover.js";
import { Box as a } from "../Box/Box.js";
const c = o(i)`
  max-height: ${3 * 6}rem;
  overflow: hidden;
`;
/**
 * @preserve
 * @deprecated This component will be removed in the next major version
 */
const m = o.button`
  border: none;
  background: transparent;
  border-radius: ${({ theme: r }) => r.borderRadius};
  cursor: ${(r) => r["aria-disabled"] ? "not-allowed" : void 0};

  & svg path {
    fill: ${({ theme: r }) => r.colors.neutral500};
  }
`, u = o.div`
  ${({ bold: r, theme: e }) => r ? t`
          & ${n} {
            border: 1px solid ${e.colors.primary600};
          }
        ` : ""}
`;
/**
 * @preserve
 * @deprecated This component will be removed in the next major version
 */
const $ = o(a)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.neutral600};
  }
`;
export {
  m as DatePickerButton,
  c as DatePickerPopover,
  u as DatePickerWrapper,
  $ as IconBox
};
