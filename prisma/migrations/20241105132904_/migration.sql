/*
  Warnings:

  - Added the required column `additionalPrice` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Option` ADD COLUMN `additionalPrice` INTEGER NOT NULL DEFAULT 0;
