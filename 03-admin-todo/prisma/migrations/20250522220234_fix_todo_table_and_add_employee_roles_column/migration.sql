/*
  Warnings:

  - You are about to drop the column `roles` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "roles";
