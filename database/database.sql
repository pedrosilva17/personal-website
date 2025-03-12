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
    website TEXT,
    github TEXT,
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
INSERT INTO Projects (title, description, website, github, has_image) VALUES
    ('Eventacle', "An event prediction website with no money betting involved.", 'https://eventacle.frompedrosilva.com', 'https://github.com/pedrosilva17/eventacle', 1),
    ('WordleLife', "A wrestling-themed, 'Wordle'-like game made with Nuxt.", 'https://wordlelife.frompedrosilva.com', 'https://github.com/pedrosilva17/wordlelife', 1),
    ('Personal Website', "My personal website, where you're reading this from.", 'https://frompedrosilva.com','https://github.com/pedrosilva17/personal-website', 1),
    ('Bot of Greed', 'A Discord bot which displays and uses information about Yu-Gi-Oh cards.', null, 'https://github.com/pedrosilva17/bot-of-greed', 1),
    ('FEUPZero', 'A three.js car racing game for one player.', 'https://race.frompedrosilva.com','https://github.com/pedrosilva17/sgi-2023/tree/main/tp3', 1),
    ('Flying Creature Playground', 'A WebGL scene featuring a controllable creature that throws eggs.', 'https://bird.frompedrosilva.com', 'https://github.com/pedrosilva17/cg-2023/tree/master/project', 1),
    ('Earworm', 'A web prototype for a music store.', null, 'https://github.com/pedrosilva17/feup-lbaw-proj', 1),
    ('Bound', 'A recreation of the board game Bound for one or two players.', null, 'https://github.com/pedrosilva17/bound-ia-proj-1', 1),
    ('Easy Wallpaper', 'A simple terminal program to create wallpapers with image patterns.', null, 'https://github.com/pedrosilva17/easy-wallpaper', 1),
    ('Qawale', 'A recreation of the board game Qawale in the terminal using functional programming.', null, 'https://github.com/pedrosilva17/feup-pfl-qawale', 1),
    ('Disease Search Engine', 'A search engine for querying disease information, displayed in a map view.', null, 'https://github.com/pedrosilva17/feup-pri-2023', 1);

INSERT INTO Tags (name) VALUES
    ('Personal'),
    ('University'),
    ('Web'),
    ('Bot'),
    ('Tool'),
    ('Game');

INSERT INTO ProjectTags (project_id, tag_id) VALUES
    (1, 1),
    (1, 3),
    (2, 1),
    (2, 3),
    (2, 6),
    (3, 1),
    (3, 3),
    (4, 1),
    (4, 4),
    (5, 2),
    (5, 6),
    (6, 2),
    (6, 6),
    (7, 2),
    (7, 3),
    (8, 2),
    (8, 6),
    (9, 1),
    (9, 5),
    (10, 2),
    (10, 6),
    (11, 2),
    (11, 3);

