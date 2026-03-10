import React from 'react';

export default function PrivacyPolicyContentPtBr() {
  const lastUpdated = "10 de Março de 2026";

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Política de Privacidade
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Data de Vigência: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-slate prose-invert max-w-none text-muted-foreground space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">1. Introdução</h2>
            <p className="leading-8">
              Bem-vindo ao Backup Teams. Na Backup Teams Inc. ("nós", "nosso" ou "conosco"), respeitamos a sua privacidade e estamos profundamente comprometidos em proteger os dados organizacionais que você nos confia. Esta Política de Privacidade descreve como coletamos, usamos, processamos e protegemos as informações que você fornece ao usar nossos serviços de backup do Microsoft Teams, site e aplicativos relacionados (coletivamente, os "Serviços").
            </p>
            <p className="leading-8 mt-4">
              Nossa arquitetura foi projetada em torno do princípio de minimização de dados e criptografia de conhecimento zero (zero-knowledge), quando aplicável. Ao acessar ou usar nossos Serviços, você reconhece que leu, compreendeu e concorda com as práticas descritas nesta Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">2. As Informações que Coletamos</h2>
            <p className="leading-8">
              Coletamos informações nas seguintes categorias para fornecer e melhorar nossos Serviços:
            </p>
            
            <h3 className="text-xl font-medium text-foreground mt-8 mb-3">2.1. Informações Fornecidas Diretamente por Você</h3>
            <ul className="list-disc pl-6 space-y-2 leading-8">
              <li><strong>Informações da Conta:</strong> Ao se registrar em nossos Serviços, coletamos seu nome, endereço de e-mail (normalmente sua identidade Azure AD / Microsoft 365), nome da empresa e detalhes de faturamento.</li>
              <li><strong>Tokens de Autenticação:</strong> Para realizar backups, você nos concede tokens seguros OAuth 2.0 por meio da Microsoft Graph API. Armazenamos esses tokens com segurança para autenticar os processos de backup automatizados em seu nome.</li>
              <li><strong>Comunicações de Suporte:</strong> Se você contatar nossa equipe de suporte, coletamos o conteúdo de suas mensagens e quaisquer anexos necessários para resolver sua solicitação.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-3">2.2. Dados que Processamos em Seu Nome (Os Backups)</h3>
            <p className="leading-8">
              A função principal do Backup Teams é processar e proteger seus dados corporativos. Isso inclui:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Histórico de Bate-papo do Microsoft Teams:</strong> Chats 1:1, chats em grupo e discussões de canal.</li>
              <li><strong>Arquivos e Anexos:</strong> Documentos compartilhados no Teams (originários do SharePoint ou OneDrive).</li>
              <li><strong>Metadados:</strong> Carimbos de data/hora (timestamps), IDs de remetentes e estruturas de canais necessárias para reconstruir com precisão a topologia dos seus dados.</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl border border-border bg-card shadow-sm">
              <strong className="text-foreground">Nota Arquitetural:</strong> Tratamos esses dados inteiramente como Processadores de Dados sob o GDPR e LGPD. Seus dados de backup são criptografados em repouso em cofres Amazon S3 dedicados e isolados, exclusivos para o seu tenant (inquilino). Não mineramos, vendemos ou analisamos seus dados de backup para fins de marketing ou qualquer outro propósito além de fornecer o próprio serviço de backup.
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-3">2.3. Informações Coletadas Automaticamente</h3>
            <ul className="list-disc pl-6 space-y-2 leading-8">
              <li><strong>Logs & Telemetria:</strong> Inerentemente, registramos endereços de IP, tipos de navegadores e a latência de solicitações de API para garantir a confiabilidade e a segurança da nossa infraestrutura.</li>
              <li><strong>Cookies e Rastreamento:</strong> Usamos cookies essenciais para manter o estado das sessões. Não utilizamos cookies de publicidade de terceiros na interface do aplicativo de backup.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">3. Como Usamos Suas Informações</h2>
            <p className="leading-8">Usamos as informações coletadas para os seguintes propósitos específicos:</p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Entrega de Serviço:</strong> Para conectar às Microsoft Graph APIs, extrair seus dados do Teams, criptografá-los e armazená-los em seu cofre dedicado.</li>
              <li><strong>Segurança e Autenticação:</strong> Para verificar sua identidade, mitigar acessos fraudulentos e aplicar Listas de Controle de Acesso (ACLs) rigorosas sobre seus dados.</li>
              <li><strong>Faturamento e Administração:</strong> Para processar pagamentos, calcular o uso do limite de armazenamento e enviar notificações transacionais (por exemplo, "Backup Concluído", "Falha no Pagamento").</li>
              <li><strong>Otimização de Desempenho:</strong> Para monitorar a integridade do sistema, escalar nossa infraestrutura de extração de forma inteligente com base na carga e corrigir bugs no software.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">4. Segurança e Armazenamento de Dados</h2>
            <p className="leading-8">
              A segurança é o pilar fundamental do Backup Teams. Empregamos controles de segurança de nível empresarial:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Criptografia em Repouso:</strong> Todos os dados de backup armazenados em cofres S3 são criptografados usando AES-256.</li>
              <li><strong>Criptografia em Trânsito:</strong> Os dados são transmitidos exclusivamente através dos protocolos TLS 1.2+.</li>
              <li><strong>Isolamento de Tenants:</strong> Seus dados são isolados estruturalmente. Nossas ferramentas de extração geram buckets de armazenamento e mapeamentos de índice exclusivos por Tenant ID do Microsoft 365, impedindo a contaminação de dados entre tenants.</li>
              <li><strong>Gerenciamento de Chaves:</strong> Utilizamos políticas rigorosas de KMS (Key Management Service), com rotação automática de chaves de criptografia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">5. Divulgação a Terceiros e Subprocessadores</h2>
            <p className="leading-8">
              Não vendemos seus dados pessoais ou seus dados de backup. Compartilhamos dados apenas com subprocessadores de confiança e necessários para operar o serviço:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Infraestrutura em Nuvem:</strong> Amazon Web Services (AWS) ou provedores de nuvem similares, para hospedar os cofres S3 isolados e nós de computação.</li>
              <li><strong>Provedores de Autenticação:</strong> Microsoft Identity Platform (Azure AD) e Google OAuth, para gerenciar os fluxos seguros de login.</li>
              <li><strong>Processadores de Pagamento:</strong> Stripe ou fornecedores semelhantes para lidar com pagamentos com segurança, sem rotear os números de cartões de crédito pelos nossos sistemas.</li>
            </ul>
            <p className="leading-8 mt-4">
              Também podemos divulgar informações se exigido por lei, intimação ou outros processos legais rigorosos, desde que forneçamos a você notificação prévia (a menos que seja legalmente proibido fazê-lo).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">6. Seus Direitos (GDPR, LGPD, CCPA, etc.)</h2>
            <p className="leading-8">
              Dependendo da sua jurisdição, você ou a sua organização detêm direitos específicos em relação aos dados:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Direito de Acesso:</strong> Você pode exportar seu cofre de backup inteiro a qualquer momento em formatos padrão do setor (JSON, PDF).</li>
              <li><strong>Direito ao Esquecimento (Exclusão):</strong> Você pode solicitar a exclusão de sua conta e todos os backups associados. Mediante solicitação, iniciamos uma exclusão rígida e criptográfica (hard-delete) do seu cofre S3, tornando os dados completamente irrecuperáveis em um prazo de até 30 dias.</li>
              <li><strong>Direito de Portabilidade:</strong> Você não fica preso (vendor lock-in). Nossas APIs de exportação permitem que você migre seus backups do Teams para outros provedores de armazenamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">7. Fale Conosco</h2>
            <p className="leading-8">
              Se você tiver dúvidas, preocupações ou consultas técnicas sobre esta Política de Privacidade ou sobre como seus dados são manuseados, entre em contato com nosso Encarregado de Proteção de Dados (DPO) em:
            </p>
            <div className="mt-4 p-6 bg-card rounded-xl border border-border inline-block">
              <p className="font-mono text-sm text-foreground">privacy@backupteams.com</p>
              <p className="text-sm text-muted-foreground mt-2">Backup Teams Inc.</p>
              <p className="text-sm text-muted-foreground">123 Cloud Infrastructure Way</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA 94107, EUA</p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
