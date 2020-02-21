use test;
create table tuser(
id smallint unsigned primary key auto_increment,
username varchar(20) not null,
password varchar(32) not null,
age tinyint unsigned not null default 10,
sex boolean
);

insert tuser values(null,'tom','123',11,false);
insert tuser values(default,'king','1232',3+4,true);
insert tuser values(default,'sss','1232',default,true);
insert tuser values(default,'斯蒂芬','1232',default,true),(default,'是非得失',md5('1232'),default,true);
insert tuser set username = 'sgd',password='sdfs',sex=null;

update tuser set age = age+5;
update tuser set age = age-id,sex=0;
update tuser set age = age+10 where id%2=0;

delete from tuser where age > 10;
delete from tuser;

select now();
select 3+5;
select id,username from tuser;
select tuser.id,tuser.username from tuser;
select id as userid,username as name from tuser;
select * from tuser limit 1,2;
select sex from tuser group by sex;
select * from tuser order by age asc ,id desc limit 2;
select * from tuser where sex=0;

create table test(
id tinyint unsigned primary key auto_increment,
username varchar(20)
);

insert test(username) select username from tuser where sex = 1;
select * from test;