//Functions custom
/**
 * Shuffle function
 * @param {*} sourceArray
 */
export const Shuffle = (sourceArray) => {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));
    let temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
};

/**
 * Validate index for letter alternatives
 * @param {*} index
 */
export const ValidationIndex = (index) =>
  index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : "D";

/**
 * Fetch data for api
 * @param {*} API
 */
export const FetchData = async (API) => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Shuffle alternatives
 * @param {*} data
 * @param {*} ramdomNumber
 */
export const ShuffleAlternatives = (data, ramdomNumber) => {
  let alternatives = Shuffle(data).slice(0, 3);
  console.log(data[ramdomNumber]);
  alternatives.push(data[ramdomNumber]);
  Shuffle(alternatives);
  return alternatives;
};
