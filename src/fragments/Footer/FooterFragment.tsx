import type {FunctionComponent} from "react";

/**
 * Fragement Footer
 * @constructor
 */
const FooterFragment: FunctionComponent = () => {
    return (
        <footer id="footer" className="footer">

            <div className="container">
                <div className="copyright text-center ">
                    <p>©
                        <span>Droit d'auteur</span>
                        <strong className="px-1 sitename"> {"<ScriptKode/>"} </strong>
                        <span>Tout droit reservé<br/></span>
                    </p>
                </div>
                <div className="social-links d-flex justify-content-center">
                    <a href="https://www.youtube.com/channel/UCmuaNww-ax2Dlm7HPmf76mw?sub_confirmation=1"
                       target="_blank"
                    >
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/elisée-mihan-15a7b3327"
                       target="_blank"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                <div className="credits">
                    Développé par
                    <a href="https://www.linkedin.com/in/elisée-mihan-15a7b3327"
                       target="_blank"
                    >
                        {" <ScriptKode/>"}
                    </a>
                </div>
            </div>

        </footer>
    );
}

export default FooterFragment;