create database bookcollections; 
DROP TABLE IF EXISTS `bookcollections`.`table_books`;
CREATE TABLE  `bookcollections`.`table_books` (
  `id` bigint(25) NOT NULL auto_increment,
  `name` varchar(250) default NULL,
  `isbn` varchar(100) default NULL,
  `authors` varchar(450) default NULL,
  `country` varchar(250) default NULL,
  `number_of_pages` bigint(25) default '0',
  `publishers` varchar(250) default NULL,
  `release_date` date default NULL,
  PRIMARY KEY  (`id`)
);