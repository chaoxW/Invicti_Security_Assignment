Feature: Home page login and logout

    Scenario: Login with sign in link
        Given I am on Test Fire home page
        When I navigate to Sign In
        Then Login with default username and password
        And I select first account
        Then Sign off from the system

    Scenario: Login with sign in link without password
        Given I am on Test Fire home page
        When I navigate to Sign In
        Then Enter with default username
        And Click the login button
        Then Accept the alert from the system

    Scenario: Login with sign in link without pass after accept alert sign in with pass
        Given I am on Test Fire home page
        When I navigate to Sign In
        Then Enter with default username
        And Click the login button
        Then Accept the alert from the system
        And Enter with default password
        And Click the login button
        And  I navigate to account page
        Then Sign off from the system


    Scenario: Login from ONLINE BANKING LOGIN and check first account
        Given I am on Test Fire home page
        When Enter the ONLINE BANKING LOGIN head link
        Then Login with default username and password
        And I select first account
        Then Sign off from the system

    Scenario: Login from ONLINE BANKING LOGIN and check second account
        Given I am on Test Fire home page
        When Enter the ONLINE BANKING LOGIN head link
        Then Login with default username and password
        And I select second account
        Then Sign off from the system

    Scenario: Login from ONLINE BANKING LOGIN and check account
        Given I am on Test Fire home page
        When Enter the ONLINE BANKING LOGIN head link
        Then Login with default username and password
        And  I select account
            | accountName      |
            | 800000 Corporate |
            | 800001 Checking  |
        Then Sign off from the system