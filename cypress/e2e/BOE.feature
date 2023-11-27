Feature: User can consult BOEs

  Scenario: User can see BOEs table daily summaries
    Given backend '/boe/summary' returns 'summaryBoeData'
    When I open the app
    Then I see "Disposiciones y anuncios" "table"
    And I see the following cells on table 'boe-table'
    | Fecha      | Título                                                              | Acciones |
    | 01/01/2999 | Caso 00000 para la resolución de 01 de enero de 2999 para el testeo |          |
    | 01/01/2999 | Caso 99999 para la resolución de 01 de enero de 2999 para el testeo |          |

  Scenario: User can consult the BOEs of a day
  Scenario: User can consult the details of a BOE document
  Scenario: User can visit the PDF version of a BOE document
  Scenario: User can visit the HTML version of a BOE document
  Scenario: User can resume a BOE document with ChatGPT