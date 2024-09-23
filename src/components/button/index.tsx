import './styles.scss'
import { ITypographyTypes, Typography } from "../typography";
import { ButtonHTMLAttributes } from 'react';

interface IButton {
    colorBehavior: 'black' | 'transparent';
    className?: string;
    children?: React.ReactNode;
    textBehavior: ITypographyTypes;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

export const Button = ({
    colorBehavior,
    className,
    children,
    textBehavior,
    onClick,
}: IButton) => {
    return (
        <button
            className={`
                base 
                size_
                btn_${colorBehavior} 
                ${className || ''}`
            }
            onClick={onClick}
        >
        <div>
        <Typography type={textBehavior} className='font_600'>
            {children}
        </Typography>
        </div>
        </button>
    );
};

export default Button;