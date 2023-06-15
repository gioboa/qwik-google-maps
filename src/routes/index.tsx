import { component$, useSignal } from '@builder.io/qwik';
import { useGoogleMaps } from '~/hooks/google-maps';

export default component$(() => {
	const containerRefSignal = useSignal<Element>();
	useGoogleMaps(containerRefSignal);
	return (
		<div>
			<div class='full-screen' ref={containerRefSignal}></div>
			<SecondMaps />
		</div>
	);
});

export const SecondMaps = component$(() => {
	const containerRefSignal = useSignal<Element>();
	useGoogleMaps(containerRefSignal);
	return <div class='full-screen' ref={containerRefSignal}></div>;
});
