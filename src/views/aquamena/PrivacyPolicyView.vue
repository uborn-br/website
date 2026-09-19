<template>
  <main class="PrivacyPolicyView">
    <article class="policy">
      <header class="policy-header">
        <p class="eyebrow">Aquamena</p>
        <h1>Política de Privacidade</h1>
        <p class="updated">Última atualização: 19 de setembro de 2026</p>
      </header>

      <p>
        Esta Política de Privacidade descreve como a
        <strong>uBorn Engenharia de Software</strong> (CNPJ
        51.975.973/0001-87), responsável pelo aplicativo
        <strong>Aquamena</strong>, coleta, usa, armazena e protege os dados
        pessoais dos usuários. Este documento é disponibilizado em
        conformidade com as exigências de privacidade da
        <strong>Apple App Store</strong> e do <strong>Google Play Store</strong>,
        e com a Lei Geral de Proteção de Dados brasileira (LGPD — Lei nº
        13.709/2018). Ao utilizar o Aquamena, o usuário declara estar ciente
        das práticas descritas abaixo.
      </p>

      <section>
        <h2>1. Quais dados coletamos</h2>
        <p>Para funcionar corretamente, o Aquamena coleta:</p>
        <ul>
          <li>
            <strong>Dados de conta:</strong> nome, e-mail e senha, fornecidos
            no cadastro e login. A senha é armazenada de forma criptografada
            e nunca é acessada em texto simples.
          </li>
          <li>
            <strong>Dados de uso e desempenho:</strong> eventos de
            utilização do aplicativo e relatórios de falhas (crash reports),
            coletados via Firebase Analytics e Firebase Crashlytics (Google),
            usados para entender o uso do app e corrigir problemas técnicos.
          </li>
          <li>
            <strong>Token de notificação push:</strong> identificador do
            dispositivo gerado pelo Firebase Cloud Messaging (Google),
            utilizado exclusivamente para o envio de notificações do app.
          </li>
        </ul>
        <p>
          Não coletamos categorias adicionais de dados sensíveis (como
          localização, contatos, fotos, dados de saúde ou financeiros) além
          do estritamente necessário para as finalidades acima.
        </p>
      </section>

      <section>
        <h2>2. Como usamos os dados</h2>
        <ul>
          <li>Criar, autenticar e manter a conta do usuário no aplicativo;</li>
          <li>Enviar notificações relevantes sobre o funcionamento do app;</li>
          <li>
            Monitorar estabilidade, identificar falhas e melhorar o
            desempenho do aplicativo;
          </li>
          <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
        </ul>
      </section>

      <section>
        <h2>3. Compartilhamento com terceiros</h2>
        <p>
          Utilizamos o <strong>Google Firebase</strong> (Analytics,
          Crashlytics e Cloud Messaging) como provedor de infraestrutura para
          processar os dados descritos na Seção 1, em nosso nome e sob suas
          próprias políticas de segurança. O tratamento desses dados pelo
          Google está sujeito à
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            >Política de Privacidade do Google</a
          >.
        </p>
        <p>
          A uBorn <strong>não vende</strong> dados pessoais a terceiros e não
          compartilha dados com parceiros para fins de publicidade.
        </p>
      </section>

      <section>
        <h2>4. Armazenamento e segurança</h2>
        <p>
          Os dados são transmitidos por conexões criptografadas (HTTPS/TLS) e
          armazenados com controles de acesso restritos à equipe autorizada
          da uBorn. Senhas são armazenadas com hashing e nunca em texto
          simples.
        </p>
      </section>

      <section>
        <h2>5. Retenção de dados</h2>
        <p>
          Os dados pessoais são mantidos enquanto a conta do usuário
          permanecer ativa ou pelo período necessário para cumprir
          obrigações legais, contratuais ou regulatórias, após o que são
          eliminados ou anonimizados.
        </p>
      </section>

      <section>
        <h2>6. Direitos do usuário (LGPD)</h2>
        <p>
          Nos termos da LGPD, o usuário pode, a qualquer momento, solicitar:
        </p>
        <ul>
          <li>Confirmação da existência de tratamento de dados;</li>
          <li>Acesso, correção ou atualização dos seus dados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Revogação do consentimento e eliminação dos dados tratados com base nele.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, entre em contato pelo
          e-mail
          <a href="mailto:contato@uborn.com.br">contato@uborn.com.br</a>.
        </p>
      </section>

      <section>
        <h2>7. Exclusão de conta e dados</h2>
        <p>
          Atualmente a exclusão de conta não está disponível diretamente
          pelo aplicativo. O usuário pode solicitar a exclusão da conta e dos
          dados associados a qualquer momento pelo e-mail
          <a href="mailto:contato@uborn.com.br">contato@uborn.com.br</a>,
          informando o e-mail cadastrado no app. A solicitação será
          processada em prazo razoável, ressalvados os dados cuja retenção
          seja exigida por lei.
        </p>
      </section>

      <section>
        <h2>8. Privacidade infantil</h2>
        <p>
          O Aquamena não é direcionado a menores de 13 anos e não coletamos
          intencionalmente dados pessoais de crianças. Caso identifiquemos
          que dados de um menor foram coletados sem o consentimento
          adequado, tomaremos medidas para excluí-los.
        </p>
      </section>

      <section>
        <h2>9. Alterações nesta política</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente
          para refletir mudanças no aplicativo ou em requisitos legais e das
          lojas de aplicativos. A data da última atualização é sempre
          indicada no topo desta página.
        </p>
      </section>

      <section>
        <h2>10. Contato</h2>
        <p>
          uBorn :: Engenharia de Software<br />
          CNPJ: 51.975.973/0001-87<br />
          E-mail:
          <a href="mailto:contato@uborn.com.br">contato@uborn.com.br</a>
        </p>
      </section>
    </article>
  </main>
</template>

<script setup></script>

<style scoped>
.PrivacyPolicyView {
  display: flex;
  justify-content: center;
  padding: 48px 20px 64px;
}

.policy {
  width: 100%;
  max-width: 720px;
}

.policy-header {
  margin-bottom: 32px;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2a9b90;
}

.policy h1 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text);
}

.updated {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.7;
}

.policy section {
  margin-top: 28px;
}

.policy h2 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 10px;
}

.policy p {
  margin: 0 0 12px;
}

.policy ul {
  margin: 0 0 12px;
  padding-left: 22px;
}

.policy li {
  margin-bottom: 6px;
}

.policy a {
  color: #2a9b90;
}
</style>
