# Padronizar fotos dos produtos em fundo branco

## Objetivo
Manter cada produto original, sem trocar modelos, cores, textos ou detalhes, e substituir apenas o cenário por um fundo branco uniforme em todas as categorias exibidas.

## Etapas
1. Levantar todas as imagens realmente usadas no catálogo, incluindo arquivos locais e fotos armazenadas nos ativos do projeto.
2. Aplicar recorte inteligente do produto em cada imagem, preservando bordas e detalhes, e compor cada resultado individualmente sobre branco puro.
3. Salvar as versões tratadas em uma pasta própria e fazer o catálogo usar essas versões, sem alterar nomes, preços, ordem ou categorias.
4. Conferir amostras de todas as categorias em telas de celular e computador, corrigindo recortes ruins antes de concluir.

## Detalhes técnicos
- O tratamento será automatizado com segmentação de imagem, mantendo a resolução e proporção de cada original.
- Fotos que já possuem fundo branco também passarão pela validação, mas não serão alteradas desnecessariamente.
- Imagens repetidas serão processadas uma única vez e reutilizadas onde já aparecem.
