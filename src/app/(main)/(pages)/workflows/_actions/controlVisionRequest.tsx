type SelectValuesType = {
  assistantName: string;
  model: string;
};

type ControlVisionData = SelectValuesType;

let requestResult: Promise<ControlVisionData> | null = null;

export const fetchControlVisionData = (): Promise<ControlVisionData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        assistantName: "Vision",
        model: "vtn-pro",
      });
    }, 1000);
  });

  return requestResult;
};

export const updateControlVisionData = (newData: ControlVisionData): void => {
  requestResult = Promise.resolve(newData);
};