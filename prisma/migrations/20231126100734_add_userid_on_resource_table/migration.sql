/*
  Warnings:

  - Added the required column `user_id` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Resource` ADD COLUMN `user_id` INTEGER NOT NULL;
