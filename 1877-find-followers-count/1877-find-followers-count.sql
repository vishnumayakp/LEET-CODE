# Write your MySQL query statement below
select user_id,COUNT(follower_id) as followers_count
from Followers
Group by user_id
order by user_id