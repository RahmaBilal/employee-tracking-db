
INSERT INTO department (name)
VALUES 
        ("Key Creative Team"),
        ("Production"),
        ("Script"),
        ("Location"),
        ("Camera"),
        ("Sound"),
        ("Hair & Makeup"),
        ("Wardrobe"),
        ("Media");
-- SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES
        ("Producer", 135000, 1),
        ("Director", 22000, 4),
        ("Screenwriter", 32000, 3),
        ("Script Supervisor", 21000, 4),
        ("Stunt Coordinator", 19000, 2),
        ("Script Editor", 22000, 3),
        ("Camera Operator", 25000, 2),
        ("Costume Designer", 23000, 4),
        ("Intern", 20000, 1);


-- SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
        ("Harry", "Potter", 1, NULL),
        ("Hermione", "Granger", 2, NULL),
        ("Ron", "Weasley", 3, 1),
        ("Draco", "Malfoy", 4, 1),
        ("Rubeus", "Hagrid", 5, 1),
        ("Lord", "Voldemort", 6, 1),
        ("Sirius", "Black", 2, NULL);

-- SELECT * FROM employee;