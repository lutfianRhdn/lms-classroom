/*
  Warnings:

  - Added the required column `type` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quiz` ADD COLUMN `type` ENUM('Multiple', 'Essay', 'Mixed') NOT NULL;

-- AlterTable
ALTER TABLE `resource` ADD COLUMN `description` VARCHAR(191) NOT NULL;
