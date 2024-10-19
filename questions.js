const questions = [
    { 
        level: 'Fácil', 
        text: 'O que é tráfego pago?', 
        options: ['Visitas orgânicas ao site', 'Visitas geradas por anúncios pagos', 'Visitas de redes sociais', 'Visitas de buscas diretas'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é a principal plataforma de anúncios do Google?', 
        options: ['Google Search', 'Google Ads', 'Google Analytics', 'Google Drive'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa CPC em tráfego pago?', 
        options: ['Custo por conversão', 'Custo por clique', 'Conversões por clique', 'Cliques por custo'], 
        answer: 1, 
        points: 10 
    },
    {
        level: 'Fácil',
        text: 'Qual é a principal plataforma de anúncios do Facebook?',
        options: ['Facebook Pages', 'Facebook Business', 'Facebook Ads', 'Facebook Marketplace'],
        answer: 2,
        points: 10
    },
    { 
        level: 'Fácil', 
        text: 'O que é ROI no contexto de tráfego pago?', 
        options: ['Retorno sobre investimento', 'Receita obtida instantaneamente', 'Retorno sobre impressões', 'Receita de investimento'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa CPA?', 
        options: ['Custo por aquisição', 'Custo por anúncio', 'Custo por ajuste', 'Conversão por anúncio'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma campanha de remarketing?', 
        options: ['Campanha focada em novos clientes', 'Campanha para alcançar usuários que já interagiram com o site', 'Campanha para gerar leads frios', 'Campanha sem segmentação'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa CTR?', 
        options: ['Custo total por registro', 'Cliques totais por reação', 'Taxa de cliques', 'Total de conversões recebidas'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é a principal métrica usada para medir o sucesso de uma campanha de tráfego pago?', 
        options: ['Taxa de rejeição', 'Número de curtidas', 'ROI (Retorno sobre investimento)', 'Número de visitas'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Em qual plataforma você pode criar anúncios em vídeo que aparecem no YouTube?', 
        options: ['Facebook Ads', 'Twitter Ads', 'Google Ads', 'LinkedIn Ads'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma palavra-chave em tráfego pago?', 
        options: ['Uma frase usada no site', 'Um termo usado em anúncios para segmentar públicos', 'Um código secreto', 'Uma imagem usada no anúncio'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa CPM?', 
        options: ['Custo por mil impressões', 'Custo por milhão de cliques', 'Custo por meio de pagamento', 'Custo por cada clique'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual plataforma é mais usada para anúncios em redes sociais?', 
        options: ['Instagram Ads', 'Facebook Ads', 'LinkedIn Ads', 'Todas as anteriores'], 
        answer: 3, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é o objetivo principal de uma campanha de geração de leads?', 
        options: ['Vender produtos', 'Aumentar curtidas', 'Coletar informações de possíveis clientes', 'Aumentar visualizações de vídeos'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é segmentação de público em anúncios pagos?', 
        options: ['Seleção de palavras-chave', 'Escolha de um público-alvo específico para os anúncios', 'Criação de conteúdo', 'Ajuste de orçamento'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa “impressões” em uma campanha de tráfego pago?', 
        options: ['Cliques em anúncios', 'Exibições de anúncios', 'Compartilhamentos de anúncios', 'Comentários em anúncios'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual o benefício principal de usar tráfego pago?', 
        options: ['Alcance rápido e direcionado', 'Menor investimento inicial', 'Resultados orgânicos', 'Baixo custo'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é um anúncio de pesquisa no Google Ads?', 
        options: ['Anúncio em vídeo', 'Anúncio exibido nos resultados de busca do Google', 'Anúncio em redes sociais', 'Anúncio de display'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa remarketing?', 
        options: ['Vender produtos de novo para o mesmo cliente', 'Realizar novas campanhas de marketing', 'Exibir anúncios para quem já visitou o site', 'Fazer marketing para marcas concorrentes'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma conversão em tráfego pago?', 
        options: ['Quando um anúncio é exibido', 'Quando um usuário realiza uma ação desejada como comprar ou cadastrar-se', 'Quando um anúncio é clicado', 'Quando um usuário visita o site'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é o objetivo de uma campanha de tráfego pago no Facebook Ads?', 
        options: ['Aumentar o número de seguidores', 'Aumentar a visibilidade de uma postagem paga', 'Gerar conversões para o site ou aplicativo', 'Todas as anteriores'], 
        answer: 3, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é um teste A/B em anúncios pagos?', 
        options: ['Comparar dois sites diferentes', 'Testar dois anúncios diferentes para o mesmo público', 'Verificar a taxa de conversão', 'Escolher entre dois produtos'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é o primeiro passo ao criar uma campanha de tráfego pago?', 
        options: ['Escolher o orçamento', 'Definir o público-alvo', 'Escrever o anúncio', 'Escolher a plataforma'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é um “orçamento diário” em campanhas pagas?', 
        options: ['O valor total que a campanha pode gastar', 'O valor que será gasto por dia em uma campanha', 'O custo por clique', 'O valor máximo que um anúncio pode custar'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Em qual destas plataformas você pode criar anúncios com foco em profissionais?', 
        options: ['LinkedIn Ads', 'Facebook Ads', 'Twitter Ads', 'TikTok Ads'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma “landing page”?', 
        options: ['Página inicial de um site', 'Página onde o usuário chega após clicar em um anúncio', 'Página com posts de blog', 'Página de redes sociais'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual dessas opções representa um objetivo de campanha no Google Ads?', 
        options: ['Curtidas', 'Conversões', 'Seguidores', 'Comentários'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual o principal benefício de anúncios em redes sociais?', 
        options: ['Segmentação detalhada de públicos', 'Anúncios mais baratos', 'Menos concorrência', 'Resultados imediatos'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é tráfego orgânico?', 
        options: ['Visitas geradas por anúncios pagos', 'Visitas obtidas sem o uso de anúncios pagos', 'Visitas através de redes sociais', 'Visitas por links patrocinados'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é o Google Display Network?', 
        options: ['Rede de anúncios de vídeo', 'Rede de blogs que exibem anúncios do Google', 'Rede de sites que exibem anúncios visuais do Google', 'Plataforma de vídeos'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma campanha de conversão?', 
        options: ['Focada em cliques', 'Focada em gerar leads', 'Focada em incentivar uma ação como uma compra ou cadastro', 'Focada em impressões'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é otimização de anúncios?', 
        options: ['Ajuste de orçamento', 'Melhorar o desempenho de uma campanha através de testes e ajustes', 'Aumento de cliques', 'Criação de mais anúncios'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual destas opções é uma métrica de engajamento em redes sociais?', 
        options: ['Taxa de rejeição', 'ROI', 'Curtidas e compartilhamentos', 'Impressões'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é um “Lead”?', 
        options: ['Um visitante do site', 'Um cliente em potencial que forneceu informações de contato', 'Uma pessoa que clicou em um anúncio', 'Uma pessoa que assistiu a um vídeo'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa “alcance” em uma campanha de anúncios?', 
        options: ['Número de cliques', 'Número de vezes que um anúncio foi exibido para pessoas diferentes', 'Número de conversões', 'Número de impressões'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que são “impressões pagas”?', 
        options: ['Impressões geradas por anúncios pagos', 'Cliques gerados organicamente', 'Impressões de um post sem anúncios', 'Compartilhamentos'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é o objetivo de uma campanha de "Awareness"?', 
        options: ['Aumentar as vendas', 'Aumentar o reconhecimento da marca', 'Gerar leads', 'Melhorar a taxa de conversão'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma campanha de “Tráfego” no Facebook Ads?', 
        options: ['Campanha focada em levar mais pessoas para um site ou app', 'Campanha para aumentar curtidas', 'Campanha de geração de leads', 'Campanha para conversões'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual das opções abaixo é uma prática recomendada para anúncios de tráfego pago?', 
        options: ['Usar público-alvo genérico', 'Definir público-alvo detalhado e específico', 'Ignorar as métricas de desempenho', 'Investir apenas no formato de vídeo'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual o tipo de anúncio mais comum no Google Ads?', 
        options: ['Anúncio de pesquisa', 'Anúncio de vídeo', 'Anúncio de display', 'Anúncio de stories'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é um “Ad Rank” no Google Ads?', 
        options: ['Posição média de um anúncio nos resultados de busca', 'Custo total de uma campanha', 'Número de cliques por anúncio', 'Número de conversões'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma campanha de “instalação de aplicativo”?', 
        options: ['Focada em cliques', 'Focada em gerar conversões para compras', 'Focada em incentivar o download de um aplicativo', 'Focada em curtidas'], 
        answer: 2, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é “Público semelhante” no Facebook Ads?', 
        options: ['Um público criado com base em características semelhantes aos seus clientes existentes', 'Um público que já conhece sua marca', 'Um público segmentado manualmente', 'Um público orgânico'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é o principal fator que influencia o sucesso de uma campanha de anúncios pagos?', 
        options: ['O orçamento', 'A segmentação correta do público-alvo', 'O design do site', 'O número de palavras-chave'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é “Segmentação por interesses”?', 
        options: ['Focar em usuários que têm interesses específicos relacionados ao seu produto', 'Focar em todos os usuários da internet', 'Focar apenas em novos usuários', 'Focar em clientes existentes'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é uma “Campanha de engajamento”?', 
        options: ['Uma campanha focada em likes e compartilhamentos', 'Uma campanha focada em visualizações de vídeos', 'Uma campanha focada em gerar cliques', 'Uma campanha para gerar vendas diretas'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual o benefício de usar campanhas de tráfego pago em redes sociais?', 
        options: ['Segmentação de públicos específicos', 'Crescimento rápido do público', 'Visibilidade imediata', 'Todas as anteriores'], 
        answer: 3, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que é “taxa de conversão”?', 
        options: ['Número de impressões', 'Número de cliques dividido pelo número de conversões', 'Quantidade de leads gerados', 'Número total de cliques'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'O que significa "PPC"?', 
        options: ['Pagamento por clique', 'Publicação por cliente', 'Pesquisa por conversão', 'Pagamento por conversão'], 
        answer: 0, 
        points: 10 
    },
    { 
        level: 'Fácil', 
        text: 'Qual é o papel de um gestor de tráfego?', 
        options: ['Criar conteúdo para redes sociais', 'Gerenciar campanhas de anúncios pagos para gerar tráfego qualificado', 'Desenvolver sites', 'Fazer suporte ao cliente'], 
        answer: 1, 
        points: 10 
    },
    { 
        level: 'Média', 
        text: 'O que é o Quality Score no Google Ads?', 
        options: ['Métrica que indica o número de cliques recebidos', 'Indicador da qualidade do anúncio em relação à experiência do usuário', 'Posição do anúncio na página de resultados', 'Número de conversões geradas'], 
        answer: 1, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'Qual é a principal vantagem de usar campanhas de vídeo no YouTube Ads?', 
        options: ['Baixo custo por impressão', 'Segmentação ampla e genérica', 'Engajamento visual mais forte com o público', 'Maior número de impressões'], 
        answer: 2, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'O que é uma conversão assistida no Google Analytics?', 
        options: ['Conversão que ocorre após a primeira visita', 'Conversão que acontece com a ajuda de vários canais', 'Conversão que ocorre por meio de anúncios em vídeo', 'Conversão gerada por um clique direto'], 
        answer: 1, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'Qual o impacto de um CTR baixo em campanhas de anúncios pagos?', 
        options: ['Reduz a taxa de conversão', 'Melhora o Quality Score', 'Reduz a visibilidade do anúncio e pode aumentar o custo por clique', 'Aumenta o tráfego do site'], 
        answer: 2, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'O que é uma palavra-chave de cauda longa?', 
        options: ['Uma palavra-chave curta e genérica', 'Uma palavra-chave composta por termos específicos e mais longos', 'Um termo de pesquisa sem relevância', 'Uma palavra-chave usada apenas para SEO'], 
        answer: 1, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'Como o orçamento é cobrado em uma campanha com CPM?', 
        options: ['Pelo número de cliques no anúncio', 'Por cada mil impressões do anúncio', 'Pelo número de conversões geradas', 'Pelo total de impressões diárias'], 
        answer: 1, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'O que é uma campanha de funil superior?', 
        options: ['Uma campanha voltada para conversões imediatas', 'Uma campanha para criar reconhecimento e atrair novos usuários', 'Uma campanha para remarketing', 'Uma campanha focada em leads qualificados'], 
        answer: 1, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'O que é "rotação de anúncios" no Google Ads?', 
        options: ['Exibir um anúncio repetidamente para o mesmo público', 'Alternar automaticamente entre diferentes anúncios em uma campanha', 'Exibir o mesmo anúncio em múltiplas plataformas', 'Mostrar anúncios com diferentes formatos'], 
        answer: 1, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'Qual a função de uma extensão de anúncio no Google Ads?', 
        options: ['Aumentar o espaço visual do anúncio com informações adicionais', 'Reduzir o CPC', 'Melhorar a segmentação do público-alvo', 'Permitir anúncios mais baratos'], 
        answer: 0, 
        points: 20 
    },
    { 
        level: 'Média', 
        text: 'O que é um “lookalike audience” no Facebook Ads?', 
        options: ['Um público semelhante ao que já interage com a marca', 'Um público que já comprou um produto anteriormente', 'Um público criado manualmente para um anúncio', 'Um público geral de uma região específica'], 
        answer: 0, 
        points: 20 
    },
    { 
        level: 'Difícil', 
        text: 'O que significa “atribuição baseada em dados” no Google Ads?', 
        options: ['Um modelo de atribuição que distribui o crédito de uma conversão igualmente entre todos os canais', 'Um modelo de atribuição que usa inteligência artificial para atribuir crédito com base no impacto real de cada canal no caminho do cliente', 'Um modelo de atribuição que foca apenas no primeiro clique', 'Um modelo de atribuição que dá todo o crédito ao último clique'], 
        answer: 1, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'Como funciona a estratégia de lances "Target CPA" no Google Ads?', 
        options: ['O Google ajusta os lances para tentar atingir um custo por conversão específico', 'O Google ajusta os lances para maximizar impressões', 'O Google define lances para maximizar o número de cliques', 'O Google ajusta os lances para reduzir o CPC'], 
        answer: 0, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'Qual a principal diferença entre o modelo de atribuição “linear” e o modelo “decrescente por tempo”?', 
        options: ['O modelo linear distribui o crédito igualmente entre todos os pontos de contato enquanto o modelo decrescente por tempo dá mais crédito aos pontos de contato mais recentes', 'O modelo linear foca no primeiro clique e o decrescente no último clique', 'O modelo linear ignora o canal orgânico enquanto o decrescente dá mais crédito ao tráfego pago', 'O modelo decrescente é mais eficaz para campanhas de funil superior'], 
        answer: 0, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'O que é o “Custo Incremental por Conversão” (IAC)?', 
        options: ['O custo total de uma campanha dividido pelo número de cliques', 'O custo adicional necessário para gerar uma conversão extra em uma campanha otimizada', 'O valor total gasto em publicidade sem gerar conversões', 'O custo médio por conversão de uma campanha de funil superior'], 
        answer: 1, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'Em uma campanha de Google Ads o que significa “anúncios responsivos de pesquisa”?', 
        options: ['Anúncios que ajustam seu conteúdo automaticamente com base no comportamento do usuário', 'Anúncios que testam várias combinações de títulos e descrições para encontrar o melhor desempenho', 'Anúncios que são exibidos apenas em dispositivos móveis', 'Anúncios que são otimizados apenas para campanhas de display'], 
        answer: 1, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'O que é a “pontuação de otimização” no Google Ads?', 
        options: ['Uma métrica que avalia a eficácia geral de uma campanha com base em dados históricos', 'Uma recomendação do Google Ads para melhorar o desempenho de uma campanha oferecendo sugestões de mudanças baseadas em IA', 'A pontuação final de uma campanha com base em conversões', 'Uma métrica usada apenas para campanhas de vídeo'], 
        answer: 1, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'Em campanhas de "shopping" no Google Ads qual o principal fator que influencia o CPC?', 
        options: ['A qualidade do feed de produtos e a relevância das palavras-chave', 'O número de cliques gerados por cada anúncio', 'A frequência de visualização do produto', 'O número de lojas concorrentes que vendem o mesmo produto'], 
        answer: 0, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'O que significa “Taxa de Cliques em Relação às Impressões (CTR/Impressions)” em campanhas de display?', 
        options: ['A porcentagem de usuários que clicaram no anúncio em relação ao número total de impressões', 'A relação entre o número de impressões e o CPC', 'A porcentagem de conversões geradas por cliques no anúncio', 'A quantidade total de visualizações do anúncio'], 
        answer: 0, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'Qual é a principal vantagem de usar o modelo de lance “Target ROAS”?', 
        options: ['Maximizar o retorno sobre o investimento publicitário ajustando os lances para atingir uma meta específica de retorno sobre os gastos com anúncios', 'Aumentar o número de cliques em anúncios de baixo desempenho', 'Reduzir o número de impressões desnecessárias', 'Aumentar o número de impressões em campanhas de display'], 
        answer: 0, 
        points: 30 
    },
    { 
        level: 'Difícil', 
        text: 'Qual a importância do “Feed de Produtos” em campanhas de Google Shopping?', 
        options: ['Permitir que o Google Ads otimize o conteúdo do anúncio com base em informações sobre os produtos', 'Aumentar o número de conversões de campanhas de remarketing', 'Gerar mais impressões em campanhas de vídeo', 'Melhorar a pontuação de qualidade em campanhas de pesquisa'], 
        answer: 0, 
        points: 30 
    }
];
