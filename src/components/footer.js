import React from 'react';

export default function Footer() {
	return (
        <footer className="main-footer js-footer">
            <div className="wrapper main-footer__container">
                <div className="main-footer__extend"/>
                <div className="main-footer__extend main-footer__extend--white"/>
                <div className="main-footer__cta">
                    <h2 className="main-footer__title">
                        Need help for your next web project?&nbsp;
                        <span role="img" aria-label="rocket">🚀</span>
                    </h2>
                    <a className="main-footer__link" href="mailto:hey@nospoonemak.es?subject=Hey!">Shoot me an email!</a>
                    <div className="main-footer__social">
                        <a className="social-link social-link--margin-right social-link--small" href="https://github.com/nospoone" target="_blank" rel="noopener noreferrer">
                            <svg className="social-link__icon social-link__icon--small" xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-github-icon" viewBox="0 0 24 24">
                                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2a4 4 0 0 1 1.3 3.2c0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
                            </svg>
                        </a>
                        <a className="social-link social-link--margin-right social-link--small" href="https://www.linkedin.com/in/nospoone" target="_blank" rel="noopener noreferrer">
                            <svg className="social-link__icon social-link__icon--small" xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-linkedin-icon" viewBox="0 0 24 24">
                                <path d="M20.4 20.5H17v-5.6c0-1.3 0-3-1.9-3-1.8 0-2 1.4-2 2.9v5.7H9.3V9h3.4v1.6c.5-1 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3zm-15-13a2 2 0 1 1 0-4.2 2 2 0 0 1 0 4.1zm1.7 13H3.6V9H7v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="main-footer__copy">
                    <span className="main-footer__copyright">&copy; Roméo Jr. Labonté {new Date().getFullYear()}</span>
                    <div className="main-footer__creds">
                        <a className="main-footer__small-link" href="https://www.facebook.com/jeremy.dumouchellariviere" target="_blank" rel="noopener noreferrer">Avatar by Jim</a>
                        <span className="main-footer__separator">&mdash;</span>
                        <a className="main-footer__small-link" href="https://www.linkedin.com/in/joellebeauregard" target="_blank" rel="noopener noreferrer">Designed with the help of Joëlle</a>
                        <span className="main-footer__separator">&mdash;</span>
                        <a className="main-footer__small-link" href="https://github.com/nospoone/portfolio" target="_blank" rel="noopener noreferrer">View source</a>
                    </div>
                </div>
            </div>
        </footer>
	);
}
