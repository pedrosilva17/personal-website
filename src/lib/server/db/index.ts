import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import type { NumberInfo, Project, ProjectTechnology } from './types.ts';

const db = new Database(DB_PATH, { verbose: console.log });

export function getRandomNumber(): NumberInfo {
	const query = 'SELECT * FROM Numbers ORDER BY RANDOM() LIMIT 1;';
	const num = db.prepare(query).get();
	return num as NumberInfo;
}

export function getProjects(): Project[] {
	const projects: Record<number, Project> = {};
	const query = 'SELECT Projects.id AS id, Projects.title AS title, Projects.description AS description, \
	Technologies.name AS technology FROM Projects \
	LEFT JOIN ProjectTechnologies ON Projects.id = ProjectTechnologies.project_id \
	LEFT JOIN Technologies ON ProjectTechnologies.technology_id = Technologies.id;'

	const projTech = db.prepare(query).all() as ProjectTechnology[];
	for (const project of projTech) {
		if (project.id in projects) projects[project.id].technologies.push(project.technology)
		else {
			projects[project.id] = {
				id: project.id,
				title: project.title, 
				description: project.description,
				technologies: [project.technology]
			}
		}
	}
	console.log(Object.values(projects));
	return Object.values(projects) as Project[];
}
