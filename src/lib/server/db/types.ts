export type NumberInfo = {
	id: number;
	number: number;
	description: string;
};


export type Project = {
	id: number;
	title: string;
	description: string;
	technologies: string[];
}

export type ProjectTechnology = {
	id: number;
	title: string;
	description: string;
	technology: string;
};