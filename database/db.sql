-- Table employees
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    position VARCHAR(50),
    description TEXT,
    phone VARCHAR(20),
    email VARCHAR(50)
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

-- DATA
-- Insertar empleados
INSERT INTO employees (name, position, description, phone, email) VALUES
('John Smith', 'Software Developer', 'Experienced developer with a background in web applications', '555-1234', 'john.smith@example.com'),
('Jane Doe', 'Database Administrator', 'Skilled administrator with experience in MySQL and Oracle', '555-5678', 'jane.doe@example.com'),
('Bob Johnson', 'Network Administrator', 'Expert in network infrastructure and security', '555-9012', 'bob.johnson@example.com'),
('Alice Williams', 'Data Analyst', 'Analytical thinker with experience in data visualization and statistical analysis', '555-3456', 'alice.williams@example.com');

-- Insertar habilidades
INSERT INTO skills (skill) VALUES
('Java programming'),
('Python programming'),
('Web development'),
('MySQL administration'),
('Data visualization'),
('Network security'),
('Cloud computing'),
('Project management');

-- Insertar empleado_habilidad
INSERT INTO employee_skill (employee_id, skill_id, rating) VALUES
(1, 1, 8),
(1, 3, 7),
(1, 4, 9),
(1, 5, 7),
(1, 7, 6),
(2, 2, 9),
(2, 4, 8),
(2, 5, 7),
(2, 6, 8),
(2, 8, 7),
(3, 3, 9),
(3, 6, 8),
(3, 7, 9),
(3, 8, 8),
(4, 1, 7),
(4, 2, 8),
(4, 3, 7),
(4, 5, 9),
(4, 6, 8),
(4, 7, 7);

-- QUERIES
