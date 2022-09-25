import { z } from 'zod';
import { createRouter } from './context';

export const guestbookRouter = createRouter().mutation('postMessage', {
  input: z.object({
    name: z.string(),
    message: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      await ctx.prisma.guestbook.create({
        data: {
          name: input.name,
          message: input.message,
        },
      });
    } catch (err) {
      console.error(err);
    }
  },
});
