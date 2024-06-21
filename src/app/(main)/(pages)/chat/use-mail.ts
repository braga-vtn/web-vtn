import { atom, useAtom } from "jotai";
import { Mail, mails } from "./data";

interface Config {
  selected: number | null;
  mails: Mail[]; // Certifique-se de que `mails` existe
}

const configAtom = atom<Config>({
  selected: mails[0].id, // Inicializa com o primeiro mail selecionado
  mails: mails, // Inicializa com a lista de mails
});

export function useMail() {
  return useAtom(configAtom);
}