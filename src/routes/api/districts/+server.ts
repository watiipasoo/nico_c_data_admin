import { json } from '@sveltejs/kit';

export function GET() {
	const districts = [
		{ id: 1, name: 'District A' },
		{ id: 2, name: 'District B' },
		{ id: 3, name: 'District C' },
	];

	return json(districts);
}
