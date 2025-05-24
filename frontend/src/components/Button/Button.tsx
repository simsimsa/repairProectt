import styles from "./Button.module.css";
import cn from "classnames";
import type { ButtonProps } from "./Button.props";

function Button({
    children,
    className,
    appear = "big",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(styles["button"],  className, {
                [styles["small"]]: appear === "small",
                [styles["big"]]: appear === "big",
            })}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;