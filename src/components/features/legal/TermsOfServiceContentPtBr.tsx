import React from 'react';

export default function TermsOfServiceContentPtBr() {
  const lastUpdated = "10 de Março de 2026";

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Termos de Serviço
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Data de Vigência: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-slate prose-invert max-w-none text-muted-foreground space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">1. Aceitação dos Termos</h2>
            <p className="leading-8">
              Ao acessar ou usar os Serviços do Backup Teams, você concorda em ficar vinculado a estes Termos de Serviço ("Termos") e a todas as leis e regulamentos aplicáveis. Se você não concordar com qualquer um destes termos, está proibido de usar ou acessar este site e nossos serviços de backup.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">2. Descrição do Serviço</h2>
            <p className="leading-8">
              O Backup Teams fornece soluções de backup automatizadas e criptografadas para o Microsoft Teams. Nosso Serviço se conecta ao seu tenant do Microsoft 365 por meio da Microsoft Graph API para extrair, criptografar e armazenar seus dados organizacionais (chats, arquivos e metadados) em armazenamento seguro e isolado. Reservamo-nos o direito de modificar, suspender ou descontinuar o Serviço a qualquer momento, com ou sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">3. Obrigações e Autenticação do Usuário</h2>
            <p className="leading-8">
              Para usar nosso Serviço, você deve possuir os direitos administrativos necessários para conceder ao Backup Teams os escopos OAuth exigidos dentro do seu tenant do Microsoft 365. Você concorda que:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li>Você está legalmente autorizado a nos conceder acesso aos dados sendo backupeados.</li>
              <li>Você é responsável por manter a confidencialidade das credenciais da sua conta do Backup Teams.</li>
              <li>Você nos notificará imediatamente sobre qualquer uso não autorizado, conhecido ou suspeito, da sua conta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">4. Propriedade dos Dados e Licença</h2>
            <p className="leading-8">
              <strong>Seus Dados:</strong> Você retém todos os direitos de propriedade sobre os dados organizacionais copiados por nosso Serviço. Ao usar o Backup Teams, você nos concede uma licença mundial, isenta de royalties e não exclusiva estritamente para acessar, copiar, criptografar e armazenar seus dados com o único propósito de fornecer os serviços de backup e restauração a você.
            </p>
            <p className="leading-8 mt-4">
              <strong>Nossa Propriedade Intelectual:</strong> A plataforma, o site, o mecanismo de extração (scraping) e a arquitetura subjacente são propriedade exclusiva da Backup Teams Inc. e estão protegidos por leis de direitos autorais e segredos comerciais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">5. Faturamento, Assinaturas e Cancelamento</h2>
            <p className="leading-8">
              Nossos Serviços são faturados em regime de assinatura (mensal ou anual). Ao se inscrever, você concorda com o faturamento recorrente automático.
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li><strong>Cancelamento:</strong> Você pode cancelar sua assinatura a qualquer momento. O cancelamento entra em vigor no final do ciclo de faturamento atual.</li>
              <li><strong>Retenção de Dados Pós-Cancelamento:</strong> Após o cancelamento ou falha de pagamento, manteremos seus backups criptografados por um período de carência de 30 dias. Após 30 dias, seu cofre S3 será destruído de forma permanente e criptográfica.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">6. Limitação de Responsabilidade</h2>
            <p className="leading-8">
              Embora arquitetemos para máxima durabilidade e segurança, software é inerentemente complexo. Na extensão máxima permitida por lei, a Backup Teams Inc. não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade (goodwill) ou outras perdas intangíveis, resultantes de (i) seu acesso ou uso, ou incapacidade de acessar ou usar o Serviço; (ii) qualquer conduta ou conteúdo de qualquer terceiro no Serviço; ou (iii) acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">7. Acordo de Nível de Serviço (SLA)</h2>
            <p className="leading-8">
              Nós nos esforçamos para atingir 99,9% de tempo de atividade (uptime). No entanto, como nosso serviço depende fortemente da disponibilidade e das limitações de limitação (throttling) da Microsoft Graph API, não podemos garantir backups completamente ininterruptos se a Microsoft sofrer interrupções ou limitar ativamente as solicitações de API do seu tenant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">8. Lei Regente</h2>
            <p className="leading-8">
              Estes Termos serão regidos e interpretados de acordo com as leis do Estado da Califórnia, Estados Unidos, sem levar em conta suas disposições sobre conflitos de leis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">9. Fale Conosco</h2>
            <p className="leading-8">
              Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em:
            </p>
            <div className="mt-4 p-6 bg-card rounded-xl border border-border inline-block">
              <p className="font-mono text-sm text-foreground">legal@backupteams.com</p>
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
