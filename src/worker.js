function bubbleSort(arr) {
  const steps = [];
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          step: [...arr],
          index: j
        });
      }
    }
  }
  return steps;
}

self.onmessage = function (event) {
  const { array, algorithm } = event.data;

  const steps = algorithm === "bubbleSort" ? bubbleSort([...array]) : [];
  self.postMessage(steps);
};
