import cn from "classnames";
import styles from './Hr.module.css'

export type HrProps = {
    appear?: string
}

function Hr({
    appear = "line"}: HrProps) {
    return (
        <hr
            className={cn(styles["hr"],  {
                [styles["line"]]: appear === "line",
                [styles["curve"]]: appear === "curve",
            })}
        />
    );
}

export default Hr;