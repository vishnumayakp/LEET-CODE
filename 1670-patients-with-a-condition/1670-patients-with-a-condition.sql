/* Write your T-SQL query statement below */
-- select * from Patients where conditions LIKE '% DIAB1 %' OR conditions LIKE '% DIAB1' OR 
-- conditions LIKE 'DIAB1 %' OR conditions = 'DIAB1' 

SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions LIKE '%DIAB1%' AND 
      (conditions LIKE '% DIAB1%' OR conditions LIKE 'DIAB1%')

