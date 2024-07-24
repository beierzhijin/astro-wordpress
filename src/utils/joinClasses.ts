/**
  Both approaches effectively remove falsy values (such as `null, undefined, empty strings "", 0, NaN, false`) from the array.
*/

// export const joinClasses = (...classes: string[]) => classes.filter(c => !!c).join(" ");
export const joinClasses = (...classes: string[]) => classes.filter(Boolean).join(" ");
