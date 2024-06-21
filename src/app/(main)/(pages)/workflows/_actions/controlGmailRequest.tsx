type SelectValuesType = {
  nameResponse: boolean;
};

type OpeningHoursType = {
  [key: string]: {
    checkout: boolean;
    start: string;
    end: string;
  };
};

type ControlGmailData = SelectValuesType & { openingHours: OpeningHoursType };

let requestResult: Promise<ControlGmailData> | null = null;

export const fetchControlGmailData = (): Promise<ControlGmailData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nameResponse: true,
        openingHours: {
          monday: { checkout: true, start: "08:00", end: "18:00" },
          tuesday: { checkout: true, start: "08:00", end: "18:00" },
          wednesday: { checkout: true, start: "08:00", end: "18:00" },
          thursday: { checkout: true, start: "08:00", end: "18:00" },
          friday: { checkout: true, start: "08:00", end: "18:00" },
          saturday: { checkout: true, start: "10:00", end: "16:00" },
          sunday: { checkout: false, start: "", end: "" },
        }
      });
    }, 1000); 
  });

  return requestResult;
};

export const updateControlGmailData = (newData: ControlGmailData): void => {
  requestResult = Promise.resolve(newData);
};