Feature: Google Main Page

  Scenario: Visit homepage
    Given I open "http://localhost:3000/" page
    Then I see "Hola Vite + React!" "text"
    Then I see "el contador es: 0" "button"
    Then I see "Edita App.jsx y guarda para testear actualizaciones del HMR." "text"
    Then I see "Aprende React" "text"
    Then I see "Documentación de Vite" "text"
    Then I see "Cambia el idioma" "button"

