CREATE TABLE if NOT EXISTS Users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()

);


CREATE TABLE IF NOT EXISTS Orders(
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES Users(id),
    product_name VARCHAR(200),
    amount NUMERIC,
    created_at TIMESTAMP DEFAULT NOW()
);




CREATE INDEX IF NOT EXISTS idx_users_email ON Users(email);
CREATE INDEX IF  NOT EXISTS idx_order_user_id ON Orders(user_id);



INSERT INTO Users(name,email,password) VALUES ('praveen','xyz@gmail.com',"password");