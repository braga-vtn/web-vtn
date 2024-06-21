type GoogleAnalyticsData = {
  accountGoogleAnalytics: string;
  connectedGoogleAnalytics: boolean;
};

let requestResult: Promise<GoogleAnalyticsData> | null = null;

export const fetchGoogleAnalyticsData = (): Promise<GoogleAnalyticsData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountGoogleAnalytics: "Vistune GA4",
        connectedGoogleAnalytics: true,
      });
    }, 1000);
  });

  return requestResult;
};