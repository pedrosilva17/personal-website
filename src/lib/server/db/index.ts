import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import type { NumberInfo, Project, ProjectTag } from './types.ts';

const db = new Database(DB_PATH);

export function getRandomNumber(): NumberInfo {
	const query = 'SELECT * FROM Numbers ORDER BY RANDOM() LIMIT 1;';
	const num = db.prepare(query).get();
	return num as NumberInfo;
}

export function getProjects(): Project[] {
	const projects: Record<number, Project> = {};
	const query =
		'SELECT Projects.id AS id, Projects.title AS title, Projects.description AS description, Projects.website AS website, \
	Projects.github AS github, Projects.has_image AS hasImage, Tags.name AS tag FROM Projects \
	LEFT JOIN ProjectTags ON Projects.id = ProjectTags.project_id \
	LEFT JOIN Tags ON ProjectTags.tag_id = Tags.id;';

	const projTech = db.prepare(query).all() as ProjectTag[];
	for (const project of projTech) {
		if (project.id in projects) projects[project.id].tags.push(project.tag);
		else {
			projects[project.id] = {
				id: project.id,
				title: project.title,
				description: project.description,
				tags: [project.tag],
				website: project.website,
				github: project.github,
				hasImage: project.hasImage
			};
		}
	}
	return Object.values(projects) as Project[];
}
