
INSERT INTO department (name)
VALUES 
        ("IT"),
        ("Customer Service"),
        ("Retail"),
        ("Human Resources");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES
        ("Manager", 135000, 1),
        ("HR Officer", 22000, 4),
        ("Intern", 20000, 1);
        ("Data Analyst", 32000, 3),
        ("Retail Assitant", 21000, 4),
        ("Customer Service Assistant", 19000, 2)


SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
        ("Harry", "Potter", 1, 1),
        ("Hermione", "Granger", 2, NULL),
        ("Ron", "Weasley", 3, 3),
        ("Draco", "Malfoy", 4, 5),
        ("Rubeus", "Hagrid", 5, NULL),
        ("Lord", "Voldemort", 6, 3),
        ("Sirius", "Black", 7, NULL);

SELECT * FROM employee;