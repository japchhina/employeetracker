use employees;

INSERT INTO department
    (name)
VALUES
    ('sales'),
    ('engineering'),
    ('finance'),
    ('legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 340000, 2),
    ('Financial Analyst', 130000, 3),
    ('Lawyer', 250000, 4);

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ('Jane', 'Doe', 1),
    ('Ricky', 'Rane',2),
    ('Leila', 'Mire', 3),
    ('Dave', 'Lane', 4),
    
