/* Write your T-SQL query statement below */
DELETE FROM Person
WHERE email IN (
    SELECT email
    FROM Person
    GROUP BY email
    HAVING COUNT(*) > 1
)
AND id NOT IN (
    SELECT MIN(id)
    FROM Person
    GROUP BY email
);

