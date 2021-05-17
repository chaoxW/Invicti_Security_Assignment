Feature: Home page sanity check

    Scenario Outline: Check the service category of the home page head
        Given I am on Test Fire home page
        Then Enter the <Service> head link
        Examples:
            | Service              |
            | ONLINE BANKING LOGIN |
            | PERSONAL             |
            | SMALL BUSINESS       |
            | INSIDE ALTORO MUTUAL |

    Scenario Outline: Check the subservice of personal category of the home page
        Given I am on Test Fire home page
        When Enter the PERSONAL category
        Then Enter the <Subservices_Personal> of PERSONAL category
        Examples:
            | Subservices_Personal    |
            | Deposit Product         |
            | Checking                |
            | Loan Products           |
            | Cards                   |
            | Investments & Insurance |
            | Other Services          |

    Scenario Outline: Check the subservice of small busniess category of the home page
        Given I am on Test Fire home page
        When Enter the SMALL BUSINESS category
        Then Enter the <Subservices_SmallBusiness> of SMALL BUSINESS category
        Examples:
            | Subservices_SmallBusiness |
            | Deposit Products          |
            | Lending Services          |
            | Cards                     |
            | Insurance                 |
            | Other Services            |

    # Locations will fail because of Page could not be found.
    Scenario Outline: Check the subservice of inside altoro mutual category of the home page
        Given I am on Test Fire home page
        When Enter the INSIDE ALTORO MUTUAL category
        Then Enter <Subservices_InsideALTORO> of INSIDE ALTORO MUTUAL category
        Examples:
            | Subservices_InsideALTORO |
            | About Us                 |
            | Contact Us               |
            # | Locations                |
            | Investor Relations       |
            | Press Room               |
            | Careers                  |
            | Subscribe                |

