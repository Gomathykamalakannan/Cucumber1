
Feature: Add tarif
  

  Scenario: Add tariff plan
    Given The user is in home page
    When The user fill the field 
    |Monthly Rental|100|
    |Free local minutes|200|
    |Free inter Minutes|300|
    |Free sms pack|400|    
    |Local per minute charges|500|
    |International per minute charges|400|
    |Sms per charges|600|
    When Click submit icon
    Then See message

