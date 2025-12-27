import {type FunctionComponent, useState} from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "./index.ts";
import SkillComponent from "./SkillComponent.tsx";

const Skills: FunctionComponent = () => {
    const [showSkillDelay, setShowSkillDelay] = useState(60)
    const skillDataAosDelay = () => {
        setShowSkillDelay(showSkillDelay + 60);
        return showSkillDelay;
    }
    return (
        <section id="about" className="about section">

            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem
                    aperiam</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row align-items-center justify-content-between gy-5 mb-5">
                    <div className="col-lg-7" data-aos="fade-right" data-aos-delay="150">
                        <div className="intro-content">
                            <span className="eyebrow">Hello there</span>
                            <h2 className="headline">Hi, I'm Brandon - a calm-minded creative developer crafting serene
                                digital journeys</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
                                tristique senectus et netus. Sed interdum, nunc non feugiat tempor, orci lorem luctus
                                ligula, vitae rutrum nisl lorem non nulla.
                            </p>
                            <p>
                                Integer posuere lacus in mi fringilla, eget luctus risus pulvinar. Curabitur a arcu a
                                nisl tempus sagittis. Aenean varius, tortor sed porttitor dictum, augue eros viverra
                                lectus, at efficitur magna lacus in risus.
                            </p>

                            <div className="cta-group">
                                <NavLink to={ROUTES.ACHIEVEMENTS} className="btn-ghost">
                                    Voir mon travail <i className="bi bi-arrow-up-right"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="250">
                        <figure className="profile-figure text-center text-lg-end">
                            <img src="/assets/img/profile/mihan-table.jpg" alt="Portrait de Elisée"
                                 className="img-fluid profile-photo"/>
                        </figure>
                    </div>
                </div>

                <div className="mb-5">
                    <div className="row g-4">
                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"Java"}
                                description={"Maîtrise approfondie de Java, avec une expertise particulière dans l'application des design patterns. Capacité à concevoir des architectures logicielles robustes, évolutives et strictement typées, en mettant l'accent sur la qualité du code et le respect des principes SOLID."}
                                icon={"bi bi-filetype-java"}
                            />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"Spring Boot"}
                                description={"Maîtrise de l'écosystème Spring Boot pour le développement d'architectures backend performantes et hautement scalables. Spécialisé dans la conception d'API RESTful sécurisées, j'applique rigoureusement les principes SOLID et les design patterns pour garantir une séparation stricte des responsabilités et une maintenabilité optimale du code."}
                                icon={"bi bi-code"}
                            />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"TypeScript"}
                                description={"Maîtrise de TypeScript pour le développement d'interfaces complexes et hautement sécurisées. J'exploite le typage statique avancé pour garantir l'intégrité des données transigées entre le Backend (Spring Boot) et le Frontend, minimisant ainsi les erreurs au profit d'une base de code robuste, prédictible et parfaitement documentée."}
                                icon={"bi bi-typescript"}
                            />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"React"}
                                description={"Expertise dans le développement d'interfaces utilisateur modernes et réactives avec React. Je privilégie une approche basée sur des composants réutilisables et hautement typés avec TypeScript, garantissant ainsi la pérennité et la scalabilité du Frontend. Ma pratique inclut une gestion d'état rigoureuse et l'optimisation du cycle de vie des composants pour offrir une expérience utilisateur fluide et performante."}
                                icon={"bi bi-code-slash"}
                            />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"Angular"}
                                description={"Initiation approfondie au framework Angular, me permettant d'appréhender les concepts fondamentaux du développement par composants"}
                                icon={"bi bi-braces-asterisk"}
                            />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"Android"}
                                description={"Amateur en ingénierie mobile Android sous Kotlin, focalisée sur le respect des standards de développement Google. Capacité démontrée à structurer des applications multi-fragments complexes, alliant performance technique et architecture logicielle propre."}
                                icon={"bi bi-android2"}
                            />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"Symfony"}
                                description={"Amateur du framework Symfony pour le développement d'applications web complexes et évolutives. Je mets à profit l'architecture en composants et le moteur de templates Twig pour bâtir des solutions performantes, tout en assurant une gestion rigoureuse des bases de données via Doctrine ORM. Ma pratique repose sur le respect des standards de développement les plus exigeants pour garantir la pérennité des systèmes."}
                                icon={"bi bi-braces"}
                            />
                        </div>

                        <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={skillDataAosDelay}>
                            <SkillComponent
                                title={"Git"}
                                description={"Maîtrise professionnelle de Git comme outil central de la qualité logicielle. Spécialisé dans la gestion des commits et la mise en œuvre de conventions de nommage strictes, j'assure une maintenance simplifiée et une collaboration harmonieuse."}
                                icon={"bi bi-git"}
                            />
                        </div>

                    </div>
                </div>

                <div className="mb-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="120">
                            <article className="timeline-item">
                                <span className="dot"></span>
                                <time>2018</time>
                                <h4>B.A. in Design</h4>
                                <p>Quisque euismod turpis ut sapien luctus bibendum.</p>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="180">
                            <article className="timeline-item">
                                <span className="dot"></span>
                                <time>2020</time>
                                <h4>Freelance Start</h4>
                                <p>Mauris non arcu non urna convallis vulputate.</p>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="240">
                            <article className="timeline-item">
                                <span className="dot"></span>
                                <time>2022</time>
                                <h4>Joined Creative Studio</h4>
                                <p>Nunc sed nibh et libero fermentum posuere.</p>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <article className="timeline-item">
                                <span className="dot"></span>
                                <time>2024</time>
                                <h4>Lead Frontend</h4>
                                <p>Proin commodo massa sit amet urna pretium.</p>
                            </article>
                        </div>
                    </div>
                </div>

                <blockquote className="personal-quote text-center mb-5" data-aos="fade-down" data-aos-delay="200">
                    <p>"Building clean and meaningful experiences through thoughtful code and quiet design."</p>
                </blockquote>

                <div className="row g-3 justify-content-center">
                    <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="120">
                        <div className="fact-pill">
                            <i className="bi bi-magic"></i>
                            <span>Minimalism</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="160">
                        <div className="fact-pill">
                            <i className="bi bi-headphones"></i>
                            <span>Lo-fi Beats</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="200">
                        <div className="fact-pill">
                            <i className="bi bi-geo-alt"></i>
                            <span>City Walks</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="240">
                        <div className="fact-pill">
                            <i className="bi bi-brush"></i>
                            <span>Sketching</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;