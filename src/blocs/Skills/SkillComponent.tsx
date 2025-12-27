import type {FunctionComponent} from "react";
import "./index.ts"

interface Props {
    title: string;
    description: string;
    icon: string;
}

const SkillComponent: FunctionComponent<Props> = (props: Props) => {
    return(
        <div className="skill-item">
            <i className={props.icon}></i>
            <h3>{props.title}</h3>
            <p className="mh-25-v">{props.description}</p>
        </div>
    );
}

export default SkillComponent;