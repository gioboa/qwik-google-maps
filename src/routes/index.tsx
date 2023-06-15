import {
	component$,
	useContext,
	useSignal,
	useVisibleTask$,
} from '@builder.io/qwik';
import { AppContext } from './layout';

export default component$(() => {
	const appStore = useContext(AppContext);
	const containerRefSignal = useSignal<Element>();

	useVisibleTask$(async () => {
		new appStore.googleMaps.maps.Map(containerRefSignal.value!, {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		});
	});

	return (
		<div>
			<div class='full-screen' ref={containerRefSignal}></div>
			<SecondMaps />
		</div>
	);
});

export const SecondMaps = component$(() => {
	const appStore = useContext(AppContext);
	const containerRefSignal = useSignal<Element>();

	useVisibleTask$(async () => {
		new appStore.googleMaps.maps.Map(containerRefSignal.value!, {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		});
	});

	return <div class='full-screen' ref={containerRefSignal}></div>;
});
