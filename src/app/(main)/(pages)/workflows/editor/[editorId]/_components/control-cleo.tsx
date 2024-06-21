import React, { useState, useEffect, ChangeEvent } from 'react';
import { EditorNodeType } from '@/lib/types';
import {
  Card, CardContent, CardDescription, CardFooter,
} from '@/components/ui/card';
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { HoverAssistantName, HoverMainGoal, HoverModel, HoverNameResponse, HoverResponseTime } from './control-hover';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { fetchControlCleoData, updateControlCleoData } from '../../../_actions/controlCleoRequest';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import DialogCleo from './dialog-cleo';

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
  additionalFunctions: {
    audioResponse: boolean;
    useEmojis: boolean;
    protocolService: boolean;
    humanSales: boolean;
  };
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
};

type Props = {
  node: EditorNodeType | EditorNodeType[] | undefined;
  onExample: () => void;
};

const ControlCleo = ({ node, onExample }: Props) => {

  const [selectValues, setSelectValues] = useState<SelectValuesType>({
    nameResponse: false,
    assistantName: '',
    model: '',
    responseTime: '',
    primaryGoal: '',
    humanService: [],
    socialMedia: [],
    offer: [],
    additionalFunctions: {
      audioResponse: false,
      useEmojis: false,
      protocolService: false,
      humanSales: false
    },
    callService: '',
    refundTime: '',
    couponsPromotions: '',
    paymentMethods: '',
    deliveryTime: '',
    shippingProduct: '',
    originProducts: '',
  });

  useEffect(() => {
    fetchControlCleoData().then(data => {
      setSelectValues(prevValues => ({
        ...prevValues,
        nameResponse: data.nameResponse,
        assistantName: data.assistantName || '',
        model: data.model || '',
        responseTime: data.responseTime || '',
        primaryGoal: data.primaryGoal || '',
        additionalFunctions: data.additionalFunctions || {
          audioResponse: false,
          useEmojis: false,
          protocolService: false,
          humanSales: false
        },
        humanService: data.humanService || [],
        socialMedia: data.socialMedia || [],
        offer: data.offer || [],
        callService: data.callService || '',
        refundTime: data.refundTime || '',
        couponsPromotions: data.couponsPromotions || '',
        paymentMethods: data.paymentMethods || '',
        deliveryTime: data.deliveryTime || '',
        shippingProduct: data.shippingProduct || '',
        originProducts: data.originProducts || '',
      }));
    });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSelectValues(prevValues => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleAdditionalFunctionsChange = (key: keyof SelectValuesType['additionalFunctions'], checked: boolean) => {
    setSelectValues(prevValues => ({
      ...prevValues,
      additionalFunctions: {
        ...prevValues.additionalFunctions,
        [key]: checked,
      },
    }));
  };

  const handleSelectChange = (field: keyof SelectValuesType, value: string) => {
    setSelectValues(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const data: SelectValuesType = {
      ...selectValues
    };
    
    updateControlCleoData(data);
    onExample();
  };

  const handleDialogCleoData = (data: Partial<SelectValuesType>) => {
    setSelectValues(prevValues => ({
      ...prevValues,
      ...data,
    }));
  };
  
  return (
    <div>
      {!Array.isArray(node) && node && (node as EditorNodeType).data && (
        <>
          <ScrollArea className="h-[75vh] w-full">
            <Card className="w-full h-full border-hidden">
              <CardContent>
                <div>
                  <Label htmlFor="assistantName" className="inline-flex items-center">
                    <p>
                      Nome do Assistente
                    </p>
                    <HoverAssistantName />
                  </Label>
                  <Input
                    type="text"
                    id="assistantName"
                    value={selectValues.assistantName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='mt-5'>
                  <Label htmlFor="model" className="inline-flex items-center">
                    <p>
                      Modelo
                    </p>
                    <HoverModel />
                  </Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('model', value)}
                    value={selectValues.model}
                  >
                    <SelectTrigger className="w-full my-1">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="vtn-basic">
                          vtn-basic
                        </SelectItem>
                        <SelectItem value="vtn-pro">
                          vtn-pro
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='mt-5'>
                  <Label htmlFor="responseTime" className="inline-flex items-center">
                    <p>
                      Tempo de Resposta
                    </p>
                    <HoverResponseTime />
                  </Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('responseTime', value)}
                    value={selectValues.responseTime}
                  >
                    <SelectTrigger className="w-full my-1">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="30-seconds">
                          30s
                        </SelectItem>
                        <SelectItem value="45-seconds">
                          45s
                        </SelectItem>
                        <SelectItem value="01-minutes">
                          1 min
                        </SelectItem>
                        <SelectItem value="02-minutes">
                          2 min
                        </SelectItem>
                        <SelectItem value="03-minutes">
                          3 min
                        </SelectItem>
                        <SelectItem value="04-minutes">
                          4 min
                        </SelectItem>
                        <SelectItem value="05-minutes">
                          5 min
                        </SelectItem>
                        <SelectItem value="07-minutes">
                          7 min
                        </SelectItem>
                        <SelectItem value="10-minutes">
                          10 min
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='mt-5'>
                  <Label htmlFor="primaryGoal" className="inline-flex items-center">
                    <p>
                      Objetivo Principal
                    </p>
                    <HoverMainGoal />
                  </Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('primaryGoal', value)}
                    value={selectValues.primaryGoal}
                  >
                    <SelectTrigger className="w-full my-1">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">
                          Geral
                        </SelectItem>
                        <SelectItem value="sales">
                          Vendas
                        </SelectItem>
                        <SelectItem value="support">
                          Suporte
                        </SelectItem>
                        <SelectItem value="ask-questions">
                          Tirar Dúvidas
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='mt-5'>
                  <Card className="w-full h-full">
                    <CardContent className=' mt-4'>
                      <div className="mb-4">
                        <Label className="additional-functions-title">
                          Funções Adicionais
                        </Label>
                        <CardDescription>
                          Personalize alguns parâmetros da Cleo
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Checkbox
                          id="audioResponse"
                          checked={selectValues.additionalFunctions.audioResponse}
                          onCheckedChange={(checked) => handleAdditionalFunctionsChange('audioResponse', checked as boolean)}
                        />
                        <label
                          htmlFor="audioResponse"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Respostas com Áudio
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 ml-4">
                        <Checkbox
                          id="useEmojis"
                          checked={selectValues.additionalFunctions.useEmojis}
                          onCheckedChange={(checked) => handleAdditionalFunctionsChange('useEmojis', checked as boolean)}
                        />
                        <label
                          htmlFor="useEmojis"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Uso de Emojis
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 ml-4">
                        <Checkbox
                          id="protocolService"
                          checked={selectValues.additionalFunctions.protocolService}
                          onCheckedChange={(checked) => handleAdditionalFunctionsChange('protocolService', checked as boolean)}
                        />
                        <label
                          htmlFor="protocolService"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Atendimento com Protocolo
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 ml-4">
                        <Checkbox
                          id="humanSales"
                          checked={selectValues.additionalFunctions.humanSales}
                          onCheckedChange={(checked) => handleAdditionalFunctionsChange('humanSales', checked as boolean)}
                        />
                        <label
                          htmlFor="humanSales"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Enviar vendas para o Humano
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <DialogCleo 
                  selectValues={selectValues} 
                  onUpdate={handleDialogCleoData} 
                />
              </CardContent>
              <CardFooter className="mt-2">
                <Button variant={"gooeyLeft"} className="w-full mb-16" onClick={handleSave}>
                  <Check className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </Button>
              </CardFooter>
            </Card>
          </ScrollArea>
        </>
      )}
    </div>
  );
};

export default ControlCleo;