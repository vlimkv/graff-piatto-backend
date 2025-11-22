-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "description" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "priceRub" DECIMAL(10,2),
ADD COLUMN     "time" TEXT,
ALTER COLUMN "date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "description" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TEXT;
