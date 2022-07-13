import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Esta es la descripcion del label
   */
  label: string;
  /**
   * Esta es la descripcion del size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Colores basico del label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Color personalizado
   */
  fontColor?: string;
}

/**
 * Descripcion del componente
 */
export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
