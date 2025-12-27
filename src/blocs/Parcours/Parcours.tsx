import type {FunctionComponent} from "react";
import ExperienceComponent, {default as EducationComponent} from "./ExperienceComponent.tsx";
import ProgressBarComponent from "./ProgressBarComponent.tsx";

const Parcours: FunctionComponent = () => {
    const auj = "Auj";
    return (
        <section id="resume" className="resume section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Parcours</h2>
                <p className="text-justified">
                    Passionné par le développement logiciel et les technologies web.
                    Je conçois des applications modernes en Java, Spring Boot et React, en accordant une attention
                    particulière à la qualité du code et aux bonnes pratiques.
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="resume-item" data-aos="fade-up">
                            <h3 className="resume-title">Education</h3>

                            <div className="resume-content">
                                <EducationComponent
                                    title={"Master 1 MIAGE"}
                                    start={"2025"}
                                    end={auj}
                                    company={"Université de Rennes"}
                                    location={"France"}
                                    descriptions={[
                                        "Approfondissement du développement logiciel en Java et Spring Boot à travers les design patterns, l’automatisation des tests et les bonnes pratiques de génie logiciel",
                                        "Étude de la modélisation UML, de la programmation concurrente (threads Java) et des systèmes d’information, avec une ouverture sur des notions de gestion d’entreprise telles que le contrôle de gestion et la gestion de production"
                                    ]}
                                />

                                <EducationComponent
                                    title={"Licence 3 MIAGE"}
                                    start={"2024"}
                                    end={"2025"}
                                    company={"Université de Rennes"}
                                    location={"France"}
                                    descriptions={[
                                        "Acquisition des fondamentaux de l’informatique et l’algorithmique avancée",
                                        "Étude approfondie des algorithmes sur les graphes (plus court/long chemin, flots, arbres couvrants, programmation dynamique) avec une attention particulière portée à la complexité et à l’optimisation des performances",
                                        "Acquisition de compétences en probabilités, statistiques inférentielles, bases de données relationnelles, programmation web avec Symfony, modélisation objet UML, ainsi qu’en gestion et comptabilité financière"
                                    ]}
                                />

                                <EducationComponent
                                    title={"Licence Informatique"}
                                    start={"2020"}
                                    end={"2023"}
                                    company={"Institut National Polytechnique Felix Houphouët Boigny (INP-HB)"}
                                    location={"Côte d'Ivoire"}
                                    descriptions={[
                                        "Acquisition des fondamentaux en programmation algorithmique",
                                        "Etude approfondie de la programmation procédurale avec le langage C",
                                        "Étude approfondie la programmation orientée objet avec des langages comme C++ et Java",
                                        "Acquisition de compétences en conception et modélisation objet avec MERISE et UML."
                                    ]}
                                />

                                <EducationComponent
                                    title={"Bac scientifique"}
                                    start={"2019"}
                                    end={"2020"}
                                    company={"Lycée Moderne Anyama"}
                                    location={"Côte d'Ivoire"}
                                    descriptions={[
                                        "Acquisition de compétences solides en Math, Physique et Chimie",
                                        "Apprentissage approfondi en expressions écrites et orales avec des matières comme le Français et la Philosophie",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="resume-item" data-aos="fade-up" data-aos-delay={100}>
                            <h3 className="resume-title">Expériences Professionnelles</h3>

                            <div className="resume-content">

                                {/* Les espaces de ligne dans le tableau pour marquer une diff entre ses éléments */}
                                <ExperienceComponent
                                    title={"Développeur Frontend"}
                                    start={"avr"}
                                    end={"juin 2025"}
                                    company={"e-Peak People"}
                                    location={"Ille-de-France"}
                                    descriptions={[
                                        "Développement d'une app web de gestion des Ressources Humaines d'une entreprise",

                                        "API Rest, React, Redux, TypeScript, GitLab",

                                        "J’ai travaillé en collaboration étroite avec le Lead Developer et l’équipe technique. " +
                                        "Mes missions comprenaient l'établissement de la connexion entre l'API " +
                                        "et l'app frontend l’intégration de maquettes Figma, " +
                                        "le développement de composants réutilisables, " +
                                        "la gestion des états via Redux, ainsi que la participation " +
                                        "aux revues de code et à l’amélioration continue de l’expérience utilisateur (UX). ",

                                        "Cette expérience m’a permis de consolider mes compétences techniques, " +
                                        "de renforcer ma rigueur en développement web, " +
                                        "et de m’impliquer pleinement dans un environnement agile et collaboratif.",
                                    ]}
                                />

                                <ExperienceComponent
                                    title={"Développeur Fullstack"}
                                    start={"mars 2023"}
                                    end={"avr 2024"}
                                    company={"J3A Finance"}
                                    location={"Côte d'Ivoire"}
                                    descriptions={[
                                        "Contribution au développement web d'une app bancaire",

                                        "API Rest, Spring Boot, JSF, GitHub, Jira",

                                        "Mes missions comprenaient notamment, l’intégration d’un système " +
                                        "de messagerie SMS pour la notification des clients, " +
                                        "le développement de la fonctionnalité de rechargement " +
                                        "de compte bancaire via PayPal, la gestion des demandes " +
                                        "et de l’octroi de produits d’épargne tels que le DAT, " +
                                        "le PEL ou le Livret A (interfaces, logique métier, validation)",

                                        "Cette expérience m’a permis de développer mon autonomie, " +
                                        "de renforcer mes capacités en travail d’équipe, " +
                                        "et de cultiver un respect rigoureux des consignes et des délais.",
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="resume-item skills-animation" data-aos="fade-up">
                            <h3 className="resume-title">Compétences</h3>

                            <div className="resume-content">
                                <ProgressBarComponent title={"Spring Boot"} value={70}/>
                                <ProgressBarComponent title={"React"} value={70}/>
                                <ProgressBarComponent title={"API Rest"} value={90}/>
                                <ProgressBarComponent title={"Java"} value={95}/>
                                <ProgressBarComponent title={"TypeScript"} value={75}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Parcours;