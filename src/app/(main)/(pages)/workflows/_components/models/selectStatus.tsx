import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  status: boolean | null
}

const SelectStatus = ({ status }: Props) => {
  return (
    <div className="flex flex-col space-y-1.5 mt-3">
      <Label htmlFor="name">Status</Label>
      <Select defaultValue={status ? "ativado" : "desativado"}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="ativado">O modelo está ativo</SelectItem>
            <SelectItem value="desativado">O modelo está pausado</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

  )
}

export default SelectStatus
