Feature: The jawwy.tv Website

  Scenario Outline: As a user, I need to check the subscribtion packages for all the countries 

    Given The user is on the Subscribtion page for <country> Country
    Then  Subscribtion Packages type and price for <country> are listed Correctly 
       Examples:
         |country|
         | sa    |
         | kw    |
         | bh    |



   

