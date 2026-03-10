import React from 'react';

export default function DataProcessingContentPtBr() {
  const lastUpdated = "10 de Março de 2026";

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Acordo de Processamento de Dados
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            Data de Vigência: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-slate prose-invert max-w-none text-muted-foreground space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">1. Introdução</h2>
            <p className="leading-8">
              Este Acordo de Processamento de Dados ("DPA") faz parte dos Termos de Serviço entre a Backup Teams Inc. ("Processador de Dados") e você ou a entidade que você representa ("Controlador de Dados"). Ele reflete o acordo das partes em relação ao processamento de dados pessoais e organizacionais contidos em seu ambiente do Microsoft Teams.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">2. Processamento de Dados do Cliente</h2>
            <p className="leading-8">
              <strong>Escopo e Função:</strong> O Backup Teams atua exclusivamente como Processador de Dados. Processamos seus dados (incluindo chats de equipes, mensagens de canal e arquivos compartilhados) estritamente para o propósito de fornecer serviços de backup, armazenamento e recuperação conforme configurado por você. Não determinamos as finalidades ou meios de processamento dos Dados Pessoais contidos em seus backups.
            </p>
            <p className="leading-8 mt-4">
              <strong>Instruções:</strong> Só processaremos seus dados de acordo com as suas instruções documentadas, as quais são representadas pela sua configuração e uso do aplicativo de serviço Backup Teams via Microsoft Graph API.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">3. Medidas de Segurança</h2>
            <p className="leading-8">
              Implementamos e mantemos medidas de segurança técnicas e organizacionais rigorosas para proteger seus dados contra destruição acidental ou ilícita, perda, alteração, divulgação ou acesso não autorizado:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-8 mt-4">
              <li>Criptografia em trânsito usando TLS moderno (1.2 ou superior).</li>
              <li>Criptografia em repouso em cofres Amazon S3 dedicados usando AES-256 GCM.</li>
              <li>Separação lógica estrita de dados do tenant (Isolamento de Dados).</li>
              <li>Verificação automatizada regular de vulnerabilidades e rotação de chaves.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">4. Subprocessamento</h2>
            <p className="leading-8">
              Você autoriza o Backup Teams a envolver subprocessadores de infraestrutura (por exemplo, Amazon Web Services para armazenamento em nuvem). Mantemos uma lista de subprocessadores ativos e impomos a eles obrigações equivalentes de proteção de dados, conforme exigido pelo Artigo 28 do GDPR (e regras equivalentes da LGPD). Notificaremos você sobre quaisquer alterações pretendidas relativas à adição ou substituição de subprocessadores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">5. Direitos dos Titulares dos Dados e Assistência</h2>
            <p className="leading-8">
              Como Controlador de Dados, você é responsável por cumprir solicitações de titulares de dados (ex: direito a acessar, retificar ou apagar). Auxiliaremos você, fornecendo as ferramentas técnicas necessárias para exportar ou destruir criptograficamente cofres específicos de backup mediante sua solicitação autorizada. Avisaremos prontamente se recebermos uma solicitação direta de um titular sobre os dados processados sob o seu tenant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">6. Apagamento e Devolução de Dados</h2>
            <p className="leading-8">
              Após o término de sua assinatura, ou mediante sua solicitação explícita por escrito, o Backup Teams executará um "hard delete" criptográfico seguro do cofre S3 dedicado do seu tenant dentro de 30 dias. Isso torna todos os backups associados irrecuperáveis. Você é o responsável pela exportação de quaisquer dados necessários antes do término do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">7. Notificação de Incidentes</h2>
            <p className="leading-8">
              No caso de uma Violação de Dados Pessoais confirmada afetando seus backups, o Backup Teams notificará você sem demora indevida (e terá como objetivo principal relatar em até 48 horas após a descoberta) e fornecerá informações suficientes para permitir que você cumpra quaisquer obrigações de relatório de vazamento para autoridades de supervisão.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-4">8. Contato para Perguntas de Privacidade</h2>
            <p className="leading-8">
              Para relatórios de segurança, dúvidas sobre o DPA ou sobre infraestrutura, entre em contato com nossa equipe de Conformidade e Segurança em:
            </p>
            <div className="mt-4 p-6 bg-card rounded-xl border border-border inline-block">
              <p className="font-mono text-sm text-foreground">legal@backupteams.com</p>
              <p className="text-sm text-muted-foreground mt-2">Backup Teams Inc.</p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
