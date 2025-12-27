import type {FunctionComponent} from "react";
import "./styles.css"

interface Props {
    title: string;
    description: string;
    link: string;
    icon: string;
}

const AchievementComponent: FunctionComponent<Props> = (props: Props) => {
    return(
        <div className="service-item">
            <div className="service-icon">
                <i className={props.icon}></i>
            </div>
            <div className="service-content">
                <h3>{props.title}</h3>
                <p className="mh-25-v">{props.description}</p>
                <a href={props.link} target="_blank" className="service-link">
                    <span>En savoir plus</span>
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export default AchievementComponent;