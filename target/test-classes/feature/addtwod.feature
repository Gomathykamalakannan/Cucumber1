

Feature: Tariff
  I want to use this template for my feature file

@smoke @load
  Scenario: To add the tariff plan
    Given The user add the tarif plan
    When The user fill the valid details
    |100|200|300|400|500|600|700|
    |700|600|500|400|300|200|100|
    |200|400|600|800|100|200|300|
    |100|200|400|300|400|500|700|
    When The user click the submit icon
    Then I validate the message
   

