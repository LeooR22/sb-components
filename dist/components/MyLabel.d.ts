/// <reference types="react" />
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
    backgroundColor?: string;
}
/**
 * Descripcion del componente
 */
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
