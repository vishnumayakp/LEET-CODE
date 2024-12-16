SELECT 
    a.product_id, 
    COALESCE(
        ROUND(
            SUM(CAST(a.price * u.units AS DECIMAL(10, 2))) 
            / NULLIF(SUM(CAST(u.units AS DECIMAL(10, 2))), 0), 
        2), 
        0
    ) AS average_price
FROM 
    Prices a 
LEFT JOIN 
    UnitsSold u 
    ON a.product_id = u.product_id 
    AND u.purchase_date BETWEEN a.start_date AND a.end_date
GROUP BY 
    a.product_id;
