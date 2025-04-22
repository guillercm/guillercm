export const shuffleArray = <T>(array: T[]): T[] => {
  return array
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((entry) => entry.value);
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
}

export const shuffledRange = (length: number): number[] => {
  return shuffleArray(range(length));
};

export const range = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i);
};
