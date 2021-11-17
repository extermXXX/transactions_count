# Block Transactions Count Agent

## Description
Агент ловит события создания блока и генерирует сообщение с количеством транзакций в этом блоке
В блоке metadata отдает атрибут count с количеством обнаруженных транзакций
## Supported Chains

- Ethereum
- List any other chains this agent can support e.g. BSC

## Alerts

Describe each of the type of alerts fired by this agent

- FORTA-160
  - Fired when new block detected
  - Severity is always set to "info" 

