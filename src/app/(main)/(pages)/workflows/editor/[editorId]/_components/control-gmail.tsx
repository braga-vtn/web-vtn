import React, { useState, useEffect } from 'react';
import { EditorNodeType } from '@/lib/types';
import {
  Card, CardContent, CardFooter,
} from '@/components/ui/card';
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { HoverNameResponse } from './control-hover';
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertCircle, Check, LinkIcon } from 'lucide-react';
import { SelectTime } from '@/components/global/select-time';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { fetchGmailData } from '../../../_actions/gmailRequest';
import { fetchControlGmailData, updateControlGmailData } from '../../../_actions/controlGmailRequest';

type OperationHoursType = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  active: boolean;
};

type OpeningHoursType = {
  [key: string]: {
    checkout: boolean;
    start: string;
    end: string;
  };
};

type SelectValuesType = {
  nameResponse: boolean;
};

type FinalDataType = {
  data: SelectValuesType & { openingHours: OpeningHoursType };
};

type Props = {
  node: EditorNodeType | EditorNodeType[] | undefined;
  onExample: () => void;
};

const ControlGmail = ({ node, onExample }: Props) => {
  const [operationHours, setOperationHours] = useState<OperationHoursType[]>(
    Array(7).fill({
      startDate: undefined,
      endDate: undefined,
      active: false,
    })
  );
  const [selectValues, setSelectValues] = useState<SelectValuesType>({
    nameResponse: false,
  });
  const [finalData, setFinalData] = useState<FinalDataType | null>(null);
  const [gmailData, setGmailData] = useState<{ mailGmail: string; connectedGmail: boolean } | null>(null);

  useEffect(() => {
    fetchGmailData().then((data) => {
      setGmailData(data);
    });
  }, []);

  useEffect(() => {
    fetchControlGmailData().then(data => {
      setSelectValues({
        nameResponse: data.nameResponse,
      });

      const updatedOperationHours = Object.values(data.openingHours).map(day => ({
        startDate: day.start ? new Date(`1970-01-01T${day.start}:00`) : undefined,
        endDate: day.end ? new Date(`1970-01-01T${day.end}:00`) : undefined,
        active: day.checkout
      }));

      setOperationHours(updatedOperationHours);
    });
  }, []);

  const handleSelectChange = (value: string, name: string) => {
    const booleanValue = value.startsWith('activated') ? true : false;
    setSelectValues((prev) => ({
      ...prev,
      [name]: booleanValue,
    }));
  };

  const formatTime = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const handleSave = () => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const openingHours: OpeningHoursType = operationHours.reduce((acc, item, index) => {
      acc[daysOfWeek[index]] = {
        checkout: item.active,
        start: formatTime(item.startDate),
        end: formatTime(item.endDate),
      };
      return acc;
    }, {} as OpeningHoursType);

    const data = {
      ...selectValues,
      openingHours
    };

    const finalData: FinalDataType = { data };

    setFinalData(finalData);
    updateControlGmailData(data);

    onExample();
  };

  return (
    <div>
      {gmailData?.connectedGmail ?
        <>
          {!Array.isArray(node) && node && (node as EditorNodeType).data && (
            <>
              <ScrollArea className="h-[75vh] w-full">
                <Card className="w-full h-full border-hidden">
                  <CardContent>
                    <div>
                      <Label htmlFor="name-response" className="inline-flex items-center">
                        <p>Nome na Resposta</p>
                        <HoverNameResponse />
                      </Label>
                      <Select value={selectValues.nameResponse ? 'activated-name-response' : 'disabled-name-response'} onValueChange={(value) => handleSelectChange(value, 'nameResponse')}>
                        <SelectTrigger className="w-full my-1">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="activated-name-response">
                              Ativado
                            </SelectItem>
                            <SelectItem value="disabled-name-response">
                              Desativado
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="mt-8">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="gooeyLeftDark" className="w-full">
                            Horário de Funcionamento
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle>
                              Horário de Funcionamento
                            </DialogTitle>
                            <DialogDescription>
                              Você pode determinar o horário que o atendimento pode ser feito.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="my-5">
                            {["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"].map((day, index) => (
                              <SelectTime
                                key={index}
                                label={day}
                                active={operationHours[index]?.active}
                                onActiveChange={(active) => setOperationHours((prev) => {
                                  const updated = [...prev];
                                  updated[index] = { ...updated[index], active };
                                  return updated;
                                })}
                                startDate={operationHours[index]?.startDate}
                                setStartDate={(startDate) => setOperationHours((prev) => {
                                  const updated = [...prev];
                                  updated[index] = { ...updated[index], startDate };
                                  return updated;
                                })}
                                endDate={operationHours[index]?.endDate}
                                setEndDate={(endDate) => setOperationHours((prev) => {
                                  const updated = [...prev];
                                  updated[index] = { ...updated[index], endDate };
                                  return updated;
                                })}
                              />
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
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
        </>
        :
        <Card className="w-full h-full border-hidden">
          <CardContent>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>
                Não está Conectado!
              </AlertTitle>
              <AlertDescription className='text-muted-foreground text-xs'>
                Sua conta do Gmail ainda não está integrado à Vistune.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="mt-2">
            <Link href="/connections" className='w-full'>
              <Button variant={"gooeyLeft"} className="w-full mb-16">
                <LinkIcon className="mr-2 h-4 w-4" />
                Conectar Agora
              </Button>
            </Link>
          </CardFooter>
        </Card>
      }
    </div>
  );
};

export default ControlGmail;