import { z } from "zod";
import { createRouter } from "./context";

// log in the db each time user logs in
export const logbookRouter = createRouter()
  .mutation("logIn", {
    input: z.object({
      name: z.string(),
      email: z.string(),
      lastLogin: z.date(),
    }),
    async resolve ({ ctx, input }) {
      try {
        await ctx.prisma.logbook.create({
          data: {
            name: input.name,
            email: input.email,
            lastLogin: input.lastLogin,
          },
        });
      } catch (e) {
        console.log('error login logBook data :', e);
      }
    },
  })
