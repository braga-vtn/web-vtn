// request.js
type ShopifyData = {
  domainShopify: string;
  connectedShopify: boolean;
};

let requestResult: Promise<ShopifyData> | null = null;

export const fetchShopifyData = (): Promise<ShopifyData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        domainShopify: "https://vistune.ai",
        connectedShopify: true,
      });
    }, 1000); // Simula uma requisição com 1 segundo de atraso.
  });

  return requestResult;
};