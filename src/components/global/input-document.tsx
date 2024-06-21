import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './check-document';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { formatCpfCnpj } from './format-document';
import { Button } from '../ui/button';

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      cpfCnpj: '',
    },
  });

  const onSubmit = (values: z.infer<typeof validationSchema>) => {
  };

  return (
        <FormField
          control={form.control}
          name="cpfCnpj"
          render={({ field: { onChange, ...props } }) => (
            <FormItem>
              <FormLabel>CPF/CNPJ*</FormLabel>
              <FormControl>
                <Input
                  onChange={(e) => {
                    const { value } = e.target;
                    e.target.value = formatCpfCnpj(value);
                    onChange(e);
                  }}
                  placeholder="CPF/CNPJ"
                  {...props}
                />
              </FormControl>
            </FormItem>
          )}
        />
  );
};