Feature: User can consult BOEs

  Scenario: User can see BOEs table daily summaries
    Given backend '/boe/summary' as 'boeSummary' returns 'summaryBoeData'
    When I open the app
    Then I see "Disposiciones y anuncios" "table"
      And I see the following cells on table 'boe-table'
        | Fecha      | Título                                                              | Acciones |
        | 01/01/2999 | Caso 00000 para la resolución de 01 de enero de 2999 para el testeo |          |
        | 01/01/2999 | Caso 99999 para la resolución de 01 de enero de 2999 para el testeo |          |


  Scenario: User can consult the BOEs of a day
    Given backend '/boe/summary' as 'boeSummaryInitial' returns 'summaryBoeData'
      And backend '/boe/summary?date=20230101' as 'boeSummaryChange' returns 'summaryBoeData'
    When I open the app
      And I see "Fecha" "selector"
      And I type "01/01/2023" in "Fecha" input
      And I click away
    Then a GET API call with alias 'boeSummaryChange' to "/boe/summary" is done with query params
      | param | value    |
      | date  | 20230101 |


  Scenario: User can consult the details of a BOE document
    Given backend '/boe/summary' as 'boeSummary' returns 'summaryBoeData'
      And I open the app
      And I don't see "Sección: I. Disposiciones generales" "text"
      And I don't see "Departamento: MINISTERIO PARA EL TESTEO (123456)" "text"
      And I don't see "Epígrafe: Testeo" "text"
      And I don't see "ID: BOE-A-2999-99999" "text"
      And I don't see "Generar Resumen con ChatGPT" "button"
    When I click in the "detail panel" 2
    Then I see "Sección: I. Disposiciones generales" "text"
      And I see "Departamento: MINISTERIO PARA EL TESTEO (123456)" "text"
      And I see "Epígrafe: Testeo" "text"
      And I see "ID: BOE-A-2999-99999" "text"
      And I see "Generar Resumen con ChatGPT" "button"


  Scenario: User can visit the PDF version of a BOE document
    Given backend '/boe/summary' as 'boeSummary' returns 'summaryBoeData'
    When I open the app
      And I see "PictureAsPdfOutlined" "icon"
      And I count 2 "PictureAsPdfOutlined" "icon"
    Then I click in the "PictureAsPdfOutlined" "icon" 1
      And I am at "https://www.boe.es/boe/dias/2999/01/01/pdfs/BOE-A-2999-00000.pdf" url


  Scenario: User can visit the HTML version of a BOE document
    Given backend '/boe/summary' as 'boeSummary' returns 'summaryBoeData'
    When I open the app
      And I see "HtmlOutlined" "icon"
      And I count 2 "HtmlOutlined" "icon"
    Then I click in the "HtmlOutlined" "icon" 1
      And I am at "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2999-00000" url


  Scenario: User can resume a BOE document with ChatGPT
    Given backend '/boe/summary' as 'boeSummary' returns 'summaryBoeData'
      And backend '/chatgpt/xmlboeresume?boe_xml_address=/diario_boe/xml.php?id=BOE-A-2999-99999' as 'chatGPTSummary' returns 'chatGPTResume'
      And I open the app
      And I click in the "detail panel" 2
      And I see "Generar Resumen con ChatGPT" "button"
    When I click in "Generar Resumen con ChatGPT" "button"
    Then a GET API call with alias 'chatGPTSummary' to "/chatgpt/xmlboeresume" is done with query params
        | param           | value                                   |
        | boe_xml_address | /diario_boe/xml.php?id=BOE-A-2999-99999 |
      And I see "Lorem ipsum dolor sit amet, consectetur adipiscing elit." "text"
      And I see "Aenean a elit eu mauris dictum vestibulum. Vivamus vel ligula nec erat dictum efficitur vel in lectus." "text"
      And I see "topic1" "chip"
      And I see "topic2" "chip"
      And I see "topic3" "chip"

  
  Scenario: User can see an icon when BOE is downloaded
    Given backend '/boe/summary' as 'boeSummary' returns 'summaryBoeData'
    When I open the app
    Then I see "AssignmentReturned" "icon"
      And I count 1 "AssignmentReturned" "icon"
