INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (1,'New York City Marathon - Men','Maxime',5,1,'02:10:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (2,'New York City Marathon - Men','Fabien',4,2,'02:12:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (3,'New York City Marathon - Men','Martin',3,3,'02:14:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (4,'New York City Marathon - Men','Julien',2,4,'02:16:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (5,'New York City Marathon - Men','Thierry',1,5,'02:18:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (6,'New York City Marathon - Women','Chloé',11,1,'02:22:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (7,'New York City Marathon - Men','Hamza',12,6,'02:24:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (8,'New York City Marathon - Men','Dominique',13,7,'02:26:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (9,'New York City Marathon - Men','Romuald',14,8,'02:28:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (10,'New York City Marathon - Men','Vincent',115,9,'02:30:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (11,'New York City Marathon - Men','Koen Naert',201,10,'02:30:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (12,'New York City Marathon - Men','Alex',116,11,'02:32:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (13,'New York City Marathon - Men','Florent',202,12,'02:32:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (14,'New York City Marathon - Men','Michael',117,13,'02:34:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (15,'New York City Marathon - Men','Hamid',203,14,'02:34:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (16,'New York City Marathon - Women','Laureleine',118,2,'02:36:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (17,'New York City Marathon - Men','Arnaud',204,15,'02:36:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (18,'New York City Marathon - Men','Kevin',119,16,'02:38:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (19,'New York City Marathon - Men','Romain',205,17,'02:38:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (20,'New York City Marathon - Men','Damien',10,18,'02:40:00',2017);
INSERT INTO marathon (id,race_name,runner_name,runner_bib,runner_final_position,runner_racing_time,date_start_race) VALUES (21,'New York City Marathon - Women','Virginie',127,3,'02:50:00',2017);

SELECT runner_name FROM marathon WHERE race_name ='New York City Marathon - Women' AND date_start_race = 2017;

SELECT runner_name FROM marathon WHERE race_name ='New York City Marathon - Men' AND date_start_race = 2017 AND runner_final_position <=3;

SELECT * FROM marathon WHERE runner_racing_time < '2:15:00' AND runner_bib < 100;

SELECT * FROM marathon WHERE runner_racing_time <= '2:35:00' AND runner_bib > 100 ORDER BY runner_bib ASC;

SELECT * FROM marathon WHERE runner_name IN (SELECT runner_name FROM marathon WHERE runner_racing_time <= '2:35:00' AND runner_bib > 100) ORDER BY runner_racing_time ASC;

SELECT runner_bib, runner_name, runner_final_position,runner_racing_time FROM marathon WHERE runner_racing_time <= (SELECT runner_racing_time FROM marathon WHERE runner_name = 'Koen Naert') AND runner_name != 'Koen Naert' ORDER BY runner_racing_time;



