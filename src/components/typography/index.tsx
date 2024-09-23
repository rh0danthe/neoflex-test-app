import "./styles.scss";
import { colors } from "../../lib/utils";

export type ITypographyTypes = `${"h1" | "p1" | "p2" | "p3"}`;

interface ITypography {
  className?: string | undefined;
  type: ITypographyTypes;
  color?: keyof typeof colors;
  children?: React.ReactNode;
}

export const Typography = ({
  className,
  type,
  color,
  children, 
}: ITypography) => {
  return (
    <div className={`${className} ${type}`} style={{ color: color ? colors[color] : 'inherit' }}>
      {children}
    </div>
  );
};