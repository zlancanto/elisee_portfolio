import {type FunctionComponent} from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "./index.ts";
import SkillComponent from "./SkillComponent.tsx";
import TimelineComponent from "./TimelineComponent.tsx";

const Skills: FunctionComponent = () => {
    const BASE_DELAY = 120;
    const DELAY_STEP = 60;

    const skills = [
        {
            title: "Java",
            description: "Maîtrise approfondie de Java, avec une expertise particulière dans l'application des design patterns. Capacité à concevoir des architectures logicielles robustes, évolutives et strictement typées, en mettant l'accent sur la qualité du code et le respect des principes SOLID.",
            icon: "bi bi-filetype-java"
        },
        {
            title: "Spring Boot",
            description: "Maîtrise de l'écosystème Spring Boot pour le développement d'architectures backend performantes et hautement scalables. Spécialisé dans la conception d'API RESTful sécurisées, j'applique rigoureusement les principes SOLID et les design patterns pour garantir une séparation stricte des responsabilités et une maintenabilité optimale du code.",
            icon: "bi bi-code"
        },
        {
            title: "TypeScript",
            description: "Maîtrise de TypeScript pour le développement d'interfaces complexes et hautement sécurisées. J'exploite le typage statique avancé pour garantir l'intégrité des données transigées entre le Backend (Spring Boot) et le Frontend, minimisant ainsi les erreurs au profit d'une base de code robuste, prédictible et parfaitement documentée.",
            icon: "bi bi-typescript"
        },
        {
            title: "React",
            description: "Expertise dans le développement d'interfaces utilisateur modernes et réactives avec React. Je privilégie une approche basée sur des composants réutilisables et hautement typés avec TypeScript, garantissant ainsi la pérennité et la scalabilité du Frontend. Ma pratique inclut une gestion d'état rigoureuse et l'optimisation du cycle de vie des composants pour offrir une expérience utilisateur fluide et performante.",
            icon: "bi bi-code-slash"
        },
        {
            title: "Angular",
            description: "Initiation approfondie au framework Angular, me permettant d'appréhender les concepts fondamentaux du développement par composants",
            icon: "bi bi-braces-asterisk"
        },
        {
            title: "Android",
            description: "Amateur en ingénierie mobile Android sous Kotlin, focalisée sur le respect des standards de développement Google. Capacité démontrée à structurer des applications multi-fragments complexes, alliant performance technique et architecture logicielle propre.",
            icon: "bi bi-android2"
        },
        {
            title: "Symfony",
            description: "Amateur du framework Symfony pour le développement d'applications web complexes et évolutives. Je mets à profit l'architecture en composants et le moteur de templates Twig pour bâtir des solutions performantes, tout en assurant une gestion rigoureuse des bases de données via Doctrine ORM. Ma pratique repose sur le respect des standards de développement les plus exigeants pour garantir la pérennité des systèmes.",
            icon: "bi bi-braces"
        },
        {
            title: "Git",
            description: "Maîtrise professionnelle de Git comme outil central de la qualité logicielle. Spécialisé dans la gestion des commits et la mise en œuvre de conventions de nommage strictes, j'assure une maintenance simplifiée et une collaboration harmonieuse.",
            icon: "bi bi-git"
        },
    ]

    const timeLines = [
        {
            period: "2020",
            title: "Prog. procédurale",
            description: "Je découvre la programmation procédurale avec le langage C"
        },
        {
            period: "2021",
            title: "POO",
            description: "Je découvre la Programmation Orientée Objet avec les langages C++ et Java"
        },
        {
            period: "2021",
            title: "Prog. web",
            description: "Je découvre la Programmation Web avec le JavaScript, le PHP et le SQL"
        },
        {
            period: "2022",
            title: "Git",
            description: "Je découvre Git, un système de gestion de versions décentralisé"
        },
        {
            period: "2022",
            title: "SGBD NoSQL",
            description: "Je découvre les Systèmes de Gestion Base de Données NoSQL"
        },
        {
            period: "2023",
            title: "Spring Boot",
            description: "Je découvre le framework Spring Boot"
        },
        {
            period: "2023",
            title: "Angular",
            description: "Je découvre le framework Angular"
        },
        {
            period: "2024",
            title: "Symfony",
            description: "Je découvre le framework Symfony"
        },
        {
            period: "2025",
            title: "Tests unitaires",
            description: "Je découvre l'automatisation des tests avec J-Unit"
        },
        {
            period: "2025",
            title: "Design Pattern",
            description: "J'apprend et j'utilise les Design Pattern"
        },
        {
            period: "2025",
            title: "Android",
            description: "Je découvre la programmation mobile Android avec Kotlin"
        },
    ]

    const softSkills = [
        {
            title: "Minimalisme",
            icon: "bi bi-magic"
        },
        {
            title: "Clean code",
            icon: "bi bi-radioactive"
        },
        {
            title: "Optimisation",
            icon: "bi bi-cpu"
        },
        {
            title: "SOLID",
            icon: "bi bi-stripe"
        },
    ]

    return (
        <section id="about" className="about section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Compétences</h2>
                <p>
                    Je me passionne pour la conception de systèmes complexes
                    où la précision du code rencontre l'élégance de l'expérience
                    utilisateur. Mon approche repose sur une synergie
                    entre expertise technique et vision stratégique.
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row align-items-center justify-content-between gy-5 mb-5">
                    <div className="col-lg-7" data-aos="fade-right" data-aos-delay="150">
                        <div className="intro-content">

                            <h2 className="headline">
                                Je suis Elisée MIHAN – un développeur rigoureux
                                et créatif, architecte de solutions numériques innovantes.
                            </h2>

                            <p className="lead">
                                Fort d'une solide formation en ingénierie logicielle,
                                je maîtrise les environnements de développement
                                les plus exigeants, du backend robuste avec Spring Boot
                                à la création d'interfaces dynamiques sous React.
                                Mon parcours académique et mes succès en compétitions
                                algorithmiques m'ont permis de forger une méthodologie
                                de travail axée sur la performance et le respect
                                des standards de qualité les plus stricts,
                                tels que les principes SOLID et la Clean Architecture.
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
                        {
                            skills.map((skill, index: number) => (
                                <div key={skill.title} className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={BASE_DELAY + index * DELAY_STEP}>
                                    <SkillComponent
                                        title={skill.title}
                                        description={skill.description}
                                        icon={skill.icon}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="mb-5">
                    <div className="row g-4">
                        {
                            timeLines.map((timeLine, index: number) => (
                                <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={BASE_DELAY + index * DELAY_STEP}>
                                    <TimelineComponent
                                        period={timeLine.period}
                                        title={timeLine.title}
                                        description={timeLine.description}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <blockquote className="personal-quote text-center mb-5" data-aos="fade-down" data-aos-delay="200">
                    <p>
                        "Créer des expériences propres et significatives grâce
                        à un code SOLID et un design sobre."
                    </p>
                </blockquote>

                <div className="row g-3 justify-content-center">
                    {
                        softSkills.map((soft, index: number) => (
                            <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay={BASE_DELAY + index * DELAY_STEP}>
                                <div className="fact-pill">
                                    <i className={soft.icon}></i>
                                    <span>{soft.title}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    );
}

export default Skills;