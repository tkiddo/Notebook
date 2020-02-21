use test;
create table provinces(
id smallint unsigned primary key auto_increment,
pname varchar(20) not null);

create table users(
id smallint unsigned primary key auto_increment,
username varchar(20) not null,
pid smallint unsigned,
foreign key (pid) references provinces (id)
);
desc users;

show indexes from provinces;

create table user1(
id smallint unsigned primary key auto_increment,
username varchar(20) not null,
pid smallint unsigned,
foreign key (pid) references provinces (id) on delete cascade
);

insert provinces (pname) values('浙江');
insert provinces (pname) values('江苏');
insert provinces (pname) values('广东');
select * from provinces;

insert users (username,pid) values('sara',1);
insert users (username,pid) values('king',2);
insert users (username,pid) values('adam',3);
select * from users;

insert user1 (username,pid) values('sara',1);
insert user1 (username,pid) values('king',2);
insert user1 (username,pid) values('adam',3);
select * from user1;

SET FOREIGN_KEY_CHECKS = 0;
delete from provinces where id = 2;
--  插入列
desc user1;
alter table user1 add  age tinyint unsigned not null default 10;
alter table user1 add  password varchar(10) after username;
alter table user1 add  idcard varchar(50) first;

-- 删除列 
alter table user1 drop password, drop age;

-- 添加约束 
create table users2 (
username varchar(10) not null,
pid smallint unsigned
);
desc users2;
alter table users2 add id smallint unsigned;
-- 主键约束 
alter table users2 add constraint pk_users2_id primary key(id);
-- 唯一约束 
alter table users2 add unique (username);
-- 外键约束 
alter table users2 add foreign key (pid) references provinces (id);
show create table users2;
alter table users2 add age tinyint unsigned not null;
-- 添加默认约束 
alter table users2 alter age set default 15;
-- 删除默认约束 
alter table users2 alter age drop default;
-- 删除主键约束
alter table users2 drop primary key;
-- 删除唯一约束 
show indexes from users2;
alter table users2 drop index username;
-- 删除外键约束

-- 修改列定义
desc users2;
alter table users2 modify column id int unsigned not null first;
alter table users2 change column age age1 tinyint unsigned not null;
-- 修改表名 
rename table users3 to users2;

 

