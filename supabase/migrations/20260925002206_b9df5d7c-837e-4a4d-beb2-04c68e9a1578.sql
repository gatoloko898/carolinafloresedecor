ALTER TABLE public.pedidos
  ADD COLUMN IF NOT EXISTS destinatario text,
  ADD COLUMN IF NOT EXISTS endereco_entrega text,
  ADD COLUMN IF NOT EXISTS mensagem_cartao text;

ALTER TABLE public.pedidos
  DROP CONSTRAINT IF EXISTS pedidos_destinatario_length,
  DROP CONSTRAINT IF EXISTS pedidos_endereco_entrega_length,
  DROP CONSTRAINT IF EXISTS pedidos_mensagem_cartao_length;

ALTER TABLE public.pedidos
  ADD CONSTRAINT pedidos_destinatario_length CHECK (destinatario IS NULL OR char_length(destinatario) <= 100),
  ADD CONSTRAINT pedidos_endereco_entrega_length CHECK (endereco_entrega IS NULL OR char_length(endereco_entrega) <= 300),
  ADD CONSTRAINT pedidos_mensagem_cartao_length CHECK (mensagem_cartao IS NULL OR char_length(mensagem_cartao) <= 500);