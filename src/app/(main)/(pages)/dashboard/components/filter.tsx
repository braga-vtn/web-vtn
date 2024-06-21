"use client"

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

export function DashboardFilter() {
  return (
      <Select>
        <SelectTrigger className="w-[160px] h-10">
          <SelectValue placeholder="Selecione"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="7-day">Últimos 7 dias</SelectItem>
            <SelectItem value="14-day">Últimos 14 dias</SelectItem>
            <SelectItem value="30-day">Últimos 30 dias</SelectItem>
            <SelectItem value="3-month">Últimos 3 meses</SelectItem>
            <SelectItem value="12-month">Últimos 12 meses</SelectItem>
            <SelectItem value="month-current">Este mês</SelectItem>
            <SelectItem value="two-months">Este bimestre</SelectItem>
            <SelectItem value="tree-months">Este trimestre</SelectItem>
            <SelectItem value="semester">Este semeste</SelectItem>
            <SelectItem value="year-current">Este ano</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}
