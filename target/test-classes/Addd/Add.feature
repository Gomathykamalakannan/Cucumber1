
Feature: To test the add customer Funtionality

  
  Scenario: To verify the customer Id generated
    Given The user is in add customers pages
    When The users give the valid input
     
      | 1000 | 256 | 100 | 100 | 30 | 50 | 1 |
    When To click the submit button
    Then The user should see the customers ID generate
    

 