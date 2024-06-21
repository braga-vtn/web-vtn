type GoogleAdsenseData = {
  accountGoogleAdsense: string;
  connectedGoogleAdsense: boolean;
};

let requestResult: Promise<GoogleAdsenseData> | null = null;

export const fetchGoogleAdsenseData = (): Promise<GoogleAdsenseData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountGoogleAdsense: "Vistune GAds",
        connectedGoogleAdsense: true,
      });
    }, 1000);
  });

  return requestResult;
};