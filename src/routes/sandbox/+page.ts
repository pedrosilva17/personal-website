import type { PageLoad } from './$types';
export const load: PageLoad = () => {
	return {
		pages: [
			{
				name: 'Number Facts',
				description: 'A compilation of facts and curiosities about integers from 1 to 9999.'
			},
			{
				name: 'Threlte Playground',
				description:
					'An interactive Threlte (three.js + Svelte) scene, where I explore different aspects of the library.'
			},
			{
				name: 'Dice Roller',
				description: 'Roll dice in a 3D environment.'
			}
		]
	};
};
