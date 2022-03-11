Feature: Example Page

  Scenario: Visit homepage
    Given I open "http://localhost:3000/" page
    Then I see "Hola Vite + React!" "text"
    And I see "el contador es: 0" "button"
    And I see "Edita App.jsx y guarda para testear actualizaciones del HMR." "text"
    And I see "Aprende React" "text"
    And I see "Documentación de Vite" "text"
    And I see "Cambia el idioma" "button"

