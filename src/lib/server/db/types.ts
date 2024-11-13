export type NumberInfo = {
	id: number;
	number: number;
	description: string;
};

export interface Project {
	id: number;
	title: string;
	description: string;
	tags: string[];
	website: string;
	github: string;
	hasImage: boolean;
}

export interface Tag {
	id: number;
	tag: string;
}

export type ProjectTag = Project & Tag;
