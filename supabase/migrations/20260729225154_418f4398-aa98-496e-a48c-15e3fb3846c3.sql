CREATE TABLE public.pedidos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_nsu text NOT NULL UNIQUE,
  cliente text NOT NULL,
  cidade text,
  estado text,
  data_entrega text,
  periodo text,
  itens jsonb NOT NULL DEFAULT '[]'::jsonb,
  total_centavos integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'pendente',
  payment_url text,
  paid_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.pedidos TO service_role;

ALTER TABLE public.pedidos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages pedidos"
ON public.pedidos FOR ALL
TO service_role
USING (true)
WITH CHECK (true);