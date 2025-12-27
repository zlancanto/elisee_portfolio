import {type FunctionComponent} from 'react';

interface Props {
    period: string;
    title: string;
    description: string;
}

const TimelineComponent: FunctionComponent<Props> = (props: Props) => {
    return (
        <article className="timeline-item">
            <span className="dot"></span>
            <time>{props.period}</time>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </article>
    );
};

export default TimelineComponent;