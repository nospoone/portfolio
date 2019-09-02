import React from 'react';

// Clients
import AirTransat from '../assets/clients/air-transat.svg';
import Ardene from '../assets/clients/ardene.svg';
import Asmodee from '../assets/clients/asmodee.svg';
import Decathlon from '../assets/clients/decathlon.svg';
import Desjardins from '../assets/clients/desjardins.svg';
import MPH from '../assets/clients/multiprets.svg';
import TelJeunes from '../assets/clients/tel-jeunes.svg';
import WLKN from '../assets/clients/wlkn.svg';

export default function Clients() {
	return (
		<section className="clients">
			<div className="wrapper">
				<h2>Small sample of people I worked with in the past <span role="img" aria-label="cool">😎</span></h2>
				<div className="clients__container">
					<img className="client__logo" src={AirTransat} alt="Air Transat"/>
					<img className="client__logo" src={Ardene} alt="Ardene"/>
					<img className="client__logo" src={Asmodee} alt="Asmodee"/>
					<img className="client__logo" src={Decathlon} alt="Decathlon"/>
					<img className="client__logo" src={Desjardins} alt="Desjardins"/>
					<img className="client__logo" src={MPH} alt="Multi-Prêts Hypothèques"/>
					<img className="client__logo" src={TelJeunes} alt="Tel-Jeunes"/>
					<img className="client__logo" src={WLKN} alt="WLKN"/>
				</div>
			</div>
		</section>
	);
}
