-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
