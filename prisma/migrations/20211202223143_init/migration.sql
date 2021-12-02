-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(11) NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);
