import React from 'react';
import avatar from '../assets/avatar.gif';
import WavyText from './wavy-text';

export default function Home() {
	return (
		<section className="home">
			<img className="home__avatar" alt="Avatar" src={avatar}/>
			<div className="home__container js-menu-trigger">
				<h1 className="home__title">Hi, I'm Roméo, and I am a
					<span className="home__title-break">
						<WavyText text="creative" strength={4} speed={1.2}/>
						programmer
					</span>
				</h1>
				<h2 className="home__subtitle">I like to make things work, move, and feel good <span role="img" aria-label="ok hand">👌</span></h2>
				<span className="home__brief">I am a full-stack web developer and I do consultancy.</span>
				<span className="home__contact">Have a project you'd like to talk about?</span>
				<a className="home__link" href="mailto:hey@nospoonemak.es?subject=Hey!">Get in touch!</a>
				<div className="home__social">
					<a className="social-link social-link--margin-right social-link--big" href="https://github.com/nospoone" target="_blank" rel="noopener noreferrer">
						<svg className="social-link__icon social-link__icon--black social-link__icon--big" xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-github-icon" viewBox="0 0 24 24">
							<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2a4 4 0 0 1 1.3 3.2c0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
						</svg>
					</a>
					<a className="social-link social-link--margin-right social-link--big" href="https://www.linkedin.com/in/nospoone">
						<svg className="social-link__icon social-link__icon--linkedin social-link__icon--big" xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-linkedin-icon" viewBox="0 0 24 24">
							<path d="M20.4 20.5H17v-5.6c0-1.3 0-3-1.9-3-1.8 0-2 1.4-2 2.9v5.7H9.3V9h3.4v1.6c.5-1 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3zm-15-13a2 2 0 1 1 0-4.2 2 2 0 0 1 0 4.1zm1.7 13H3.6V9H7v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7z"/>
						</svg>
					</a>
				</div>
			</div>
			<svg className="home__dropdown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.75 10">
				<path d="M8.87 10l8.88-8.87L16.62 0 8.87 7.75 1.13 0 0 1.13 8.87 10z"></path>
			</svg>
		</section>
	);
}
