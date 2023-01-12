/**
 * Turn's out we can't really detect the type of an array of objects. 
 * What we can do is check if the array contains only objects of a given type.
 * Experimented a lot on playground. I think we can do this with a type guard.
 * However, I'm not sure how to do this with a generic type. (maybe we can't?)
 * Below, Are some type guards for the three types we are using.
 */
import type { DriverGroup, Instrument, Person } from "@prisma/client";

// no-explicit-any. Will fix this later. Can we use generics with type guards?

//  eslint-disable-line @typescript-eslint/no-explicit-any
export function isPersonArray(arr: any[]): arr is Person[] {
    return arr.every((item) => {
        return item.username !== undefined &&
            item.first_name !== undefined &&
            item.last_name !== undefined &&
            item.email !== undefined &&
            item.age !== undefined;
    });
}

//  eslint-disable-line @typescript-eslint/no-explicit-any
export function isInstrumentArray(arr: any[]): arr is Instrument[] {
    return arr.every((item) => {
        return item.name !== undefined &&
            item.hardware_id !== undefined &&
            item.network_type !== undefined;
    });
}

//  eslint-disable-line @typescript-eslint/no-explicit-any
export function isDriverGroupArray(arr: any[]): arr is DriverGroup[] {
    return arr.every((item) => {
        return item.name !== undefined &&
            item.description !== undefined &&
            item.folder_name !== undefined;
    });
}