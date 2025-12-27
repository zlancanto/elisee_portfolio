import {type FunctionComponent} from 'react';
import "./index.ts"

interface Props {
    title: string;
    description: string;
    img: string;
    tags?: string[];
}

const AboutCardComponent: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="portfolio-card">
            <div className="portfolio-img">
                <img src={props.img} alt="Portfolio Item" className="img-fluid profile-photo"/>

                <div className="portfolio-overlay">
                    <a href={props.img} target="_blank" className="glightbox portfolio-lightbox">
                        <i className="bi bi-plus"></i>
                    </a>
                </div>
            </div>

            <div className="portfolio-info">
                <h4>{props.title}</h4>
                <p className="mh-25-v">{props.description}</p>
                {
                    props.tags && (
                        <div className="portfolio-tags">
                            {
                                props.tags.map(
                                    (tag: string, index: number) => <span key={index}>{tag}</span>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AboutCardComponent;