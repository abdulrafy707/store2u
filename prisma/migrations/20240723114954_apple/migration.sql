/*
  Warnings:

  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `balance` DOUBLE NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `phoneno` VARCHAR(191) NULL,
    ADD COLUMN `status` INTEGER NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `role` VARCHAR(191) NULL;
