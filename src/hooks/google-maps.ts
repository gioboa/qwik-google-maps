import { type Signal, useContext, useVisibleTask$ } from '@builder.io/qwik';
import { AppContext } from '~/routes/layout';

export function useGoogleMaps(
	elementRefSignal: Signal<Element | undefined>
) {
	const appStore = useContext(AppContext);

	useVisibleTask$(async () => {
		new appStore.googleMaps.maps.Map(elementRefSignal.value!, {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		});
	});
}
