// request.js
type GmailData = {
  mailGmail: string;
  connectedGmail: boolean;
};

let requestResult: Promise<GmailData> | null = null;

export const fetchGmailData = (): Promise<GmailData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        mailGmail: "vistune.ai@gmail.com",
        connectedGmail: true,
      });
    }, 1000);
  });

  return requestResult;
};