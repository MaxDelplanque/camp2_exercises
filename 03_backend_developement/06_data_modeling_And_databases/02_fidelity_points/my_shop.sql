SELECT * FROM purchases ORDER BY purchase_date ASC LIMIT 3;

SELECT * FROM purchases WHERE purchase_date < '2017-10-11' ORDER BY purchase_date DESC;

SELECT client_name, purchase_date FROM purchases WHERE purchase_date < CURRENT_DATE - INTERVAL '2 months' ORDER BY purchase_date DESC;

SELECT DISTINCT ON (client_name) client_name FROM purchases WHERE client_name IN (SELECT client_name FROM purchases WHERE purchase_date < '2017-11-11') AND number_of_items > 4;

SELECT client_name FROM purchases ORDER BY euros_spent DESC LIMIT 1;

SELECT client_name FROM purchases WHERE number_of_items = 1  ORDER BY euros_spent DESC LIMIT 1;

SELECT * FROM purchases WHERE purchase_date BETWEEN '2017-06-21' AND '2017-09-23';

SELECT SUM(euros_spent) FROM purchases WHERE purchase_date BETWEEN '2017-06-21' AND '2017-09-23';






