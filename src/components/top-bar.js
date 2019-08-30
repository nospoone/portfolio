import React, {useRef, useEffect} from 'react';
import {TimelineMax, TweenMax} from 'gsap';
import scrollMagic from 'scrollmagic';

// eslint-disable-next-line
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default function TopBar(props) {
	const topMenuContent = useRef(null);
	const topMenuSocial = useRef(null);

	useEffect(() => {
		const controller = new scrollMagic.Controller();

		const menuTimeline = new TimelineMax().to('.js-top-menu', 1, {
			height: 50,
			onComplete: () => {
				topMenuContent.current.classList.remove('top-menu__content--hidden');
				topMenuSocial.current.classList.remove('top-menu__social--hidden');
			}
		}).add([
			TweenMax.fromTo(topMenuContent.current, 1, {opacity: 0, x: -10}, {opacity: 1, x: 0, onReverseComplete: () => {
				topMenuContent.current.classList.add('top-menu__content--hidden');
			}}),
			TweenMax.fromTo(topMenuSocial.current, 1, {opacity: 0, x: 10}, {opacity: 1, x: 0, onReverseComplete: () => {
				topMenuSocial.current.classList.add('top-menu__social--hidden');
			}})
		]);

		new scrollMagic.Scene({triggerElement: '.js-menu-trigger', triggerHook: 0.15, duration: 300, offset: document.querySelector('.js-menu-trigger').clientHeight}).setTween(menuTimeline).addTo(controller);
	});

	return (
		<div className="top-menu js-top-menu">
			<div className="wrapper top-menu__wrapper">
				<span ref={topMenuContent} className="top-menu__content top-menu__content--hidden">
					<span className="top-menu__text-wrap">Roméo Jr Labonté,</span>
					<span className="top-menu__text-wrap top-menu__text-wrap--right">&nbsp;creative programmer</span>
				</span>
				<div ref={topMenuSocial} className="top-menu__social top-menu__social--hidden">
					<a className="social-link" href="https://github.com/nospoone">
						<svg className="social-link__icon" xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-github-icon" viewBox="0 0 24 24">
							<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2a4 4 0 0 1 1.3 3.2c0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
						</svg>
					</a>
					<a className="social-link" href="https://www.linkedin.com/in/nospoone">
						<svg className="social-link__icon" xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-linkedin-icon" viewBox="0 0 24 24">
							<path d="M20.4 20.5H17v-5.6c0-1.3 0-3-1.9-3-1.8 0-2 1.4-2 2.9v5.7H9.3V9h3.4v1.6c.5-1 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3zm-15-13a2 2 0 1 1 0-4.2 2 2 0 0 1 0 4.1zm1.7 13H3.6V9H7v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7z"/>
						</svg>
					</a>
					<a className="social-link" href="mailto:hey@nospoonemak.es?subject=Hey!">
						<svg className="social-link__icon" xmlns="http://www.w3.org/2000/svg" aria-labelledby="simpleicons-gmail-icon" viewBox="0 0 24 24">
							<path d="M24 4.5v15c0 .8-.7 1.5-1.5 1.5H21V7.4l-9 6.5-9-6.5V21H1.5C.6 21 0 20.4 0 19.5v-15c0-.4.2-.8.4-1 .3-.3.7-.5 1.1-.5H2l10 7.3L22 3h.5c.4 0 .8.2 1 .4.3.3.5.7.5 1.1z"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
