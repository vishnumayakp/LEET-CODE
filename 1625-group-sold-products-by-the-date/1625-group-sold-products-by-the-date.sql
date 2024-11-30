/* Write your T-SQL query statement below */
SELECT 
    sell_date, 
    COUNT(distinct product) AS num_sold, 
    STRING_AGG(product, ',') WITHIN GROUP (ORDER BY product) AS products
FROM (
    select distinct sell_date , product from Activities
) as distinct_Sale
GROUP BY 
    sell_date
ORDER BY 
    sell_date;
    

    
