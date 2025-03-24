CREATE TABLE "products" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "products_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"productType" varchar(255) NOT NULL,
	"brandName" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"askPrice" double precision NOT NULL,
	"authenticationDate" date,
	"aesEncryptionKey" varchar(255) NOT NULL,
	"styleCode" varchar(255) NOT NULL,
	"size" varchar(255) NOT NULL,
	"colorway" varchar(255),
	"image" varchar(255) NOT NULL
);
