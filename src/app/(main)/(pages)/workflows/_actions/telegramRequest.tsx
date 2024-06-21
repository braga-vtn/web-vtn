// request.js
type TelegramData = {
  phoneTelegram: string;
  connectedTelegram: boolean;
};

let requestResult: Promise<TelegramData> | null = null;

export const fetchTelegramData = (): Promise<TelegramData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        phoneTelegram: "5562985095500",
        connectedTelegram: true,
      });
    }, 1000); // Simula uma requisição com 1 segundo de atraso.
  });

  return requestResult;
};