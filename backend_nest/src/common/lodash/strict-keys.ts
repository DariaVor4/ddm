export const strictKeys = <T extends object, K extends keyof T>(obj: T): K[] => Object.keys(obj) as K[];
