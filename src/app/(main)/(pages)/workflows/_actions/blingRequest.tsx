// request.js
type BlingData = {
  shopBling: string;
  connectedBling: boolean;
};

let requestResult: Promise<BlingData> | null = null;

export const fetchBlingData = (): Promise<BlingData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        shopBling: "Vistune",
        connectedBling: true,
      });
    }, 1000); // Simula uma requisição com 1 segundo de atraso.
  });

  return requestResult;
};