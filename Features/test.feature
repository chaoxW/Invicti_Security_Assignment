Feature: Home page sanity check

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