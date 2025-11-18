CREATE TABLE IF NOT EXISTS users(
    ID UUID PRIMARY KEY,
    username VARCHAR(50)  NOT NULL UNIQUE,
    email VARCHAR(100)  NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    vbucks_balance DECIMAL(10, 2) DEFAULT 10000.00,
    created_at DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS purchases(
    ID UUID PRIMARY KEY,
    user_id UUID REFERENCES users(ID),
    price_paid DECIMAL(10, 2) NOT NULL,
    is_owned BOOLEAN DEFAULT TRUE,
    created_at DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS items(
    ID UUID PRIMARY KEY,
    purchase_id UUID REFERENCES purchases(ID),
    created_at DATE NOT NULL
);