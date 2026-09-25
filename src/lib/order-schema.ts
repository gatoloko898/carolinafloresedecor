import { z } from "zod";

const cleanRequired = (label: string, max: number) =>
  z.string().trim().min(1, `${label} é obrigatório.`).max(max, `${label} deve ter no máximo ${max} caracteres.`);

export const customerSchema = z.object({
  nome: cleanRequired("Seu nome", 100),
  destinatario: cleanRequired("Nome de quem vai receber", 100),
  endereco: cleanRequired("Endereço da entrega", 300),
  cidade: cleanRequired("Cidade", 80),
  estado: cleanRequired("Estado", 40),
  data: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Informe uma data de entrega válida."),
  periodo: z.enum(["manha", "tarde"]),
  mensagemCartao: z.string().trim().max(500, "A mensagem deve ter no máximo 500 caracteres.").default(""),
});

export const checkoutSchema = z.object({
  order_nsu: z.string().trim().regex(/^CF-\d{10,16}-[a-z0-9]{6}$/i, "Código do pedido inválido."),
  items: z
    .array(
      z.object({
        name: cleanRequired("Nome do item", 150),
        description: cleanRequired("Descrição do item", 200),
        price: z.number().int().min(0).max(10_000_000),
        quantity: z.number().int().min(1).max(50),
      }),
    )
    .min(1)
    .max(100),
  customer: customerSchema,
  redirect_url: z.string().url().max(500),
});

export type CustomerDetails = z.infer<typeof customerSchema>;