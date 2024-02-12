-- creation date: 2024-02-05
-- data base creation "recruiting_rh"

CREATE DATABASE IF NOT EXISTS `recruitingRh` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `recruitingRh`;

-- ---------------------------------------------------------
-- teable creation "applicants"

create table `applicants`
(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `dni` BIGINT UNSIGNED NOT NULL,
    `firstName` VARCHAR(45) NOT NULL,
    `lastName` VARCHAR(30) NOT NULL,
    `email` VARCHAR(200) NOT NULL UNIQUE,
    `phone` INT UNSIGNED NOT NULL,
    `urlProfile` VARCHAR(255),
    `birthDate` DATE NOT NULL,
    `gender` CHAR(1) NOT NULL, -- ej: M - F
    `image` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- creation of applicants

INSERT INTO `applicants` (`dni`, `firstName`, `lastName`, `email`, `phone`, `urlProfile`, `birthDate`, `gender`, `image`)
VALUES
(123456789, 'Juan', 'Pérez', 'juan@example.com', 3885456230, 'https://linkedin.com/in/juanperez', '1990-05-15', 'M', 'juan.jpg'),
(987654321, 'María', 'Gómez', 'maria@example.com', 3876543210, 'https://linkedin.com/in/mariagomez', '1988-08-25', 'F', 'maria.jpg'),
(456789012, 'Carlos', 'Rodríguez', 'carlos@example.com', 3817890123, 'https://linkedin.com/in/carlosrodriguez', '1995-02-10', 'M', 'carlos.jpg'),
(789012345, 'Laura', 'Martínez', 'laura@example.com', 1160123456, 'https://linkedin.com/in/lauramartinez', '1993-11-30', 'F', 'laura.jpg');

-- -----------------------------------------
-- table creation "professions"

create table `professions`
(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `profession` VARCHAR(200),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
  
-- creation of professions

INSERT INTO `professions` (`id`, `profession`)
VALUES
(1, 'Ingeniero'),
(2, 'Diseñadora'),
(3, 'Programador'),
(4, 'Abogada');

-- --------------------------------
-- table creation "professionsApplicants"

  CREATE TABLE `professionsApplicants` (
    `applicantId` INT,
    `professionId` INT,
    PRIMARY KEY (applicantId, professionId),
    FOREIGN KEY (applicantId) REFERENCES applicants(id),
    FOREIGN KEY (professionId) REFERENCES professions(id)
);

-- ------------------------------
