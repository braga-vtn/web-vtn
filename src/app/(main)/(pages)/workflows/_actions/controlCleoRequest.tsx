type HumanServiceField = {
  id: number;
  value: string;
};

type SocialMediaField = {
  id: number;
  name: string;
  description: string;
};

type OfferField = {
  id: number;
  description: string;
};

type SelectValuesType = {
  nameResponse: boolean;
  assistantName: string;
  model: string;
  responseTime: string;
  primaryGoal: string;
  callService: string;
  refundTime: string;
  couponsPromotions: string;
  paymentMethods: string;
  deliveryTime: string;
  shippingProduct: string;
  originProducts: string;
  humanService: HumanServiceField[];
  socialMedia: SocialMediaField[];
  offer: OfferField[];
  additionalFunctions: {
    audioResponse: boolean;
    useEmojis: boolean;
    protocolService: boolean;
    humanSales: boolean;
  };
};

type ControlCleoData = SelectValuesType;

let requestResult: Promise<ControlCleoData> | null = null;

export const fetchControlCleoData = (): Promise<ControlCleoData> => {
  if (requestResult) return requestResult;

  requestResult = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nameResponse: true,
        assistantName: "Mysterdam",
        model: "vtn-pro",
        responseTime: "45-seconds",
        primaryGoal: "sales",
        callService: "Esse é o callService",
        refundTime: "Esse é o refundTime",
        couponsPromotions: "Esse é o couponsPromotions",
        paymentMethods: "Esse é o paymentMethods",
        deliveryTime: "Esse é o deliveryTime",
        shippingProduct: "Esse é o shippingProduct",
        originProducts: "Esse é o originProducts",
        humanService: [
          { id: 1, value: "teste A" },
          { id: 2, value: "teste B" },
        ],
        socialMedia: [
          { id: 1, name: "facebook", description: "https://facebook.com/mysterdam" },
          { id: 2, name: "twitter", description: "https://twitter.com/mysterdam" },
          { id: 3, name: "instagram", description: "https://instagram.com/mysterdam" },
        ],
        offer: [
          { id: 1, description: "Desconto de 10% em todos os produtos" },
          { id: 2, description: "Frete grátis nas compras acima de R$100" },
          { id: 3, description: "Promoção de verão: compra 1 leva 2" },
        ],
        additionalFunctions: {
          audioResponse: false,
          useEmojis: true,
          protocolService: true,
          humanSales: false,
        },
      });
    }, 1000);
  });

  return requestResult;
};

export const updateControlCleoData = (newData: ControlCleoData): void => {
  requestResult = Promise.resolve(newData);
};