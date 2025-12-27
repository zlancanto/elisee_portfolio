import type {FunctionComponent} from "react";
import AchievementComponent from "./AchievementComponent.tsx";

const Achievements: FunctionComponent = () => {
    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Réalisations</h2>
                <p>
                    Découvrez une sélection de mes projets,
                    où chaque ligne de code est pensée pour répondre à un besoin métier précis
                    et offrir une expérience utilisateur optimale.
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center g-5">
                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="120">
                        <AchievementComponent
                            title={"Editeur de text"}
                            description={
                                "« Editeur de texte en environnement console, " +
                                "rigoureusement développé sous Java 17. L'intérêt majeur " +
                                "de ce projet réside dans une architecture logicielle sophistiquée, " +
                                "articulée autour de l'implémentation stricte des design patterns " +
                                "Command, Memento, Prototype et Factory. " +
                                "Ce projet témoigne d'une maîtrise approfondie des principes " +
                                "de conception orientée objet et de la structuration de code modulaire" +
                                " et évolutif. »"
                            }
                            link={"https://github.com/zlancanto/aco-tp"}
                            icon={"bi bi-type"}
                        />
                    </div>

                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="180">
                        <AchievementComponent
                            title={"Simultaion d'une gare de train"}
                            description={
                                "« Conception et développement d'une infrastructure " +
                                "de simulation ferroviaire multithreadée visant à résoudre " +
                                "des problématiques critiques de synchronisation et " +
                                "de concurrence de données. Ce projet articule " +
                                "une modélisation rigoureuse d'objets partagés — " +
                                "tels que la gestion des flux de voyageurs et l'allocation " +
                                "des infrastructures de quai — avec le déploiement " +
                                "d'une architecture de contrôle pilotée par une API REST (Restlet). " +
                                "Cette réalisation démontre une maîtrise avancée " +
                                "de la programmation asynchrone, de la gestion du cycle de vie " +
                                "des processus (Threads) et de l'interopérabilité " +
                                "des systèmes via des services web. »"
                            }
                            link={"https://github.com/zlancanto/Simu_Gare_Train"}
                            icon={"bi bi-train-lightrail-front-fill"}
                        />
                    </div>

                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="240">
                        <AchievementComponent
                            title={"Mon Portfolio"}
                            description={
                                "« Conception et développement d'une plateforme vitrine moderne" +
                                " en appliquant les principes SOLID pour un code maintenable " +
                                "et évolutif. Le backend est propulsé par Spring Boot, assurant" +
                                " une gestion robuste des données, tandis que le frontend" +
                                " sous React offre une interface fluide et réactive. »"
                            }
                            link={"https://github.com/zlancanto/elisee_portfolio"}
                            icon={"bi bi-braces"}
                        />
                    </div>

                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="300">
                        <AchievementComponent
                            title={"Réseau social «Mymoz»"}
                            description={
                                "« Mini réseau social réalisé avec React et Express.js »"
                            }
                            link={"https://github.com/zlancanto/ZlancaSocialNetworkFrontend"}
                            icon={"bi bi-globe"}
                        />
                    </div>

                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="360">
                        <AchievementComponent
                            title={"Réseau social «AdopteUnDev»"}
                            description={
                                "« Développé en Symfony, il s'agit " +
                                "d'une application web permettant aux développeurs " +
                                "et aux entreprises de créer des profils ou " +
                                "des fiches de postes et de les faire correspondre " +
                                "selon un modèle inspiré des sites de rencontres. »"
                            }
                            link={"https://github.com/zlancanto/AdopteUnDev"}
                            icon={"bi bi-code-slash"}
                        />
                    </div>

                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="420">
                        <AchievementComponent
                            title={"Réseau social «AdopteUnDev»"}
                            description={
                                "« Cette application mobile, dédiée à la gestion en temps réel " +
                                "des horaires du réseau de transport STAR, " +
                                "constitue une démonstration de maîtrise du développement " +
                                "Android natif et du traitement de données à grande échelle. " +
                                "Le système assure de manière autonome le téléchargement, " +
                                "l'extraction et l'indexation de flux de données GTFS complexes. »"
                            }
                            link={"https://github.com/zlancanto/Horaires_Bus_Stars"}
                            icon={"bi bi-phone-fill"}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Achievements;