import {pool} from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query(`
        SELECT e.id AS employee_id, e.name AS employee_name, e.position, e.description, e.phone, e.email, 
            GROUP_CONCAT(DISTINCT s.skill ORDER BY s.skill SEPARATOR ', ') AS skills,
            GROUP_CONCAT(es.rating ORDER BY s.skill SEPARATOR ', ') AS ratings
        FROM employees e
        INNER JOIN employee_skill es ON e.id = es.employee_id
        INNER JOIN skills s ON es.skill_id = s.id
        GROUP BY e.id;
    `);

        const employees = rows.map((row) => ({
            id: row.employee_id,
            name: row.employee_name,
            position: row.position,
            description: row.description,
            phone: row.phone,
            email: row.email,
            skills: row.skills.split(", "),
            ratings: row.ratings.split(",").map(Number),
        }));

        res.json(employees);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query(
            `
        SELECT e.id, e.name, e.position, e.description, e.phone, e.email, 
            GROUP_CONCAT(s.skill ORDER BY s.skill SEPARATOR ', ') AS skills,
            GROUP_CONCAT(es.rating ORDER BY s.skill SEPARATOR ', ') AS ratings
        FROM employees e
        INNER JOIN employee_skill es ON e.id = es.employee_id
        INNER JOIN skills s ON es.skill_id = s.id
        WHERE e.id = ?
        GROUP BY e.id;
        `,
            [id]
        );

        if (result.length === 0) {
            return res
                .status(404)
                .json({message: `Employee with id ${id} not found`});
        }

        const employee = {
            id: result[0].id,
            name: result[0].name,
            position: result[0].position,
            description: result[0].description,
            phone: result[0].phone,
            email: result[0].email,
            skills: result[0].skills.split(", "),
            ratings: result[0].ratings.split(",").map(Number),
        };

        res.json(employee);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
