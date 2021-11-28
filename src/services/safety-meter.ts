// 0 → Password doesn't exist **default**
// 1 → very weak
// 2 → weak
// 3 → safe
// 4 → strong

export const safetyMeter = (password: string): number => {
  let safety: number = 0; // default

  if (password.length <= 6) {
    safety = 1;
  } else if (password.length > 6 && password.length <= 10) {
    safety = 2;
  } else if (password.length > 10 && password.length <= 16) {
    safety = 3;
  } else if (password.length > 16) {
    safety = 4;
  }

  return safety;
};
