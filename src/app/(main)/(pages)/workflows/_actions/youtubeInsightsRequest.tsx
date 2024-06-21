type YoutubeInsightsData = {
  accountYoutubeInsights: string;
  connectedYoutubeInsights: boolean;
};

let requestResult: Promise<YoutubeInsightsData> | null = null;

export const fetchYoutubeInsightsData = (): Promise<YoutubeInsightsData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountYoutubeInsights: "Vistune YT",
        connectedYoutubeInsights: true,
      });
    }, 1000);
  });

  return requestResult;
};