/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
export type ProduceFunc = <T>(base: T, recipe: (draft: T) => any) => void;

// export const produce: ProduceFunc = (base, recipe) => {
//   let produced = JSON.parse(JSON.stringify(base));
//   recipe(produced);

//   if (compare(base, produced)) {
//     produced = base;
//   }

//   return produced;
// };

// type CompareFunc = <T>(base: T, produced: any) => boolean;

// const compare: CompareFunc = (base, produced) => {
//   let isEqual = true;

//   if (typeof base !== typeof produced) {
//     return false;
//   }

//   if (typeof produced !== "object") {
//     return produced === base;
//   }

//   for (const key in produced) {
//     if (base?.hasOwnProperty(key)) {
//       if (compare(base[key], produced[key])) {
//         produced[key] = base[key];
//       } else {
//         isEqual = false;
//       }
//     } else {
//       isEqual = false;
//     }
//   }

//   for (const key in base) {
//     if (!produced.hasOwnProperty(key)) {
//       isEqual = false;
//     }
//   }

//   return isEqual;
// };
