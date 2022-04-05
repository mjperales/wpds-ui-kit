import * as React from "react";
import * as Theme from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "InputTextArea";

export const InputTextAreaCSS = Theme.css({
  borderRadius: "$012",
  border: "1px solid $subtle",
  fontFamily: "$meta",
  fontSize: "$100",
  fontWeight: "$light",
  lineHeight: "$125",
  padding: "$050",
  minHeight: "$500",
  width: "100%",

  "&:focus": {
    outline: "1px solid $signal",

    "&:placeholder-shown + label": {
      color: "transparent",
    },

    "&:valid": {
      "& + label": {
        fontSize: "$075",
        transform: "translateY(-100%)",
      },
    },

    "& + label": {
      transform: "translateY(-50%)",
      fontSize: "$075",
    },
  },

  "&:not(focus)": {
    "& + label": {
      // top: "15%",
      // transform: "translateY(-10%)",
      fontSize: "$100",
    },
  },

  variants: {
    /**
     * Enable to allow for the text area to be resized by the user.
     */
    canResize: {
      false: {
        resize: "none",
      },
    },
    state: {
      /**
       * Display an error state when the InputTextArea is invalid.
       */
      error: {
        borderColor: "$error",
      },
    },
  },
});

const LabelCSS = Theme.css({
  position: "absolute",
  cursor: "text",
  left: "$050",
  top: "20%",
  pointerEvents: "none",
  // transform: "translateY(-50%)",
  fontWeight: "$light",
  color: Theme.theme.colors.accessible,
  transition: "all .3s ease",
});

const ControlCSS = Theme.css({
  position: "relative",
});

type InputTextAreaVariants = WPDS.VariantProps<typeof InputTextAreaCSS>;

interface InputTextAreaInterface extends InputTextAreaVariants {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Label (use instead of Placeholder) */
  label: string;
  /** An id attribute to allow the <InputTextArea> to be associated with a <label> element for accessibility purposes */
  id: string;
  /** A name attribute to set the name of the associated data point submitted to the server when the form is submitted. */
  name: string;
}

export const InputTextArea = React.forwardRef<
  HTMLTextAreaElement,
  InputTextAreaInterface
>(({ css, id, name, canResize, state, label, children, ...props }, ref) => {
  return (
    <div className={ControlCSS()}>
      <textarea
        {...props}
        id={id}
        name={name}
        ref={ref}
        className={InputTextAreaCSS({
          css: css,
          canResize: canResize,
          state: state,
        })}
      >
        {children}
      </textarea>
      <label htmlFor={id} className={LabelCSS()}>
        {label}
      </label>
    </div>
  );
});

type InputTextAreaProps = React.ComponentProps<typeof InputTextArea>;

InputTextArea.displayName = NAME;

export type { InputTextAreaProps };
