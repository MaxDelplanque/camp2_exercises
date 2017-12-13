--1.
SELECT first_name, last_name, salary 
FROM employees
WHERE salary < 6000;

--2.
SELECT first_name, last_name, department_id, salary  
FROM employees
WHERE salary > 8000;

--3.
SELECT first_name, last_name, department_id  
FROM employees
WHERE last_name = 'McEwen';

--4.
SELECT *  
FROM employees
WHERE department_id IS NULL;

--5.
SELECT *  
FROM departments
WHERE name = 'Marketing'
;

--6.
SELECT first_name, last_name, hire_date, salary, department_id
FROM employees
WHERE first_name NOT LIKE '%M%' 
ORDER BY department_id ASC;

--7.
SELECT *
FROM employees
WHERE (salary BETWEEN 8000 AND 12000 AND commission_pct IS NOT NULL) OR (department_id NOT IN (4,12,7) AND hire_date < '1987-06-05') ;

--8.
SELECT first_name, last_name, salary
FROM employees
WHERE commission_pct = 0;

--9.
SELECT (first_name, last_name) AS Full_Name, 
concat(phone_number, '-', email) AS Contact_Details, salary AS Remuneration
FROM employees
WHERE salary BETWEEN 9000 AND 17000;

--10.
SELECT first_name, last_name, salary
FROM employees
WHERE first_name LIKE '%m';

--11.
SELECT (first_name, last_name) AS Full_Name, salary
FROM employees
WHERE salary NOT BETWEEN 7000 AND 17000 
ORDER BY Full_Name ASC ;

--12.
SELECT (first_name, last_name) AS Full_Name, job_id, hire_date
FROM employees
WHERE hire_date BETWEEN '2007-11-05' AND '2009-11-05';

--13.
SELECT (first_name, last_name) AS Full_Name, department_id
FROM employees
WHERE department_id IN (7,9);

SELECT (first_name, last_name) AS Full_Name, department_id
FROM employees
WHERE department_id = 7 OR department_id = 9;

--14.
SELECT (first_name, last_name) AS Full_Name, salary, manager_id 
FROM employees
WHERE manager_id = 1;

--15
SELECT *
FROM employees
WHERE hire_date < '2002-06-21';

--16
SELECT (first_name, last_name) AS Full_Name, email, salary, manager_id 
FROM employees
WHERE manager_id IN (21,4,46);

--17
SELECT *
FROM employees
WHERE first_name SIMILAR TO '%(D|N|S)%'
ORDER BY salary DESC;

--18
SELECT (first_name, last_name) AS Full_Name, hire_date, commission_pct, concat(phone_number, '-', email) AS Contact_Details, salary
FROM employees
WHERE salary > 11000 OR SUBSTRING(phone_number FROM 7 FOR 1) = '3'
ORDER BY first_name DESC; 

--19
SELECT first_name, last_name, department_id
FROM employees
WHERE SUBSTRING(first_name FROM 3 FOR 1) = 's';

--20
SELECT id, first_name, job_id, department_id
FROM employees
WHERE department_id NOT IN (3,4,9);

--21
SELECT id, first_name, job_id, department_id
FROM employees
WHERE department_id IN (3,4,9);

--22
SELECT * 
FROM employees 
WHERE id IN (SELECT employee_id FROM job_history GROUP BY employee_id HAVING COUNT(employee_id) > 1);

--23
SELECT job_id, COUNT(id) AS nb_employees, SUM(salary) AS sum_salary,  
FROM employees
GROUP BY job_id;

SELECT employees.job_id, jobs.title, COUNT(*) as nb_employees, SUM(employees.salary) AS sum_salaries, (jobs.max_salary - jobs.min_salary) AS diff 
FROM employees
INNER JOIN jobs on (jobs.id = employees.job_id)
GROUP BY employees.job_id, diff, jobs.title;

--24
SELECT job_id 
FROM job_history
WHERE (end_date - start_date) > 300
GROUP BY job_id 
HAVING count(employee_id) > 1;


--25
SELECT country_id, count(*) AS nb_cities
FROM locations
GROUP BY country_id;


--1
SELECT e.first_name, e.last_name, e.department_id, d.name
FROM employees e
INNER JOIN departments d ON (e.department_id = d.id);

--2
SELECT first_name, last_name, d.name, l.city, l.state_province 
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
INNER JOIN locations l ON l.id = d.location_id;

--3
SELECT first_name, last_name, salary, j.level 
FROM employees e
INNER JOIN job_grades j ON e.salary BETWEEN j.lowest_salary AND j.highest_salary;

--4
SELECT first_name, last_name, d.id, d.name
FROM employees e
INNER JOIN departments d ON (e.department_id = d.id)
WHERE d.id IN (8,4);

--5
SELECT first_name, last_name, d.name, l.city, l.state_province 
FROM employees e
INNER JOIN departments d ON e.department_id = d.id
INNER JOIN locations l ON l.id = d.location_id
WHERE first_name LIKE '%z%';

--6
SELECT id, name, manager_id 
FROM departments;

--7
SELECT id, first_name, last_name, salary
FROM employees
WHERE salary < (SELECT salary FROM employees WHERE id = 83);

--8
SELECT e.first_name, e.last_name, manag.first_name, manag.last_name
FROM employees e
INNER JOIN employees manag ON e.manager_id = manag.id;

--9
SELECT d.name, l.city, l.state_province
FROM locations l
INNER JOIN departments d ON l.id = d.location_id ;

--10
SELECT e.first_name, e.last_name, d.id, d.name 
FROM employees e
INNER JOIN departments d ON e.department_id = d.id; 

--11
SELECT e.first_name, e.last_name, manag.first_name, manag.last_name
FROM employees e
LEFT JOIN employees manag ON e.manager_id = manag.id;

--12
SELECT e.first_name, e.last_name, e.department_id
FROM employees e
INNER JOIN employees d ON (e.department_id = d.department_id AND e.last_name = 'Taylor');

--13
SELECT j.title, d.name, (first_name, last_name) AS full_name, h.start_date
FROM jobs j
INNER JOIN job_history h ON j.id = h.job_id
INNER JOIN employees e ON h.employee_id = e.id
INNER JOIN departments d ON e.manager_id = d.id
WHERE h.start_date >= '1993-01-01' AND h.end_date <= '1997-08-31';

