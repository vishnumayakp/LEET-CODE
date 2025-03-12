/* Write your T-SQL query statement below */
-- UPDATE Users SET name = CONCAT(UPPER(LEFT(name,1)),
-- LOWER(SUBSTRING(name,2))
-- );

SELECT user_id, 
       STUFF(LOWER(name), 1, 1, UPPER(LEFT(name, 1))) AS name
FROM Users
ORDER BY user_id;


