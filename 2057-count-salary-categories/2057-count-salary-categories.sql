WITH SalaryCounts AS (
    SELECT 
        CASE 
            WHEN income < 20000 THEN 'Low Salary'
            WHEN income BETWEEN 20000 AND 50000 THEN 'Average Salary'
            ELSE 'High Salary'
        END AS category,
        COUNT(*) AS accounts_count
    FROM Accounts
    GROUP BY 
        CASE 
            WHEN income < 20000 THEN 'Low Salary'
            WHEN income BETWEEN 20000 AND 50000 THEN 'Average Salary'
            ELSE 'High Salary'
        END
)
SELECT c.category, COALESCE(s.accounts_count, 0) AS accounts_count
FROM (VALUES ('Low Salary'), ('Average Salary'), ('High Salary')) c(category)
LEFT JOIN SalaryCounts s ON c.category = s.category;
