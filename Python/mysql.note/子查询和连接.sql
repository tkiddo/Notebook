use test;
create table tgoods(
goods_id smallint unsigned primary key auto_increment,
goods_name varchar(32) not null,
goods_cate varchar(30) not null,
brand_name varchar(30),
goods_price float ,
is_show boolean default 1,
is_saleoff boolean default 0
);

insert tgoods (goods_name,goods_cate,brand_name,goods_price) values ('server','服务器','IBM',6888.00),('头戴显示设备','笔记本配件','索尼',6999.00);
insert tgoods (goods_name,goods_cate,brand_name,goods_price) values ('iPhone','手机','apple',8999.00),('macbook','笔记本','apple',12365.00);
select * from tgoods;

select avg(goods_price) from tgoods;
select * from tgoods where goods_price > (select avg(goods_price) from tgoods);
select * from tgoods where goods_price < any (select goods_price from tgoods where brand_name = '索尼') and brand_name != '索尼';
select * from tgoods where goods_price>10000 or goods_price <2000;
select * from tgoods where brand_name = some(select brand_name from tgoods where goods_price>6888);


create table tcates(
cate_id smallint unsigned primary key auto_increment,
cate_name varchar(40) not null
);

select goods_cate from tgoods group by goods_cate;
desc tcates;
insert tcates (cate_name) select goods_cate from tgoods group by goods_cate;
select * from tcates;

update tgoods inner join tcates on goods_cate = cate_name
set goods_cate = cate_id;
select * from tgoods;
create table if not exists tbrands(
brand_id smallint unsigned primary key auto_increment,
brand_name varchar(40) not null
)
select brand_name from tgoods group by brand_name;
select * from tbrands;
update tgoods as g inner join tbrands as b on g.brand_name = b.brand_name
set g.brand_name = b.brand_id;
desc tgoods;

alter table tgoods
change goods_cate cate_id smallint unsigned not null;
alter table tgoods
change brand_name brand_id smallint unsigned not null;

insert tbrands(brand_name) values('海尔'),('三星');
insert tcates(cate_name) values('网卡'),('交换机');

insert tgoods (goods_name,cate_id,brand_id,goods_price) values ('黑白打印机',1,10,3000.00);

-- 多表连接查询 
select goods_id,goods_name,cate_name,brand_name from tgoods as g 
inner join tcates as b on g.cate_id = b.cate_id
inner join tbrands as c on g.brand_id = c.brand_id;

delete t1 from tgoods as t1 left join (select goods_id,goods_name from tgoods group by goods_name having count(goods_name) >=2) as t2 
on t1.goods_name = t2.goods_name where t1.goods_id>t2.goods_id;

-- 自身连接 
create table ttypes(
type_id smallint unsigned primary key auto_increment,
type_name varchar(30) not null,
parent_id smallint unsigned not null
);
insert ttypes values(default,'家电',0),(default,'办公',0),(default,'电视',1),(default,'打印机',2),(default,'液晶电视',3),(default,'激光打印机',4);
select * from ttypes;

select s.type_id,s.type_name,p.type_name as parent_type from ttypes as s
left join ttypes as p
on s.parent_id = p.type_id;

