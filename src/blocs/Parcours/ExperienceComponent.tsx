import type {FunctionComponent} from "react";

interface Props {
    title: string;
    start: string;
    end: string;
    company: string;
    location: string;
    descriptions: string[];
}

const ExperienceComponent: FunctionComponent<Props> = (props: Props) => {
    return(
        <article className="experience-item">
            <h4>{props.title}</h4>
            <h5>
                {props.start} - {props.end}
            </h5>
            <p className="company">
                <em>{props.company}, {props.location}</em>
            </p>

            <ul>
                {
                    props.descriptions.map(
                        (description: string, index: number) =>
                            (<li key={index}>{description}</li>)
                    )
                }
            </ul>
        </article>
    );
}

export default ExperienceComponent;