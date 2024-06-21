import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FloatingLabelInput } from '@/components/ui/FloatingInput';
import { X } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FloatingLabelTextArea } from '@/components/ui/FloatingLabelTextArea';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DialogCleoProps {
  selectValues: SelectValuesType;
  onUpdate: (data: Partial<SelectValuesType>) => void;
}

interface SelectValuesType {
  humanService: HumanServiceField[];
  socialMedia: SocialMediaField[];
  offer: OfferField[];
  callService: string;
  refundTime: string;
  couponsPromotions: string;
  paymentMethods: string;
  deliveryTime: string;
  shippingProduct: string;
  originProducts: string;
}

interface HumanServiceField {
  id: number;
  value: string;
}

interface SocialMediaField {
  id: number;
  name: string;
  description: string;
}

interface OfferField {
  id: number;
  description: string;
}

const DialogCleo: React.FC<DialogCleoProps> = ({ selectValues, onUpdate }) => {
  const { humanService, socialMedia, offer } = selectValues;

  const handleAddService = (): void => {
    const updated = [...humanService, { id: Date.now(), value: "" }];
    onUpdate({ humanService: updated });
  };

  const handleRemoveService = (id: number): void => {
    const updated = humanService.filter(service => service.id !== id);
    onUpdate({ humanService: updated });
  };

  const handleChangeService = (id: number, value: string): void => {
    const updated = humanService.map(service =>
      service.id === id ? { ...service, value } : service
    );
    onUpdate({ humanService: updated });
  };

  const handleAddSocial = (): void => {
    const updated = [...socialMedia, { id: Date.now(), name: "", description: "" }];
    onUpdate({ socialMedia: updated });
  };

  const handleRemoveSocial = (id: number): void => {
    const updated = socialMedia.filter(social => social.id !== id);
    onUpdate({ socialMedia: updated });
  };

  const handleChangeSocial = (id: number, field: string, value: string): void => {
    const updated = socialMedia.map(social =>
      social.id === id ? { ...social, [field]: value } : social
    );
    onUpdate({ socialMedia: updated });
  };

  const handleAddOffer = (): void => {
    const updated = [...offer, { id: Date.now(), description: "" }];
    onUpdate({ offer: updated });
  };

  const handleRemoveOffer = (id: number): void => {
    const updated = offer.filter(offer => offer.id !== id);
    onUpdate({ offer: updated });
  };

  const handleChangeOffer = (id: number, value: string): void => {
    const updated = offer.map(offer =>
      offer.id === id ? { ...offer, description: value } : offer
    );
    onUpdate({ offer: updated });
  };

  return (
    <div className="mt-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="gooeyLeftDark" className="w-full">
            Dados da Empresa
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[65rem] h-[96vh]">
          <DialogHeader>
            <DialogTitle>
              Dados da Empresa
            </DialogTitle>
            <DialogDescription>
              Quanto mais informações a Cleo tiver sobre sua empresa, melhor será a qualidade das respostas enviadas aos seus clientes. Portanto, recomendamos que você preencha todos os campos de dados!
            </DialogDescription>
            <Tabs defaultValue="company-policies" className="w-full">
              <TabsList className="space-x-2 mt-4 bg-neutral-100 dark:bg-neutral-900">
                <TabsTrigger value="company-policies">
                  Políticas da Empresa
                </TabsTrigger>
                <TabsTrigger value="human-activities">
                  Atividades do Humano
                </TabsTrigger>
                <TabsTrigger value="social-media">
                  Redes Sociais
                </TabsTrigger>
                <TabsTrigger value="coupons-promotions">
                  Cupons e Promoções
                </TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[73vh] w-full">
                <TabsContent value="company-policies">
                  <div className="flex items-center space-x-2 mt-8">
                    <label className="font-medium leading-6">
                      Perguntas Estratégicas
                    </label>
                  </div>
                  <DialogDescription>
                    Essas perguntas abordam tópicos relevantes e específicos para o seu negócio. Responda àquelas que se aplicam à sua empresa.
                  </DialogDescription>
                  <div className='space-y-4'>
                    <FloatingLabelInput
                      id="call-service"
                      value={selectValues.callService}
                      maxLength={120}
                      className="mt-4"
                      label="Como é o Atendimento por Ligação?"
                      onChange={(e) => onUpdate({ callService: e.target.value })}
                    />
                    <FloatingLabelInput
                      id="refund-time"
                      value={selectValues.refundTime}
                      maxLength={120}
                      label="Qual o tempo para pedir o Reembolso?"
                      onChange={(e) => onUpdate({ refundTime: e.target.value })}
                    />
                    <FloatingLabelInput
                      id="coupons-promotions"
                      value={selectValues.couponsPromotions}
                      maxLength={120}
                      label="Como encontrar Cupons e Promoções?"
                      onChange={(e) => onUpdate({ couponsPromotions: e.target.value })}
                    />
                    <FloatingLabelInput
                      id="payment-methods"
                      value={selectValues.paymentMethods}
                      maxLength={120}
                      label="Quais as Formas de Pagamento?"
                      onChange={(e) => onUpdate({ paymentMethods: e.target.value })}
                    />
                    <FloatingLabelInput
                      id="delivery-time"
                      value={selectValues.deliveryTime}
                      maxLength={120}
                      label="Qual o Prazo de Entrega?"
                      onChange={(e) => onUpdate({ deliveryTime: e.target.value })}
                    />
                    <FloatingLabelInput
                      id="shipping-product"
                      value={selectValues.shippingProduct}
                      maxLength={120}
                      label="Quais as Formas de Envio do produto?"
                      onChange={(e) => onUpdate({ shippingProduct: e.target.value })}
                    />
                    <FloatingLabelInput
                      id="origin-products"
                      value={selectValues.originProducts}
                      maxLength={120}
                      label="Qual a origem dos produtos?"
                      onChange={(e) => onUpdate({ originProducts: e.target.value })}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="human-activities">
                  <div>
                    <div className="flex items-center space-x-2 mt-8">
                      <label className="font-medium leading-6">
                        Descrição das Atividades
                      </label>
                    </div>
                    <DialogDescription>
                      Nosso modelo aprende com você, por esse motivo, descreva sucintamente as situações que devem ser transferidas ao Humano.
                    </DialogDescription>
                    {humanService.map((service) => (
                      <div key={service.id} className="flex items-center my-4">
                        <FloatingLabelInput
                          maxLength={40}
                          value={service.value}
                          onChange={(e) => handleChangeService(service.id, e.target.value)}
                          label='Exp.: "Propostas de parceria com a empresa"'
                          className='w-[100vh]'
                        />
                        <Button
                          className="ml-2"
                          size="icon"
                          variant="outline"
                          onClick={() => handleRemoveService(service.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {humanService.length < 30 &&
                      <Button
                        type="button"
                        disabled={humanService.length >= 30}
                        variant="outline"
                        size="sm"
                        className="mt-5 mb-16"
                        onClick={handleAddService}
                      >
                        Adicionar Situação
                      </Button>
                    }
                  </div>
                </TabsContent>
                <TabsContent value="social-media">
                  <div>
                    <div className="flex items-center space-x-2 mt-8">
                      <label className="font-medium leading-6">
                        Canais de Comunicação
                      </label>
                    </div>
                    <DialogDescription>
                      A Cleo direciona clientes para os canais e redes sociais da empresa quando necessário. Adicione abaixo todos os canais da sua empresa!
                    </DialogDescription>
                    {socialMedia.map((social) => (
                      <div key={social.id} className="flex items-center my-4">
                        <Select
                          value={social.name}
                          onValueChange={(value) => handleChangeSocial(social.id, 'name', value)}
                        >
                          <SelectTrigger className='w-48 mr-2'>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="instagram">Instagram</SelectItem>
                              <SelectItem value="facebook">Facebook</SelectItem>
                              <SelectItem value="twitter">Twitter</SelectItem>
                              <SelectItem value="linkedin">LinkedIn</SelectItem>
                              <SelectItem value="youtube">YouTube</SelectItem>
                              <SelectItem value="tiktok">TikTok</SelectItem>
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                              <SelectItem value="snapchat">Snapchat</SelectItem>
                              <SelectItem value="reddit">Reddit</SelectItem>
                              <SelectItem value="twitch">Twitch</SelectItem>
                              <SelectItem value="telegram">Telegram</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FloatingLabelInput
                          id="description"
                          label="Como acessar esse canal?"
                          maxLength={70}
                          value={social.description}
                          className='w-[78vh]'
                          onChange={(e) => handleChangeSocial(social.id, 'description', e.target.value)}
                        />
                        <Button
                          className="ml-2"
                          size="icon"
                          variant="outline"
                          onClick={() => handleRemoveSocial(social.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {socialMedia.length < 11 &&
                      <Button
                        type="button"
                        disabled={socialMedia.length >= 11}
                        variant="outline"
                        size="sm"
                        className="mt-5 mb-16"
                        onClick={handleAddSocial}
                      >
                        Adicionar Canal
                      </Button>
                    }
                  </div>
                </TabsContent>
                <TabsContent value="coupons-promotions">
                  <div>
                    <div className="flex items-center space-x-2 mt-8">
                      <label className="font-medium leading-6">
                        Descrição das Ofertas
                      </label>
                    </div>
                    <DialogDescription>
                      Nossos modelos irão divulgar as promoções e cupons que você adicionar aqui. Descreva todas as promoções ativas!
                    </DialogDescription>
                    {offer.map((offer) => (
                      <div key={offer.id} className="flex items-center my-4">
                        <FloatingLabelTextArea
                          id="description"
                          label="Quais as Condições da Promoção?"
                          maxLength={342}
                          value={offer.description}
                          className='w-[100vh]'
                          onChange={(e) => handleChangeOffer(offer.id, e.target.value)}
                        />
                        <Button
                          className="ml-2"
                          size="icon"
                          variant="outline"
                          onClick={() => handleRemoveOffer(offer.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {offer.length < 5 &&
                      <Button
                        type="button"
                        disabled={offer.length >= 5}
                        variant="outline"
                        size="sm"
                        className="mt-5 mb-16"
                        onClick={handleAddOffer}
                      >
                        Adicionar Oferta
                      </Button>
                    }
                  </div>
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogCleo;