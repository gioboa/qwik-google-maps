import {
	component$,
	createContextId,
	noSerialize,
	Slot,
	useContextProvider,
	useStore,
	useVisibleTask$,
} from '@builder.io/qwik';
import { Loader } from 'google-maps';

type AppStore = {
	googleMaps?: any;
};

export const AppContext = createContextId<AppStore>('AppStore');

export default component$(() => {
	const appStore = useStore<AppStore>({ googleMaps: undefined });
	useContextProvider(AppContext, appStore);
	useVisibleTask$(async () => {
		const loader = new Loader('my-api-key', {});
		appStore.googleMaps = noSerialize(await loader.load());
	});

	return <Slot />;
});
