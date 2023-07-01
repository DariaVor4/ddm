export const strictEntries = <T extends object, K extends keyof T>(obj: T): [K, T[K]][] => Object.entries(obj) as [K, T[K]][];
