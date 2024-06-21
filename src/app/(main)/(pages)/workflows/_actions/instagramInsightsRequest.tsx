type InstagramInsightsData = {
  accountInstagramInsights: string;
  connectedInstagramInsights: boolean;
};

let requestResult: Promise<InstagramInsightsData> | null = null;

export const fetchInstagramInsightsData = (): Promise<InstagramInsightsData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountInstagramInsights: "Vistune IG",
        connectedInstagramInsights: true,
      });
    }, 1000);
  });

  return requestResult;
};