import { getDb, getProjects } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	return {
		projects: await getProjects(getDb(platform))
	};
};
