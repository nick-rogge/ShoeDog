import { not } from 'drizzle-orm';
import {integer, pgTable, varchar, text, doublePrecision, date} from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
    id: integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
    productType: varchar({length: 255}).notNull(),
    brandName: varchar({length: 255}).notNull(),
    name: varchar({length: 255}).notNull(),
    description: text().notNull(),
    askPrice: doublePrecision().notNull(),
    authenticationDate: date(),
    aesEncryptionKey: varchar({length: 255}).notNull(),
    styleCode: varchar({length: 255}).notNull(),
    size: varchar({length: 255}).notNull(),
    colorway: varchar({length: 255}),
    image: varchar({length: 255}).notNull(),
    

    
})