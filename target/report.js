$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Greens-11/Desktop/Manivannan/selinium/RSM/cucumber1/src/test/resources/feature/addmap.feature");
formatter.feature({
  "name": "Add tarif",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add tariff plan",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Onemap.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill the field",
  "rows": [
    {
      "cells": [
        "Monthly Rental",
        "100"
      ]
    },
    {
      "cells": [
        "Free local minutes",
        "200"
      ]
    },
    {
      "cells": [
        "Free inter Minutes",
        "300"
      ]
    },
    {
      "cells": [
        "Free sms pack",
        "400"
      ]
    },
    {
      "cells": [
        "Local per minute charges",
        "500"
      ]
    },
    {
      "cells": [
        "International per minute charges",
        "400"
      ]
    },
    {
      "cells": [
        "Sms per charges",
        "600"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Onemap.the_user_fill_the_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click submit icon",
  "keyword": "When "
});
formatter.match({
  "location": "Onemap.click_submit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See message",
  "keyword": "Then "
});
formatter.match({
  "location": "Onemap.see_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});