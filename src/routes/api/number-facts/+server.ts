import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { getDb, getRandomNumber } from '$lib/server/db';

export const GET: RequestHandler = async ({ platform }) => {
	const num = await getRandomNumber(getDb(platform));
	if (!num) error(404, 'No number facts found.');
	return json({ number: num.number, description: num.description });
};
