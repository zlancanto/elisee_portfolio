import {type FunctionComponent, useState} from "react";
import {NavLink} from "react-router-dom";
import {ROUTES, SOCIAL_NETWORK_LINKS} from "../imports.ts";

/**
 * Fragment Header
 * @constructor
 */
const HeaderFragment: FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);

    return (
        <header
            id="header"
            className={`header d-flex align-items-center light-background sticky-top ${open ? "mobile-nav-active" : ""}`}
        >
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <NavLink to={ROUTES.HOME} onClick={closeMenu}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.PARCOURS} onClick={closeMenu}>Parcours</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.SKILLS} onClick={closeMenu}>Compétences</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.ACHIEVEMENTS} onClick={closeMenu}>Réalisations</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.ABOUT} onClick={closeMenu}>A propos de moi</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.CONTACT} onClick={closeMenu}>Contact</NavLink>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"
                       onClick={() => setOpen(!open)}
                    >
                    </i>
                </nav>

                <div className="header-social-links">
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
        </header>
    );
}

export default HeaderFragment;