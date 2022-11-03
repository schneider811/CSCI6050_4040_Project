DROP DATABASE IF EXISTS `CSCI_6050_4050_TeamB9`;
CREATE DATABASE `CSCI_6050_4050_TeamB9`; 
USE `CSCI_6050_4050_TeamB9`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE movie(
  movie_id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  duration time NOT NULL,
  category varchar(50) NOT NULL,
  cast TEXT NOT NULL,
  director varchar(50) NOT NULL,
  producer TEXT NOT NULL,
  synopsis TEXT NOT NULL,
  reviews TEXT NOT NULL,
  trailerpic varchar(50) NOT NULL,
  trailer_video varchar(200) NOT NULL,
  rating varchar(4) NOT NULL,
  PRIMARY KEY (movie_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO movie VALUES (1,'Lord of the Rings','3:12:30','Fantasy','Sean AStin, Vigo Mortenson, Elijah Wood, Orlando Bloom','Peter Jackson','Harvey Weinstein','A Hobbit goes to destroy the ring of power','five out of five', 'this is a picture link', 'this is a trailer link', 'PG13');

CREATE TABLE showroom(
  room_id int NOT NULL AUTO_INCREMENT,
  seats int NOT NULL,
  PRIMARY KEY (room_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE theater(
  theater_id int NOT NULL AUTO_INCREMENT,
  address TEXT NOT NULL,
  showrooms int NOT NULL,
  room_id int NOT NULL,
  PRIMARY KEY (theater_id),
  FOREIGN KEY (room_id) REFERENCES showroom(room_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE seat(
  seat_id int NOT NULL AUTO_INCREMENT,
  room_id int NOT NULL,
  PRIMARY KEY (seat_id),
  FOREIGN KEY (room_id) REFERENCES showroom(room_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE ticket_type(
  type_id int NOT NULL AUTO_INCREMENT,
  type_ticket TEXT not null,
  PRIMARY KEY (type_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO ticket_type VALUES (1, 'adult');
INSERT INTO ticket_type VALUES (2, 'senior');
INSERT INTO ticket_type VALUES (3, 'child');

CREATE TABLE accounttype(
  acc_type_id int NOT NULL AUTO_INCREMENT,
  acc_type text NOT NULL,
  PRIMARY KEY (acc_type_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO accounttype VALUES (1, 'administrator');
INSERT INTO accounttype VALUES (2, 'customer');

CREATE TABLE accountstatus(
  status_id int NOT NULL AUTO_INCREMENT,
  acc_status text NOT NULL,
  PRIMARY KEY (status_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO accountstatus VALUES (1, 'active');
INSERT INTO accountstatus VALUES (2, 'inactive');

CREATE TABLE users(
  user_id int NOT NULL AUTO_INCREMENT,
  first_name TEXT not null,
  last_name TEXT not null,
  phone int not null,
  email TEXT not null,
  status_id int not null,
  acc_type_id int not null,
  PRIMARY KEY (user_id),
  foreign key (status_id) references accountstatus(status_id),
  foreign key (acc_type_id) references accounttype(acc_type_id)  
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE paymentcard(
  payment_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  cardnumber int not null,
  billing_add text not null,
  exp_date text not null,
  PRIMARY KEY (payment_id)
  foreign key (user_id) references users(user_id),
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE promotion(
  promo_id int NOT NULL AUTO_INCREMENT,
  promo_code text NOT NULL,
  startdate date not null,
  enddate date not null,
  percentoff int not null,
  PRIMARY KEY (promo_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE ticket(
  ticket_id int NOT NULL AUTO_INCREMENT,
  type_id int NOT NULL,
  seat_id int NOT NULL,
  booking_id int not null,
  PRIMARY KEY (ticket_id),
  FOREIGN KEY (type_id) REFERENCES ticket_type(type_id),
  FOREIGN KEY (seat_id) REFERENCES seat(seat_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE movie_show(
  show_id int NOT NULL AUTO_INCREMENT,
  dates varchar(50) NOT NULL,
  times time NOT NULL,
  movie_id int NOT NULL,
  room_id int NOT NULL,
  PRIMARY KEY (show_id),
  FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
  FOREIGN KEY (room_id) REFERENCES showroom(room_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE booking(
  booking_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  show_id int NOT NULL,
  total_price int not null,
  payment_id int not null,
  promo_id int,
  ticket_id int,
  PRIMARY KEY (booking_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (show_id) REFERENCES movie_show(show_id),
  foreign key (payment_id) references paymentcard(payment_id),
  foreign key (promo_id) references promotion(promo_id),
  foreign key (ticket_id) references ticket(ticket_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;






