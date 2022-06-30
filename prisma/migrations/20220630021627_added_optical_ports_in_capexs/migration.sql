-- CreateTable
CREATE TABLE `devicemodels` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(150) NOT NULL,
    `numberOfSlots` INTEGER NOT NULL,
    `vendor` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deviceroles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `devices` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `status` VARCHAR(150) NOT NULL,
    `roleId` INTEGER UNSIGNED NOT NULL,
    `modelsId` INTEGER UNSIGNED NOT NULL,
    `nodesId` INTEGER UNSIGNED NOT NULL,
    `nsoLicense` INTEGER UNSIGNED DEFAULT 0,
    `ipMgmt` VARCHAR(150),
    `ipIgp` VARCHAR(150),
    `room` INTEGER UNSIGNED NOT NULL,
    `row` VARCHAR(2),
    `rack` INTEGER UNSIGNED,
    `rackUnit` INTEGER UNSIGNED,
    `hierarchy` VARCHAR(150) NOT NULL,
    `virtual` INTEGER NOT NULL DEFAULT 0,
    `versionId` INTEGER UNSIGNED NOT NULL,
    `createdAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(0),

    INDEX `VersionID_idx`(`versionId`),
    INDEX `modelsId_idx`(`modelsId`),
    INDEX `nodesId_idx`(`nodesId`),
    INDEX `rolesId_idx`(`roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nodes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(150) NOT NULL,
    `cellId` VARCHAR(45) NOT NULL,
    `province` VARCHAR(150) NOT NULL,
    `country` VARCHAR(150) NOT NULL,
    `totalRooms` INTEGER DEFAULT 0,
    `createdAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ports` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `deviceId` INTEGER UNSIGNED NOT NULL,
    `slot` INTEGER NOT NULL,
    `subSlot` INTEGER NOT NULL,
    `port` INTEGER NOT NULL,
    `boardModule` VARCHAR(45) NOT NULL,
    `license` INTEGER NOT NULL,
    `status` VARCHAR(45) NOT NULL,
    `project` VARCHAR(150) NOT NULL,
    `espejado` VARCHAR(150) NOT NULL,
    `clientSide` VARCHAR(150) NOT NULL,
    `editedByUser` VARCHAR(150) NOT NULL,
    `createdAt` DATE,
    `updatedAt` DATE,
    `deletedAt` DATE,

    INDEX `deviceId_idx`(`deviceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(45) NOT NULL,
    `firstName` VARCHAR(150) NOT NULL,
    `lastName` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `versions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `servicePack` VARCHAR(150),
    `smuPatch` VARCHAR(150),
    `psrrLink` VARCHAR(250),
    `forRoleId` INTEGER UNSIGNED NOT NULL,
    `forModelId` INTEGER UNSIGNED NOT NULL,
    `createdAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(0),

    INDEX `forModelId_idx`(`forModelId`),
    INDEX `forRoleId_idx`(`forRoleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vlans` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `deviceVlanId` INTEGER UNSIGNED NOT NULL,
    `vlan` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(150),
    `editedByUser` VARCHAR(150) NOT NULL,
    `createdAt` DATE,
    `updatedAt` DATE,
    `deletedAt` DATE,

    INDEX `devicesId_idx`(`deviceVlanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `capexs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `solicitante` VARCHAR(150),
    `areaSolicitante` VARCHAR(150),
    `requerimiento` VARCHAR(45),
    `cellId` VARCHAR(45),
    `tituloProyecto` VARCHAR(150),
    `redundancia` VARCHAR(45),
    `capacidadPuerto` VARCHAR(45),
    `bandwidth` VARCHAR(45),
    `puertosElectricos` INTEGER UNSIGNED NOT NULL,
    `puertosOpticos1gb` INTEGER UNSIGNED NOT NULL,
    `puertosOpticos10gb` INTEGER UNSIGNED NOT NULL,
    `puertosOpticos100gb` INTEGER UNSIGNED NOT NULL,
    `createdAt` DATE,
    `updatedAt` DATE,
    `deletedAt` DATE,
    `comentarios` VARCHAR(450),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `devices` ADD FOREIGN KEY (`modelsId`) REFERENCES `devicemodels`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `devices` ADD FOREIGN KEY (`nodesId`) REFERENCES `nodes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `devices` ADD FOREIGN KEY (`roleId`) REFERENCES `deviceroles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `devices` ADD FOREIGN KEY (`versionId`) REFERENCES `versions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ports` ADD FOREIGN KEY (`deviceId`) REFERENCES `devices`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `versions` ADD FOREIGN KEY (`forModelId`) REFERENCES `devicemodels`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `versions` ADD FOREIGN KEY (`forRoleId`) REFERENCES `deviceroles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vlans` ADD FOREIGN KEY (`deviceVlanId`) REFERENCES `devices`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
