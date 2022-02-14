DROP DATABASE IF EXISTS casaka_db_oldversion;
CREATE DATABASE  IF NOT EXISTS casaka_db_oldversion;
USE casaka_db_oldversion;


DROP TABLE IF EXISTS national_teams;
CREATE TABLE national_teams (
   id  INT NOT NULL AUTO_INCREMENT,
   country VARCHAR(200) NOT NULL,
   name_national_team VARCHAR(200),
   PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS leagues;
CREATE TABLE leagues (
   id INT NOT NULL AUTO_INCREMENT,
   name_league VARCHAR(200) NOT NULL,
   country VARCHAR(200) NOT NULL,
   continent VARCHAR(200),
   PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS league_championships;
CREATE TABLE league_championships (
   id INT NOT NULL AUTO_INCREMENT,
   year_season INT NOT NULL,
   league INT NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (league) REFERENCES leagues (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS teams;
CREATE TABLE teams (
   id INT NOT NULL AUTO_INCREMENT,
   name_team VARCHAR(200) NOT NULL,
   country VARCHAR(200) NOT NULL,
   PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS championship_teams;
CREATE TABLE championship_teams (
   id INT NOT NULL AUTO_INCREMENT,
   league_championship INT NOT NULL,
   team INT NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (team) REFERENCES teams (id),
   FOREIGN KEY (league_championship) REFERENCES league_championships (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS user_categories;
CREATE TABLE user_categories (
   id INT NOT NULL AUTO_INCREMENT,
   name_category VARCHAR(100) NOT NULL,
   category_description VARCHAR(300),
   PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



DROP TABLE IF EXISTS users;
CREATE TABLE users (
   email VARCHAR(100) NOT NULL,
   passwd TEXT NOT NULL,
   fist_name VARCHAR(200) NOT NULL,
   last_name VARCHAR(200) NOT NULL,
   country VARCHAR(200) NOT NULL,
   face_pic TEXT NOT NULL,
   category INT NOT NULL,
   fav_national_team INT,
   fav_team INT,
   adult TINYINT,
   PRIMARY KEY (email),
   FOREIGN KEY (category) REFERENCES user_categories (id),
   FOREIGN KEY (fav_national_team) REFERENCES national_teams (id),
   FOREIGN KEY (fav_team) REFERENCES teams (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;




DROP TABLE IF EXISTS brands;
CREATE TABLE brands (
   id INT NOT NULL AUTO_INCREMENT,
   name_brand  VARCHAR(200) NOT NULL,
   country_origin VARCHAR(200),
   PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS product_categories;
CREATE TABLE product_categories (
   id INT NOT NULL AUTO_INCREMENT,
   name_prod_category TEXT NOT NULL,
   description_prod_category TEXT,
   PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
   id INT NOT NULL AUTO_INCREMENT,
   category INT NOT NULL,
   name_product VARCHAR(200) NOT NULL,
   brand INT NOT NULL,
   description_product TEXT NOT NULL,
   year_created INT,
   national_team INT,
   championship_team INT,
   features_style TEXT,
   features_gender TEXT,
   features_use TEXT,
   features_others TEXT,
   regular_price NUMERIC NOT NULL,
   special_price NUMERIC,
   colors_available TEXT NOT NULL,
   caption TEXT,
   rating_value NUMERIC,
   rating_num_comments INT,
   returnable TINYINT,
   delivery_time VARCHAR(200),
   sizes_available TEXT,
   q_available INT,
   PRIMARY KEY (id),
   FOREIGN KEY (category) REFERENCES product_categories (id),
   FOREIGN KEY (brand) REFERENCES brands (id),
   FOREIGN KEY (national_team) REFERENCES national_teams (id),
   FOREIGN KEY (championship_team) REFERENCES championship_teams (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS multimedia_produt;
CREATE TABLE multimedia_produt (
   id INT NOT NULL AUTO_INCREMENT,
   product INT NOT NULL,
   media_type VARCHAR(200) NOT NULL,
   media_description TEXT NOT NULL,
   media_name TEXT NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (product) REFERENCES products (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS product_inventory;
CREATE TABLE product_inventory (
   id INT NOT NULL AUTO_INCREMENT,
   product_id INT NOT NULL,
   category INT NOT NULL,
   size VARCHAR(100) NOT NULL,
   product_weight FLOAT(2) NOT NULL,
   color TEXT NOT NULL,
   warehouse TEXT NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (product_id) REFERENCES products (id),
   FOREIGN KEY (category) REFERENCES product_categories (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS product_ratings;
CREATE TABLE product_ratings (
   id INT NOT NULL AUTO_INCREMENT,
   product_id INT NOT NULL,
   user_rating VARCHAR(100) NOT NULL,
   rating INT NOT NULL,
   date_rating TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (id),
   FOREIGN KEY (product_id) REFERENCES products (id),
   FOREIGN KEY (user_rating) REFERENCES users (email)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS banks;
CREATE TABLE banks (
   id INT NOT NULL AUTO_INCREMENT,
   bank_name TEXT NOT NULL,
   country VARCHAR(200) NOT NULL,
   PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS installments_schemes;
CREATE TABLE installments_schemes (
   id INT NOT NULL AUTO_INCREMENT,
   bank_id INT NOT NULL,
   installments INT NOT NULL,
   fixed TINYINT NOT NULL,
   interest_rate FLOAT(2),
   PRIMARY KEY (id),
   FOREIGN KEY (bank_id) REFERENCES banks (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS installments_products;
CREATE TABLE installments_products (
   id INT NOT NULL AUTO_INCREMENT,
   plan_name VARCHAR(300) NOT NULL,
   installments_id INT NOT NULL,
   product_id INT NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (product_id) REFERENCES products (id),
   FOREIGN KEY (installments_id) REFERENCES installments_schemes (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS shopping_cart;
CREATE TABLE shopping_cart (
   id INT NOT NULL AUTO_INCREMENT,
   email_user VARCHAR(100) NOT NULL,
   q_products INT,
   total_price NUMERIC,
   PRIMARY KEY (id),
   FOREIGN KEY (email_user) REFERENCES users (email)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS shopping_cart_content;
CREATE TABLE shopping_cart_content (
   id  INT NOT NULL AUTO_INCREMENT,
   id_product_in_inventory INT NOT NULL,
   shopping_cart INT NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (id_product_in_inventory) REFERENCES product_inventory (id),
   FOREIGN KEY (shopping_cart) REFERENCES shopping_cart (id)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/* LOCK TABLES user_categories WRITE;*/

INSERT INTO user_categories VALUES (DEFAULT,"admin",NULL);

/* LOCK TABLES users WRITE;*/

INSERT INTO users VALUES ("tomasheguy@gmail.com","$2a$10$P4Y.rnn8NQ9YXbz6DoxEN.SywATZpuSgf2XBx206Oo21SOSrYM8lu","Tomas","Heguy","Argentina","foto-1639325362742.jpeg",44,NULL,NULL,1), ("angeluisq96@gmail.com","$2a$10$P4Y.rnn8NQ9YXbz6DoxEN.SywATZpuSgf2XBx206Oo21SOSrYM8lu","Angel","Luis","Venezuela","foto-1639325362742.jpeg",44,NULL,NULL,1), ("ing.rainero@gmail.com","$2a$10$P4Y.rnn8NQ9YXbz6DoxEN.SywATZpuSgf2XBx206Oo21SOSrYM8lu","Matias","Rainero","Argentina","foto-1639325362742.jpeg",44,NULL,NULL,1), ("deniijang@gmail.com","$2a$10$P4Y.rnn8NQ9YXbz6DoxEN.SywATZpuSgf2XBx206Oo21SOSrYM8lu","Denis","Jang","Argentina","foto-1639325362742.jpeg",44,NULL,NULL,1),("hlbortoluzzi@gmail.com","$2a$10$P4Y.rnn8NQ9YXbz6DoxEN.SywATZpuSgf2XBx206Oo21SOSrYM8lu","Leandro","Bortoluzzi","Argentina","foto-1639325362742.jpeg",44,NULL,NULL,1);



