/*
  Warnings:

  - You are about to drop the column `cronPath` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `discordTemplate` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `flowPath` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `notionAccessToken` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `notionDbId` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `notionTemplate` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `publish` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `slackAccessToken` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `slackChannels` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `slackTemplate` on the `Workflows` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Workflows` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Workflows" DROP COLUMN "cronPath",
DROP COLUMN "discordTemplate",
DROP COLUMN "flowPath",
DROP COLUMN "notionAccessToken",
DROP COLUMN "notionDbId",
DROP COLUMN "notionTemplate",
DROP COLUMN "publish",
DROP COLUMN "slackAccessToken",
DROP COLUMN "slackChannels",
DROP COLUMN "slackTemplate",
DROP COLUMN "status";
