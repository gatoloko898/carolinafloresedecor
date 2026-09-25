# Completar dados de entrega e cartão

## Alterações
- Adicionar ao fechamento os campos obrigatórios “Nome de quem vai receber” e “Endereço da entrega”.
- Adicionar o campo opcional “Mensagem para o cartão”, com limites e avisos de validação.
- Validar todos os dados no formulário e novamente no envio do pedido.
- Salvar os novos dados junto ao pedido pago.
- Incluir destinatário, endereço e mensagem do cartão no pedido completo enviado ao WhatsApp.
- Manter o encaminhamento automático para o WhatsApp assim que o pagamento for confirmado.

## Detalhes técnicos
- Atualizar o formulário, a rota de criação do pagamento, a consulta de status e a página de confirmação.
- Criar as colunas necessárias no banco com acesso restrito ao serviço da loja.
- Validar o fluxo completo e a visualização em celular.
