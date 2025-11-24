/*
  Warnings:

  - You are about to drop the column `order` on the `Section` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Section_userId_idx";

-- DropIndex
DROP INDEX "Task_sectionId_idx";

-- DropIndex
DROP INDEX "Task_userId_idx";

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "order";

-- CreateIndex
CREATE INDEX "Section_userId_createdAt_idx" ON "Section"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Task_userId_sectionId_idx" ON "Task"("userId", "sectionId");
