import {type FunctionComponent, useEffect, useState} from "react";

interface Props {
    title: string;
    value: number;
}

const ProgressBarComponent: FunctionComponent<Props> = (props: Props) => {

    const [width, setWidth] = useState("0%");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWidth(`${props.value}%`);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [props.value]);

    return(
        <div className="skill-item">
            <h4>{props.title}</h4>
            <div className="progress">
                <div className="progress-bar"
                     role="progressbar"
                     style={{ width }}
                     aria-valuenow={props.value}
                     aria-valuemin={0}
                     aria-valuemax={100}
                ></div>
            </div>
        </div>
    );
}

export default ProgressBarComponent;