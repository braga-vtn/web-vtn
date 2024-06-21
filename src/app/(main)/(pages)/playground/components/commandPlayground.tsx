import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import SvgOpenAI from './svg-openai';
import SvgGemini from './svg-gemini';
import SvgVistune from './svg-vistune';
import SvgAnthropic from './svg-anthropic';
import SvgGoogle from './svg-google';
import SvgMeta from './svg-meta';

interface CommandPlaygroundProps {
  isSending: boolean;
  planUser: string;
  remainingInteractions: number;
  selectedModel: string;
  selectedTabs: string;
  handleModelChange: (model: string) => void;
  handleTabsChange: (tabs: string) => void;
  handleNewChat: () => void;
  handleInstructionChange: (instruction: string) => void;
}

const CommandPlayground: React.FC<CommandPlaygroundProps> = (props) => {
  const { isSending, planUser, remainingInteractions, selectedTabs, selectedModel, handleModelChange, handleTabsChange, handleNewChat, handleInstructionChange } = props;

  return (
    <div className="relative hidden flex-col items-start gap-8 md:flex">
      <form className="grid w-full h-full items-start gap-6">
        <fieldset className="grid gap-6 p-4">
          <div className="grid gap-3">
            <Tabs
              className="w-full"
              value={selectedTabs}
              onValueChange={(value) => { handleTabsChange(value); handleModelChange("cleo") }}
            >
              <TabsList className="w-full bg-neutral-100 dark:bg-neutral-900">
                <TabsTrigger disabled={isSending} value="vtn-basic" className="w-full">
                  vtn-basic
                </TabsTrigger>
                <TabsTrigger disabled={isSending || planUser == 'starter'} value="vtn-pro" className="w-full">
                  vtn-pro
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
              </TabsContent>
              <TabsContent value="password">
              </TabsContent>
            </Tabs>
            <Select
              disabled={isSending}
              value={selectedModel}
              onValueChange={(value) => { handleModelChange(value); handleNewChat(); }}
            >
              <SelectTrigger id="model" className="items-start [&_[data-description]]:hidden">
                <SelectValue placeholder="Selecione o Modelo" />
              </SelectTrigger>
              <SelectContent className='max-h-72'>
                <SelectItem value="cleo" disabled={false}>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <SvgVistune />
                    <div className="grid gap-0.5">
                      <p>
                        Vistune
                        <span className="font-medium text-foreground">
                          Cleo
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        O seu modelo de atendimento ao cliente.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="vision" disabled={planUser == 'starter'}>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <SvgVistune />
                    <div className="grid gap-0.5">
                      <p>
                        Vistune 
                        <span className="font-medium text-foreground">
                          Vision
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Um analista de dados da sua Empresa.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="custom" disabled={planUser !== 'enterprise'}>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <SvgVistune />
                    <div className="grid gap-0.5">
                      <p>
                        Vistune 
                        <span className="font-medium text-foreground">
                          Personalizado
                        </span>
                      </p>
                      <p className="text-xs" data-description>
                        Um modelo treinado por você, use e abuse.
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <Separator className="my-2" />
                {selectedTabs == "vtn-pro" &&
                  <SelectItem value="gpt-4o" disabled={planUser == 'starter'}>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <SvgOpenAI />
                      <div className="grid gap-0.5">
                        <p>
                          OpenAI 
                          <span className="font-medium text-foreground">
                            gpt-4o
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          Desfrute do modelo mais potente do mundo.
                        </p>
                      </div>
                    </div>
                  </SelectItem>}
                {selectedTabs !== "vtn-pro" &&
                  <SelectItem value="gpt-3.5-turbo-0125" disabled={false}>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <SvgOpenAI />
                      <div className="grid gap-0.5">
                        <p>
                          OpenAI 
                          <span className="font-medium text-foreground">
                            gpt-3.5-turbo-0125
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          O custo benefício da OpenAI.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                }
                {selectedTabs == "vtn-pro" &&
                  <SelectItem value="gemini-1.5-pro" disabled={planUser == 'starter'}>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <SvgGemini />
                      <div className="grid gap-0.5">
                        <p>
                          Google 
                          <span className="font-medium text-foreground">
                            gemini-1.5-pro
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          O avançado modelo do Google em suas mãos.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                }
                {selectedTabs == "vtn-pro" &&
                  <SelectItem value="claude-3-opus" disabled={planUser == 'starter'}>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <SvgAnthropic />
                      <div className="grid gap-0.5">
                        <p>
                          Anthropic 
                          <span className="font-medium text-foreground">
                            claude-3-opus
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          O modelo mais avançado da Anthropic.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                }
                {selectedTabs == "vtn-pro" &&
                  <SelectItem value="palm-2" disabled={planUser == 'starter'}>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <SvgGoogle />
                      <div className="grid gap-0.5">
                        <p>
                          Google 
                          <span className="font-medium text-foreground">
                            palm-2
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          Um modelo alternativo do Google.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                }
                {selectedTabs == "vtn-pro" &&
                  <SelectItem value="llama-3" disabled={planUser == 'starter'}>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <SvgMeta />
                      <div className="grid gap-0.5">
                        <p>
                          Meta 
                          <span className="font-medium text-foreground">
                            llama-3
                          </span>
                        </p>
                        <p className="text-xs" data-description>
                          O modelo mais avançado da Meta.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                }
              </SelectContent>
            </Select>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 p-4">

          <legend className="-ml-1 px-1 text-sm font-medium">

            Instrução

          </legend>

          <div className="grid gap-3">

            <Textarea

              id="content"

              disabled={isSending || remainingInteractions < 0}

              placeholder="Quero que foque em..."

              className="resize-none min-h-[calc(100vh-365px)]"

              onChange={(e) => handleInstructionChange(e.target.value)} // Adicione esta linha

            />

          </div>

        </fieldset>
      </form>
    </div>
  );
}

export default CommandPlayground;