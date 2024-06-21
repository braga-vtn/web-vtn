// request.js
type WhatsappData = {
  domainYampi: string;
  connectedYampi: boolean;
};

let requestResult: Promise<WhatsappData> | null = null;

export const fetchYampiData = (): Promise<WhatsappData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        domainYampi: "https://seguro.vistune.ai",
        connectedYampi: true,
      });
    }, 1000); // Simula uma requisição com 1 segundo de atraso.
  });

  return requestResult;
};