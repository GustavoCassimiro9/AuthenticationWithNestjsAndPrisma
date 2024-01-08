-- CreateTable
CREATE TABLE `Usuario` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(75) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Senha` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_Email_key`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
