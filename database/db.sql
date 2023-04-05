-- Table employees
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    position VARCHAR(50),
    description TEXT,
    phone VARCHAR(20),
    email VARCHAR(50),
    password VARCHAR(50)
);

-- Table skills
CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill VARCHAR(50)
);

-- Table employee_skill
CREATE TABLE employee_skill (
    id INT AUTO_INCREMENT,
    employee_id INT,
    skill_id INT,
    rating INT,
    PRIMARY KEY (id, employee_id, skill_id),
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
);

INSERT INTO employees (name, position, description, phone, email, password) VALUES
('John Smith', 'Software Developer', 'Experienced developer with a background in web applications', '555-1234', 'john.smith@example.com', 'password123'),
('Jane Doe', 'Data Analyst', 'Expert in data analysis and visualization', '555-5678', 'jane.doe@example.com', 'password456'),
('Mark Johnson', 'Database Administrator', 'Specialist in database management and optimization', '555-7890', 'mark.johnson@example.com', 'password789'),
('Sarah Lee', 'Web Designer', 'Creative designer with expertise in web and UI design', '555-2345', 'sarah.lee@example.com', 'passwordabc');

INSERT INTO skills (skill) VALUES
('Web development'),
('Java programming'),
('Data visualization'),
('MySQL administration'),
('Cloud computing'),
('UI design'),
('Data analysis'),
('Project management'),
('Team leadership');

-- John Smith
INSERT INTO employee_skill (employee_id, skill_id, rating) VALUES
(1, 1, 7),
(1, 2, 8),
(1, 3, 9),
(1, 4, 8),
(1, 5, 7),
(1, 8, 6),
(1, 9, 7);

-- Jane Doe
INSERT INTO employee_skill (employee_id, skill_id, rating) VALUES
(2, 3, 9),
(2, 7, 8),
(2, 8, 7),
(2, 9, 9),
(2, 4, 6),
(2, 1, 5),
(2, 5, 8);

-- Mark Johnson
INSERT INTO employee_skill (employee_id, skill_id, rating) VALUES
(3, 4, 9),
(3, 2, 8),
(3, 5, 7),
(3, 3, 6),
(3, 1, 8),
(3, 6, 7),
(3, 8, 9);

-- Sarah Lee
INSERT INTO employee_skill (employee_id, skill_id, rating) VALUES
(4, 1, 8),
(4, 5, 7),
(4, 6, 9),
(4, 2, 7),
(4, 3, 8),
(4, 8, 7),
(4, 9, 8);

