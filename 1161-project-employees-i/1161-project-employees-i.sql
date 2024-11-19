/* Write your T-SQL query statement below */

ALTER TABLE EMPLOYEE
ALTER COLUMN experience_years DECIMAL(5,2)
SELECT Project.project_id,CAST(AVG(Employee.experience_years)AS DECIMAL(10,2)) AS average_years
FROM Project JOIN Employee ON Project.employee_id = Employee.employee_id
GROUP BY Project.project_id






