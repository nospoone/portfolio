import React, {useRef, useEffect} from 'react';

export default function WavyText({text, strength, speed}) {
	const offset = useRef(Math.random() * 100);
	const refs = useRef(Array.prototype.map.call(text, () => React.createRef()));

	useEffect(() => {
		let rafHandle;
 
		function draw(elapsed) {
			refs.current.forEach((ref, index) => {
				if (ref !== null) {
					ref.current.style.transform = `translateY(${Math.sin((elapsed + (offset.current + index) * 65) * (speed * 0.01)) * strength}px)`;
				}
			});

			rafHandle = requestAnimationFrame(draw);
		}

		rafHandle = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(rafHandle)
		}
	}, [text, speed, strength]);

	return (
		<span className="wavy-text rainbow">
			{Array.prototype.map.call(text, (letter, i) => <span className="wavy-text__letter" ref={refs.current[i]} key={`${letter}${i}`}>{letter}</span>)}
		</span>
	);
}
