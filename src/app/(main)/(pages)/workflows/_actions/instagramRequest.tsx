// request.js
type InstagramData = {
  accountInstagram: string;
  connectedInstagram: boolean;
};

let requestResult: Promise<InstagramData> | null = null;

export const fetchInstagramData = (): Promise<InstagramData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountInstagram: "vistune.ai",
        connectedInstagram: true,
      });
    }, 1000); // Simula uma requisição com 1 segundo de atraso.
  });

  return requestResult;
};
