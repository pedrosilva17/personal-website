DROP TABLE IF EXISTS Numbers;
DROP TABLE IF EXISTS Projects;
DROP TABLE IF EXISTS Technologies;
DROP TABLE IF EXISTS ProjectTechnologies;

/* Create */
CREATE TABLE Numbers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number INTEGER,
    description TEXT
);

CREATE TABLE Projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    has_image INTEGER
);

CREATE TABLE Technologies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE ProjectTechnologies (
    project_id INTEGER,
    technology_id INTEGER,
    PRIMARY KEY (project_id, technology_id),
    FOREIGN KEY (project_id) REFERENCES Projects(id),
    FOREIGN KEY (technology_id) REFERENCES Technologies(id)
);

/* Populate */
INSERT INTO Projects (title, description, has_image) VALUES
    ('Project 1', 'Description 1', 0),
    ('Project 2', 'Description 2', 0),
    ('Project 3', 'Description 3', 0),
    ('Project 4', 'Description 4', 0),
    ('Project 5', 'Description 5', 0),
    ('Project 6', 'Description 6', 0),
    ('Project 7', 'Description 7', 0),
    ('Project 8', 'Description 8', 0);

INSERT INTO Technologies (name) VALUES
    ('JavaScript'),
    ('TypeScript'),
    ('Python'),
    ('Java'),
    ('SQL'),
    ('HTML'),
    ('CSS');

INSERT INTO ProjectTechnologies (project_id, technology_id) VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (3, 1),
    (3, 2),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 2),
    (8, 3);

