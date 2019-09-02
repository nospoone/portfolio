import React from 'react';
import WavyText from './wavy-text';

export default function About() {
	return (
		<section className="about">
			<div className="wrapper">
				<h2 className="about__title">
					What do you mean,
					<WavyText text="creative" strength={2} speed={1}/>
					programmer?
				</h2>
				<p className="about__content">
					Programming has always been about expressing my creative abilities. I find it difficult to express myself through more "normal" creative means - whether that is music, drawing, or otherwise. When I found out I could make the computer do stuff by applying logic to some strange incantations written in a text editor - I fell in love. Luckily enough for me, turns out you can make a career out of that. More to the point, though: I call myself a
					<WavyText text="creative" strength={2} speed={1}/>
					programmer because I like applying my creativity to the problems I have to solve.
				</p>
				<hr className="about__separator" />
				<h2 className="about__title">How I like to work</h2>
				<p className="about__content about__content--margin">Since I've been working remotely for most of my career, I've learnt how to communicate clearly and organize my work to keep projects under control. Also, while I can adapt myself to pretty much any framework/language that is needed for a particular job, I have a set of them on which I have developed an expertise.</p>
				<h3 className="about__subheader">Code</h3>
				<div className="about__items">
					<span className="about__item">Node.js</span>
					<span className="about__item">ES6 &amp; 7 (w/ Babel)</span>
					<span className="about__item">React/Redux</span>
					<span className="about__item">Pug</span>
					<span className="about__item">LESS/SASS</span>
					<span className="about__item">Unity</span>
					<span className="about__item">Arduino</span>
				</div>
				<h3 className="about__subheader">Infrastructure</h3>
				<div className="about__items">
					<span className="about__item">DigitalOcean</span>
					<span className="about__item">nginx</span>
					<span className="about__item">Express</span>
					<span className="about__item">webpack</span>
					<span className="about__item">Gulp.js</span>
					<span className="about__item">PM2</span>
				</div>
				<h3 className="about__subheader">Productivity</h3>
				<div className="about__items">
					<span className="about__item">Slack</span>
					<span className="about__item">Trello</span>
					<span className="about__item">Toggl</span>
					<span className="about__item">GitHub &amp; GitLab</span>
				</div>
			</div>
		</section>
	);
}
