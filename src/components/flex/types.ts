export type FlexProps = {
  gap?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  direction?: "row" | "column";
};
