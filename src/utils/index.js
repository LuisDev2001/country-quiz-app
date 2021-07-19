//Functions custom
export const Shuffle = (sourceArray) => {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));
    let temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
};

export const ValidationIndex = (index) =>
  index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : "D";
