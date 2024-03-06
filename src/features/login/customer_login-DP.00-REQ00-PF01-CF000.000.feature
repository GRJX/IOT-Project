Feature: DP.00-REQ00-PF01-CF000.000 - Customer login
  As a user, I want to login the OneEMS Customer portal by entering my email id & password, so that I can start performing my desired activities.

  Background:
    Given the user navigates to the web application

  Scenario: Login with valid user credentials
    Given valid username and password
    When the user enters the credentials
    Then the user logs into the customer portal successfully

  # negative test case
  # Scenario: Login with invalid user credentials
  #   Given invalid username and password
  #   When the user enters the credentials
  #   Then the user cannot login
  #   And error message is displayed

  # Scenario: Login with empty credentials
  #   When user does not enter credentials
  #   And tries to login
  #   Then the login button is disabled

  # Scenario: Consecutive 3 incorrect credentials
  #   Given invalid invalid username or password
  #   When the user enters the credentials for 3 consecutive times
  #   Then error message is displayed
  #   And the user account is blocked