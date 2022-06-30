/*
  Warnings:

  - You are about to drop the column `capacidadPuerto` on the `capexs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `capexs` DROP COLUMN `capacidadPuerto`,
    ADD COLUMN `fechaObjetivo` VARCHAR(45);
