import React, { useState, useEffect, ChangeEvent } from 'react';
import { EditorNodeType } from '@/lib/types';
import {
  Card, CardContent, CardFooter,
} from '@/components/ui/card';
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { HoverAssistantName, HoverModel } from './control-hover';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { fetchControlVisionData, updateControlVisionData } from '../../../_actions/controlVisionRequest';

type SelectValuesType = {
  assistantName: string;
  model: string;
};

type Props = {
  node: EditorNodeType | EditorNodeType[] | undefined;
  onExample: () => void;
};

const ControlVision = ({ node, onExample }: Props) => {

  const [selectValues, setSelectValues] = useState<SelectValuesType>({
    assistantName: '',
    model: '',
  });

  useEffect(() => {
    fetchControlVisionData().then(data => {
      setSelectValues(prevValues => ({
        ...prevValues,
        assistantName: data.assistantName || '',
        model: data.model || '',
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

    updateControlVisionData(data);
    onExample();
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

export default ControlVision;