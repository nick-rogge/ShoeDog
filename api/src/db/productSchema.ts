import {
    integer,
    pgTable, 
    varchar, 
    text, 
    doublePrecision, 
    date
} from 'drizzle-orm/pg-core';

import { not } from 'drizzle-orm';


export const productsTable = pgTable('products', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    productType: varchar({length: 255}),
    brandName: varchar({length: 255}),
    name: varchar({length: 255}).notNull(),
    description: text(),
    askPrice: doublePrecision().notNull(),
    authenticationDate: date(),
    aesEncryptionKey: varchar({length: 255}),
    styleCode: varchar({length: 255}),
    size: varchar({length: 255}),
    colorway: varchar({length: 255}),
    image: varchar({length: 255}),
})