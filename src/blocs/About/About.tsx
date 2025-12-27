import {type FunctionComponent, useEffect, useRef, useState} from "react";
import AboutCardComponent from "./AboutCardComponent.tsx";
import Isotope from "isotope-layout";

const About: FunctionComponent = () => {

    const FILTER = {
        ALL: "*",
        HOBBIES: ".filter-hobbies",
        CHALLENGES: ".filter-challenges",
        CERTIFICATION: ".filter-certification",
        DIPLOMATION: ".filter-diplomation",
        EXTRASCOLAIRE: ".filter-extrascolaire",
    } as const;

    const FILTER_ACTIVE = "filter-active";
    const IMG_PATH = "/assets/img/portfolio";

    const [activeFilter, setActiveFilter] = useState("*");
    const isotopeRef = useRef<Isotope | null>(null);

    useEffect(() => {
        isotopeRef.current = new Isotope(".isotope-container", {
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
        });

        return () => {
            isotopeRef.current?.destroy();
        };
    }, []);

    const handleFilter = (filter: string) => {
        setActiveFilter(filter)
        isotopeRef.current?.arrange({filter});
    };

    return (
        <section id="portfolio" className="portfolio section">

            <div className="container section-title" data-aos="fade-up">
                <h2>A propos de moi</h2>
                <p>
                    De l'architecture robuste de projets SOLID à l'adrénaline
                    des hackathons comme Break The Code, mon approche du
                    développement est guidée par l'agilité et la précision.
                    Certifié par Google en Marketing Digital, je possède une
                    vision transverse des produits web, intégrant performance
                    technique et visibilité stratégique.
                    Sur le terrain de basket comme derrière mon écran,
                    je privilégie l'esprit d'équipe, la résilience et le service
                    aux autres, des valeurs que je cultive quotidiennement
                    à l'université et dans mon engagement associatif.
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="isotope-layout" data-default-filter={FILTER.ALL} data-layout="masonry"
                     data-sort="original-order">
                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
                        <li onClick={() => handleFilter(FILTER.ALL)} className={activeFilter === FILTER.ALL ? FILTER_ACTIVE : ""}>Tous</li>
                        <li onClick={() => handleFilter(FILTER.CHALLENGES)} className={activeFilter === FILTER.CHALLENGES ? FILTER_ACTIVE : ""}>Challenges</li>
                        <li onClick={() => handleFilter(FILTER.CERTIFICATION)} className={activeFilter === FILTER.CERTIFICATION ? FILTER_ACTIVE : ""}>Certifications</li>
                        <li onClick={() => handleFilter(FILTER.DIPLOMATION)} className={activeFilter === FILTER.DIPLOMATION ? FILTER_ACTIVE : ""}>Diplômation</li>
                        <li onClick={() => handleFilter(FILTER.EXTRASCOLAIRE)} className={activeFilter === FILTER.EXTRASCOLAIRE ? FILTER_ACTIVE : ""}>Extrascolaire</li>
                        <li onClick={() => handleFilter(FILTER.HOBBIES)} className={activeFilter === FILTER.HOBBIES ? FILTER_ACTIVE : ""}>Hobbies</li>
                    </ul>

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-challenges">
                            <AboutCardComponent
                                title={"Challenge Capgémini"}
                                description={
                                    "« Distingué par le premier prix lors de la seconde édition du Challenge Positive Future organisé par Capgemini, j'ai eu l'honneur de mener, au sein de l'équipe Vainkeurs, un projet d'innovation technologique dédié à l'inclusion. Cette compétition de haut niveau, conclue dans les locaux de Capgemini à Issy-les-Moulineaux, a mis à l'épreuve notre capacité à concevoir des solutions numériques répondant à des enjeux sociétaux majeurs. Ce succès est le fruit d'une synergie d'équipe exceptionnelle et d'une résilience constante face aux défis techniques rencontrés. Cette expérience a renforcé ma conviction que l'ingénierie logicielle est un levier puissant pour favoriser l'accessibilité et transformer positivement notre futur. Elle témoigne de mon aptitude à piloter des projets complexes, de la phase d'idéation jusqu'à la présentation devant un jury d'experts de l'industrie. »"
                                }
                                img={`${IMG_PATH}/mihan-capgemini.jpeg`}
                                tags={["Résilience", "Leadership", "2024",]}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-challenges">
                            <AboutCardComponent
                                title={"Challenge « BreakTheCode »"}
                                description={
                                    "« Participant à l'édition bretonne du défi \"Break The Code\" orchestré par Sopra Steria, j'ai eu l'opportunité de mesurer mes facultés d'analyse au sein d'une compétition de programmation intensive. Confronté à une série d'épreuves algorithmiques complexes sous une contrainte temporelle stricte, ce challenge fut un catalyseur d'efficacité et de réflexion stratégique en équipe. Cette expérience a mis en exergue ma capacité à produire des solutions logiques optimisées dans un environnement à haute pression. Au-delà de la performance technique, ce fut une immersion enrichissante au cœur de l'écosystème numérique, renforçant ma détermination à relever des défis d'ingénierie toujours plus exigeants et mon aptitude à collaborer pour résoudre des problématiques critiques dans des délais records. »"
                                }
                                img={`${IMG_PATH}/mihan-break-the-code.jpg`}
                                tags={["Résilience", "SopraSteria", "2024 & 2025",]}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certification">
                            <AboutCardComponent
                                title={"Atélier numérique"}
                                description={
                                    "« Soucieux d'appréhender les enjeux du web dans leur globalité, j'ai suivi une formation intensive de trois jours dispensée par les Google Ateliers Numériques. Cette immersion, sanctionnée par l'obtention d'une certification officielle en octobre 2024, m'a permis d'acquérir une vision stratégique du déploiement de solutions numériques. Au-delà du développement pur, je maîtrise désormais les leviers de croissance digitaux tels que l'optimisation du référencement naturel (SEO) et l'élaboration de stratégies de contenu (Storytelling). Cette double compétence me permet de concevoir des architectures logicielles qui ne sont pas seulement performantes techniquement, mais également optimisées pour la conversion et la visibilité sur les moteurs de recherche. »"
                                }
                                img={`${IMG_PATH}/mihan-certif-google.jpg`}
                                tags={["Endurance", "Google", "2024",]}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-diplomation">
                            <AboutCardComponent
                                title={"Diplôme de Licence"}
                                description={
                                    "« Lauréat d'une Licence en Informatique obtenue en Côte d'Ivoire, ce diplôme marque l'aboutissement d'un cursus initial rigoureux. Cette formation académique m'a permis de forger un socle de compétences techniques solides, allant de l'algorithmique fondamentale à la maîtrise des structures de données complexes. Ce succès représente bien plus qu'une certification ; il symbolise ma détermination à exceller dans le domaine du numérique et constitue la pierre angulaire de ma spécialisation actuelle en ingénierie logicielle. Ce parcours international témoigne de ma capacité d'adaptation et de ma volonté constante d'approfondir mes connaissances au sein d'environnements académiques de haut niveau. »"
                                }
                                img={`${IMG_PATH}/mihan-diplome-ts.jpg`}
                                tags={["Persévérance", "2023",]}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-extrascolaire">
                            <AboutCardComponent
                                title={"Bénévolat"}
                                description={
                                    "« Je m'investis hebdomadairement au sein d'Epifree, l'épicerie solidaire du campus de Beaulieu. Cette expérience de bénévolat, bien au-delà d'un simple service communautaire, constitue pour moi un véritable laboratoire de développement personnel. J'y ai cultivé une compétence fondamentale : la résilience relationnelle. Apprendre à offrir un accueil chaleureux et enthousiasme, en dépit d'une charge de travail académique conséquente et d'une fatigue physique légitime, a transformé ma vision du service. Cette discipline de l'attitude me permet aujourd'hui d'aborder chaque interaction professionnelle avec une bienveillance constante et une énergie positive, garantissant une cohésion et une humanité essentielles à tout projet collectif. »"
                                }
                                img={`${IMG_PATH}/mihan-epifree.jpg`}
                                tags={["Jovialité", "Service", "Epifree"]}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-hobbies">
                            <AboutCardComponent
                                title={"Adepte de lecture"}
                                description={
                                    "« Dans mon travail, je conçois le code comme une œuvre " +
                                    "que l'on rédige avec soin : il doit être aussi lisible qu'élégant, " +
                                    "et aussi structuré qu'un récit bien mené. Cette culture de l'écrit " +
                                    "me permet d'aborder des problématiques techniques complexes " +
                                    "avec une hauteur de vue singulière, privilégiant toujours " +
                                    "la clarté et la pérennité des solutions que je bâtis. »"
                                }
                                img={`${IMG_PATH}/mihan-lecture.jpg`}
                                tags={["Clarté de code", "Lecture",]}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-hobbies">
                            <AboutCardComponent
                                title={"Basketeur"}
                                description={
                                    "« Au-delà des lignes de code, ma discipline et ma persévérance " +
                                    "puisent leur source sur les parquets de basketball. " +
                                    "Passionné par ce sport, j'y ai développé " +
                                    "un sens aigu de la stratégie, une réactivité constante " +
                                    "face aux imprévus et un esprit de corps indispensable " +
                                    "au travail en équipe. »"
                                }
                                img={`${IMG_PATH}/mihan-basket.png`}
                                tags={["Basket", "Travail d'équipe",]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;