/* Write your T-SQL query statement below */

select Max(salary) As SecondHighestSalary  from Employee 
where salary<(select Max(salary) from Employee)