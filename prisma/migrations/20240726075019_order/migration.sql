-- DropIndex
DROP INDEX `Order_userId_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `billingAddress` VARCHAR(191) NULL,
    ADD COLUMN `paymentInfo` JSON NULL,
    ADD COLUMN `paymentMethod` VARCHAR(191) NULL,
    ADD COLUMN `shippingAddress` VARCHAR(191) NULL;
