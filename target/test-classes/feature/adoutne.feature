@reg
Feature: Add customer details by using senario outline
 

 
  Scenario Outline: Title of your scenario outline
    Given The user is in home pages
    When The user filling the fields "<Mg>","<Flm>","<Fim>","<Fsp>","<Lpmc>","<Ipms>","<Spc>"
    When Click the submit icon
    Then See the Congratulation message
    Examples: 
     |Mg|Flm|Fim|Fsp|Lpmc|Ipms|Spc|
     |100|200|300|400|500|600|700|
     |700|600|500|100|300|200|100|
     |200|400|600|800|100|200|300|
     |100|200|400|300|400|500|700|