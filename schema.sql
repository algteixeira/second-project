CREATE TABLE IF NOT EXISTS `cities` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255) NOT NULL, `state` ENUM('RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI'
, 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF') NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KE
Y (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `customers` (`id` INTEGER NOT NULL auto_increment , `full_name` VARCHAR(255) NOT NULL, `gender` ENUM('MASCULINO', 'FEMININO', 'OUTRO', 'PREFIRO
NÃO DIZER') NOT NULL, `birthday` DATETIME NOT NULL, `age` INTEGER NOT NULL, `city` INTEGER NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN K
EY (`city`) REFERENCES `cities` (`id`)) ENGINE=InnoDB;
