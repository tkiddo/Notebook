#选择数据库
use test;
-- 建表
create table tb1(
username varchar(20),
age tinyint unsigned,
salary float(8,2) unsigned);
-- 查看表 
show tables;
#表结构
desc tb1;
show columns from tb1;
-- 插入值
insert into tb1 values('tom',25,2345);
-- 查询
select * from tb1;
insert tb1(username,salary) values('king',3423);

-- 空值和非空值 
create table tb2(
username varchar(20) not null,
age tinyint unsigned null);
insert tb2(username,age) values(null,12);

-- 自动编号 主键
create table tb3(
id smallint unsigned auto_increment primary key,
username varchar(20));
desc tb3;
insert tb3(username) values('salad');
insert tb3(username) values('rob');
insert tb3(username) values('tom');
select * from tb3;
-- 唯一约束 
create table tb5(
id smallint unsigned auto_increment primary key,
username varchar(20) not null unique,
age tinyint unsigned);
insert tb5(username,age) values('find',22);
select * from tb5;
-- 默认约束 
create table tb6(
id smallint unsigned auto_increment primary key,
username varchar(20) not null unique,
age tinyint unsigned,
sex enum('1','2','3') default '3');
insert tb6(username,age) values('find',22);
select * from tb6;
 
