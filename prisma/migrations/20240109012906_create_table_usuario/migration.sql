-- CreateTable
CREATE TABLE `Usuario` (
    `USR_CodigoUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `USR_Nome` VARCHAR(75) NOT NULL,
    `USR_Email` VARCHAR(191) NOT NULL,
    `USR_Senha` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_USR_Email_key`(`USR_Email`),
    PRIMARY KEY (`USR_CodigoUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
