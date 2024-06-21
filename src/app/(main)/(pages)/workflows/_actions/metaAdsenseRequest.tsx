type MetaAdsenseData = {
  accountMetaAdsense: string;
  connectedMetaAdsense: boolean;
};

let requestResult: Promise<MetaAdsenseData> | null = null;

export const fetchMetaAdsenseData = (): Promise<MetaAdsenseData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountMetaAdsense: "Vistune FB",
        connectedMetaAdsense: true,
      });
    }, 1000);
  });

  return requestResult;
};