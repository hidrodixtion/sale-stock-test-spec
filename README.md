# SaleStock Test Spec
Test Spec and Automation Test for SaleStock

__[Spec Document]__(https://docs.google.com/spreadsheets/d/1TfsajdmmgPS0lO3U2Zk-hB1GkZt3k2DaV8HiSRA-fdM/edit?usp=sharing)

###How to run :

1. Install nodejs
2. Install Selenium server
3. Install [Codecept](http://codecept.io/) `npm install -g codeceptjs`
4. Run selenium server `selenium-server -p 4444`
5. Run codecept test.
    - Run all test `codeceptjs run --steps`
    - Run specific test `codeceptjs run . 'file_name_test.js' --steps`

_note: some test are still not optimized so it may take long time to finish_
