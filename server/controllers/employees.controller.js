import {pool} from "../db.js";

export const getEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query(
            `
        SELECT e.id, e.name, e.position, e.description, e.phone, e.email, e.password,
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
            password: result[0].password,
            skills: result[0].skills.split(", "),
            ratings: result[0].ratings.split(",").map(Number),
        };

        res.json(employee);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const validateForm = async (req, res) => {
    try {
        const {email, password} = req.body;
        const [r]= await pool.query(`
        SELECT id FROM employees WHERE email = ? AND password = ?
        `, [email, password]
        );
        res.json(r[0]);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
