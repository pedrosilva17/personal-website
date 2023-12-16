import type { RequestHandler } from './$types';
import { getRandomNumber } from '$lib/server/db';

export const GET: RequestHandler = () => {
    const num = getRandomNumber();
	return new Response(JSON.stringify({number: num.number, description: num.description}));
};