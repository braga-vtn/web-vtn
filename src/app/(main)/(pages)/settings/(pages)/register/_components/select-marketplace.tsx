import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectMarketplace() {
  return (
    <Select>
      <SelectTrigger className="w-[340px]">
        <SelectValue placeholder="Selecione mercado" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Selecione mercado</SelectLabel>
          <SelectItem value="est">E-commerce</SelectItem>
          <SelectItem value="cst">Clínicas médicas</SelectItem>
          <SelectItem value="mst">Escritórios de advocacia</SelectItem>
          <SelectItem value="pst">Restaurantes</SelectItem>
          <SelectItem value="akst">Academias de ginástica</SelectItem>
          <SelectItem value="hst">Consultoria financeira</SelectItem>
          <SelectItem value="mdg">Marketing digital</SelectItem>
          <SelectItem value="imb">Imobiliárias</SelectItem>
          <SelectItem value="edi">Educação infantil</SelectItem>
          <SelectItem value="pet">Pet shops</SelectItem>
          <SelectItem value="tec">Tecnologia da informação</SelectItem>
          <SelectItem value="cpl">Coaching pessoal</SelectItem>
          <SelectItem value="ere">Energia renovável</SelectItem>
          <SelectItem value="org">Organização de eventos</SelectItem>
          <SelectItem value="liv">Livrarias independentes</SelectItem>
          <SelectItem value="sci">Serviços de cuidados para idosos</SelectItem>
          <SelectItem value="bio">Biotecnologia</SelectItem>
          <SelectItem value="rob">Robótica</SelectItem>
          <SelectItem value="dea">Desenvolvimento de aplicativos</SelectItem>
          <SelectItem value="pco">Produção de conteúdo online</SelectItem>
          <SelectItem value="etc">Educação e treinamento corporativo</SelectItem>
          <SelectItem value="out">Outro</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
