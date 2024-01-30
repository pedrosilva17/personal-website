DROP TABLE IF EXISTS Numbers;
DROP TABLE IF EXISTS Projects;
DROP TABLE IF EXISTS Tags;
DROP TABLE IF EXISTS ProjectTags;

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
    link TEXT,
    has_image INTEGER
);

CREATE TABLE Tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE ProjectTags (
    project_id INTEGER,
    tag_id INTEGER,
    PRIMARY KEY (project_id, tag_id),
    FOREIGN KEY (project_id) REFERENCES Projects(id),
    FOREIGN KEY (tag_id) REFERENCES Tags(id)
);

/* Populate */
INSERT INTO Projects (title, description, link, has_image) VALUES
    ('Project 1', 'Description 1', 'https://www.google.com/', 0),
    ('Project 2', 'Description 2', 'https://www.google.com/', 0),
    ('Project 3', 'Description 3', 'https://www.google.com/', 0),
    ('Project 4', 'Description 4', 'https://www.google.com/', 0),
    ('Project 5', 'Description 5', 'https://www.google.com/', 0),
    ('Project 6', 'Description 6', 'https://www.google.com/', 0),
    ('Project 7', 'Description 7', 'https://www.google.com/', 0),
    ('Project 8', 'Description 8', 'https://www.google.com/', 0);

INSERT INTO Tags (name) VALUES
    ('JavaScript'),
    ('TypeScript'),
    ('Python'),
    ('Java'),
    ('SQL'),
    ('HTML'),
    ('CSS');

INSERT INTO ProjectTags (project_id, tag_id) VALUES
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

