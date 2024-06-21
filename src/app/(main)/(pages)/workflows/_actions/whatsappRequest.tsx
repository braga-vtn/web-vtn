// request.js
type WhatsappData = {
  numberWhatsapp: string;
  connectedWhatsapp: boolean;
};

let requestResult: Promise<WhatsappData> | null = null;

export const fetchWhatsappData = (): Promise<WhatsappData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        numberWhatsapp: "5562985095500",
        connectedWhatsapp: true,
      });
    }, 1000); // Simula uma requisição com 1 segundo de atraso.
  });

  return requestResult;
};