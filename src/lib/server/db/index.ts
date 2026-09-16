import { error } from '@sveltejs/kit';
import type { NumberInfo, Project, ProjectTag } from './types.ts';

export function getDb(platform: App.Platform | undefined): D1Database {
	const db = platform?.env.DB;
	if (!db) error(500, 'The "DB" D1 binding is unavailable.');
	return db;
}

export async function getRandomNumber(db: D1Database): Promise<NumberInfo | null> {
	const query = 'SELECT * FROM Numbers ORDER BY RANDOM() LIMIT 1;';
	return db.prepare(query).first<NumberInfo>();
}

export async function getProjects(db: D1Database): Promise<Project[]> {
	const projects: Record<number, Project> = {};
	const query =
		'SELECT Projects.id AS id, Projects.title AS title, Projects.description AS description, Projects.website AS website, \
	Projects.github AS github, Projects.has_image AS hasImage, Tags.name AS tag FROM Projects \
	LEFT JOIN ProjectTags ON Projects.id = ProjectTags.project_id \
	LEFT JOIN Tags ON ProjectTags.tag_id = Tags.id;';

	const { results } = await db.prepare(query).all<ProjectTag>();
	for (const project of results) {
		if (project.id in projects) projects[project.id].tags.push(project.tag);
		else {
			projects[project.id] = {
				id: project.id,
				title: project.title,
				description: project.description,
				tags: [project.tag],
				website: project.website,
				github: project.github,
				hasImage: Boolean(project.hasImage)
			};
		}
	}
	return Object.values(projects);
}
