import { isNotNull } from "drizzle-orm";
import { boolean, primaryKey } from "drizzle-orm/gel-core";
import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";




export const Users=pgTable('users',{
    id:serial('id').primaryKey(),//serial means it will gove the value serilayy and is a primary key , no duplicates
    name:varchar('name').notNull(),//chceks whether the value is not null
    imageUrl:varchar('imageUrl'),
    subscription:boolean('subscription').default(false)//by default the value is false

})