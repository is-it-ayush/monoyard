import type { DriverGroup, Instrument, Person } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { generatePersonMockData, getMockData } from '../../../utils/utils';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const mocksRouter = createTRPCRouter({
  getData: publicProcedure
    .input(z.object({ type: z.enum(['person', 'driverGroup', 'instrument']) }))
    .query(async ({ input }) => {
      let data: Person[] | Instrument[] | DriverGroup[] = [];

      switch (input.type) {
        case 'person':
          data = (await prisma?.person.findMany()) as Person[];
          break;
        case 'instrument':
          data = (await prisma?.instrument.findMany()) as Instrument[];
          break;
        case 'driverGroup':
          data = (await prisma?.driverGroup.findMany()) as DriverGroup[];
          break;
        default:
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Invalid data type: ${input.type}`,
          });
      }

      if (data.length === 0) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No data found for type: ${input.type}. Kindly add some data.`,
        });
      }

      return data;
    }),

  addPersonData: publicProcedure.input(z.object({ size: z.number() })).mutation(async ({ input }) => {
    const d = (await generatePersonMockData(input.size)) as Person[];

    // Get count
    const count = (await prisma?.person.count()) as number;
    if (count > 5000) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: `Cannot add more than 5000 records to the database.`,
      });
    }

    d.forEach(async (person: Person) => {
      await prisma?.person.create({
        data: person,
      });
    });

    return { message: `Successfully added ${input.size} records to the database.` };
  }),

  addInstrumentData: publicProcedure.input(z.object({ size: z.number() })).mutation(async ({ input }) => {
    const d = (await getMockData('instrument', input.size)) as Instrument[];

    // Get count
    const count = (await prisma?.instrument.count()) as number;
    if (count > 5000) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: `Cannot add more than 5000 records to the database.`,
      });
    }

    d.forEach(async (instrument: Instrument) => {
      await prisma?.instrument.create({
        data: instrument,
      });
    });

    return { message: `Successfully added ${input.size} records to the database.` };
  }),
  addDriverGroupData: publicProcedure.input(z.object({ size: z.number() })).mutation(async ({ input }) => {
    const d = (await getMockData('driverGroup', input.size)) as DriverGroup[];

    // Get count
    const count = (await prisma?.driverGroup.count()) as number;
    if (count > 5000) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: `Cannot add more than 5000 records to the database.`,
      });
    }

    d.forEach(async (driverGroup: DriverGroup) => {
      await prisma?.driverGroup.create({
        data: driverGroup,
      });
    });

    return { message: `Successfully added ${input.size} records to the database.` };
  }),
});
