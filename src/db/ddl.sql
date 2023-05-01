create database db_amasia_fide;


create table users
(
    user_id        bigserial primary key not null,
    first_name     varchar(250)          not null,
    middle_name    varchar(250),
    last_name      varchar(250)          not null,
    citizen_number char(11)              not null,
    email          varchar(250)          not null unique,
    phone          char(17)              not null unique,
    password       varchar(200)          not null,
    is_active      boolean                        default (true),
    created_at     timestamp             not null default (current_timestamp),
    updated_at     timestamp             not null default (current_timestamp)
);

create table cities
(
    city_id    serial primary key,
    name       varchar(90) not null unique,
    created_at timestamp   not null default (current_timestamp),
    updated_at timestamp   not null default (current_timestamp)
);

create table districts
(
    district_id serial primary key,
    name        varchar(90) not null,
    created_at  timestamp   not null default (current_timestamp),
    updated_at  timestamp   not null default (current_timestamp)
);

create table addresses
(
    address_id  bigserial primary key,
    name        varchar(90)  not null,
    line        varchar(500) not null,
    city_id     int          not null references cities (city_id) on delete restrict on update cascade,
    district_id int          not null references districts (district_id) on delete restrict on update cascade,
    user_id     bigint       not null references users (user_id) on delete restrict on update cascade,
    created_at  timestamp    not null default (current_timestamp),
    updated_at  timestamp    not null default (current_timestamp)
);

create table roles
(
    role_id    serial primary key,
    role       varchar(50) not null unique,
    created_at timestamp   not null default (current_timestamp),
    updated_at timestamp   not null default (current_timestamp)
);

create table user_roles
(
    user_role_id bigserial primary key,
    role_id      int       not null references roles (role_id) on delete restrict on update cascade,
    user_id      bigint    not null references users (user_id) on delete restrict on update cascade,
    created_at   timestamp not null default (current_timestamp),
    updated_at   timestamp not null default (current_timestamp),
    unique (role_id, user_id)
);

create table categories
(
    category_id serial primary key,
    name        varchar(100) not null,
    description varchar(300),
    created_at  timestamp    not null default (current_timestamp),
    updated_at  timestamp    not null default (current_timestamp)
);

create table products
(
    product_id    bigserial primary key,
    code          char(36)         not null unique,
    name          varchar(100)     not null,
    description   varchar(300),
    price         money            not null default (0),
    discount_rate double precision not null default (0.0),
    category_id   int              not null references categories (category_id) on delete restrict on update cascade,
    created_at    timestamp        not null default (current_timestamp),
    updated_at    timestamp        not null default (current_timestamp)
);

create table product_images
(
    product_image_id bigserial primary key,
    url              text      not null,
    alt_text         text,
    product_id       bigint    not null references products (product_id) on delete cascade on update cascade,
    created_at       timestamp not null default (current_timestamp),
    updated_at       timestamp not null default (current_timestamp)
);

create table product_details
(
    product_detail_id bigserial primary key,
    attribute_name    varchar(500),
    attribute_value   varchar(500),
    product_id        bigint    not null references products (product_id) on delete cascade on update cascade,
    created_at        timestamp not null default (current_timestamp),
    updated_at        timestamp not null default (current_timestamp)
);

create table product_stocks
(
    product_detail_id bigserial primary key,
    quantity          double precision not null,
    product_id        bigint           not null references products (product_id) on delete cascade on update cascade,
    created_at        timestamp        not null default (current_timestamp),
    updated_at        timestamp        not null default (current_timestamp)
);

create table product_reviews
(
    product_review_id bigserial primary key,
    rating            int       not null check (rating >= 1 and rating <= 5),
    comment           text,
    user_id           bigint    not null references users (user_id) on delete restrict on update cascade,
    product_id        bigint    not null references products (product_id) on delete restrict on update cascade,
    created_at        timestamp not null default (current_timestamp),
    updated_at        timestamp not null default (current_timestamp)
);

create table discounts
(
    discount_id   serial primary key,
    code          varchar(36)      not null unique,
    start_date    date             not null,
    end_date      date             not null,
    discount_rate double precision not null check (discount_rate >= 0 and discount_rate <= 1),
    product_id    bigint references products (product_id),
    category_id   int references categories (category_id),
    created_at    timestamp        not null default (current_timestamp),
    updated_at    timestamp        not null default (current_timestamp)
);


create table shopping_carts
(
    shopping_cart_id bigserial primary key,
    user_id          bigint    not null references users (user_id) on delete restrict on update cascade,
    created_at       timestamp not null default (current_timestamp),
    updated_at       timestamp not null default (current_timestamp)
);

create table shopping_cart_items
(
    shopping_cart_item_id bigserial primary key,
    quantity              double precision not null,
    shopping_cart_id      bigint           not null references shopping_carts (shopping_cart_id) on delete cascade on update cascade,
    product_id            bigint           not null references products (product_id) on delete restrict on update cascade,
    created_at            timestamp        not null default (current_timestamp),
    updated_at            timestamp        not null default (current_timestamp)
);

create type orderstatus as enum ('in preparation', 'in cargo', 'delivered', 'canceled');

create table payment_methods
(
    payment_method_id serial primary key,
    name              varchar(50) not null,
    created_at        timestamp   not null default (current_timestamp),
    updated_at        timestamp   not null default (current_timestamp)
);

create table orders
(
    order_id          bigserial primary key,
    order_status      orderstatus not null default ('in preparation'),
    total_price       money       not null,
    shipping_cost     money       not null,
    user_id           bigint      not null references users (user_id) on delete restrict,
    payment_method_id int         not null references payment_methods (payment_method_id) on update cascade,
    shipping_address  bigint      not null references addresses (address_id) on delete restrict,
    created_at        timestamp   not null default (current_timestamp),
    updated_at        timestamp   not null default (current_timestamp)
);

create table order_details
(
    order_detail_id bigserial primary key,
    quantity        double precision not null,
    unit_price      money            not null,
    sub_total       money            not null,
    order_id        bigint           not null references orders (order_id) on delete restrict,
    product_id      bigint           not null references products (product_id) on delete restrict,
    created_at      timestamp        not null default (current_timestamp),
    updated_at      timestamp        not null default (current_timestamp)
);

create or replace function update_updated_at_column()
    returns trigger
as
$$
begin
    new.updated_at = current_timestamp;
    return new;
end;
$$ language plpgsql;

create trigger update_users_updated_at_column
    before update
    on users
    for each row
execute function update_updated_at_column();

create trigger update_cities_updated_at_column
    before update
    on cities
    for each row
execute function update_updated_at_column();

create trigger update_districts_updated_at_column
    before update
    on districts
    for each row
execute function update_updated_at_column();

create trigger update_addresses_updated_at_column
    before update
    on addresses
    for each row
execute function update_updated_at_column();

create trigger update_roles_updated_at_column
    before update
    on roles
    for each row
execute function update_updated_at_column();

create trigger update_user_roles_updated_at_column
    before update
    on user_roles
    for each row
execute function update_updated_at_column();

create trigger update_categories_updated_at_column
    before update
    on categories
    for each row
execute function update_updated_at_column();

create trigger update_products_updated_at_column
    before update
    on products
    for each row
execute function update_updated_at_column();

create trigger update_product_images_updated_at_column
    before update
    on product_images
    for each row
execute function update_updated_at_column();

create trigger update_product_details_updated_at_column
    before update
    on product_details
    for each row
execute function update_updated_at_column();

create trigger update_product_stocks_updated_at_column
    before update
    on product_stocks
    for each row
execute function update_updated_at_column();

create trigger update_product_reviews_updated_at_column
    before update
    on product_stocks
    for each row
execute function update_updated_at_column();

create trigger update_discounts_updated_at_column
    before update
    on discounts
    for each row
execute function update_updated_at_column();

create trigger update_shopping_carts_updated_at_column
    before update
    on shopping_carts
    for each row
execute function update_updated_at_column();

create trigger update_shopping_cart_items_updated_at_column
    before update
    on shopping_cart_items
    for each row
execute function update_updated_at_column();

create trigger update_payment_methods_updated_at_column
    before update
    on payment_methods
    for each row
execute function update_updated_at_column();

create trigger update_orders_updated_at_column
    before update
    on orders
    for each row
execute function update_updated_at_column();

create trigger update_order_details_updated_at_column
    before update
    on order_details
    for each row
execute function update_updated_at_column();