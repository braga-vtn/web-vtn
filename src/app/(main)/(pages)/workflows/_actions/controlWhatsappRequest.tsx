type SelectValuesType = {
  nameResponse: boolean;
  cancelCall: boolean;
  confirmReading: boolean;
  pinMessages: boolean;
  showOnline: boolean;
};

type OpeningHoursType = {
  [key: string]: {
    checkout: boolean;
    start: string;
    end: string;
  };
};

type ControlWhatsappData = SelectValuesType & { openingHours: OpeningHoursType };

let requestResult: Promise<ControlWhatsappData> | null = null;

export const fetchControlWhatsappData = (): Promise<ControlWhatsappData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nameResponse: true,
        cancelCall: false,
        confirmReading: true,
        pinMessages: false,
        showOnline: true,
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

export const updateControlWhatsappData = (newData: ControlWhatsappData): void => {
  requestResult = Promise.resolve(newData);
};