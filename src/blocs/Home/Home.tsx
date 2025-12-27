import type {FunctionComponent} from "react";
import TypedTextComponent from "./TypedTextComponent.tsx";
import {SOCIAL_NETWORK_LINKS, ROUTES} from "./index.ts";
import {NavLink} from "react-router-dom";

const Home: FunctionComponent = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="hero-content">
                            <h1 data-aos="fade-up" data-aos-delay="200">
                                Salut, je suis <span className="highlight">Elisée MIHAN</span>
                            </h1>

                            <h2 data-aos="fade-up" data-aos-delay="300">
                                Développeur{" "}
                                <TypedTextComponent strings={["Backend", "Frontend", "Fullstack"]}/>
                            </h2>

                            <p data-aos="fade-up" data-aos-delay="400">
                                Passionné par la création d'expériences numériques complètes,
                                je transforme des idées simple et complexes en applications fluides
                                et performantes. De l'architecture backend au design de l'interface,
                                je mets mon expertise technique au service de projets innovants
                                et centrés sur l'utilisateur.
                            </p>

                            <div className="hero-actions" data-aos="fade-up" data-aos-delay="500">
                                <NavLink to={ROUTES.ACHIEVEMENTS} className="btn btn-primary">Voir mes travaux</NavLink>
                                <NavLink to={ROUTES.CONTACT} className="btn btn-outline">Voir mes travaux</NavLink>
                            </div>

                            <div className="social-links" data-aos="fade-up" data-aos-delay="600">
                                <a href={SOCIAL_NETWORK_LINKS.YOUTUBE} target="_blank">
                                    <i className="bi bi-youtube"></i>
                                </a>

                                <a href={SOCIAL_NETWORK_LINKS.LINKEDIN} target="_blank">
                                    <i className="bi bi-linkedin"></i>
                                </a>

                                <a href={SOCIAL_NETWORK_LINKS.GITHUB} target="_blank">
                                    <i className="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="hero-image" data-aos="zoom-in" data-aos-delay="300">
                            <div className="image-wrapper">
                                <img src="/assets/img/profile/mihan-bras-croises.jpg"
                                     alt="Elisée MIHAN"
                                     className="img-fluid"
                                />

                                <div className="floating-elements">
                                    <div className="floating-card design" data-aos="fade-left" data-aos-delay="800">
                                        <i className="bi bi-code-slash"></i>
                                        <span>Code</span>
                                    </div>

                                    <div className="floating-card creativity" data-aos="fade-up" data-aos-delay="900">
                                        <i className="bi bi-lightbulb"></i>
                                        <span>Idées</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Home;