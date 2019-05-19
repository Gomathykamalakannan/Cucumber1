$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Greens-11/Desktop/Manivannan/selinium/RSM/cucumber1/src/test/resources/feature/Add.feature");
formatter.feature({
  "name": "To test the add customer Funtionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify the customer Id generated",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add customers pages",
  "keyword": "Given "
});
formatter.match({
  "location": "Shree.the_user_is_in_add_customers_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The users give the valid input",
  "rows": [
    {
      "cells": [
        "1000",
        "256",
        "100",
        "100",
        "30",
        "50",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Shree.the_users_give_the_valid_input(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "Shree.to_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the customers ID generate",
  "keyword": "Then "
});
formatter.match({
  "location": "Shree.the_user_should_see_the_customers_ID_generate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/Greens-11/Desktop/Manivannan/selinium/RSM/cucumber1/src/test/resources/feature/addmap.feature");
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
formatter.uri("C:/Users/Greens-11/Desktop/Manivannan/selinium/RSM/cucumber1/src/test/resources/feature/addtwod.feature");
formatter.feature({
  "name": "Tariff",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To add the tariff plan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@load"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user add the tarif plan",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodimentional.the_user_add_the_tarif_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill the valid details",
  "rows": [
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "700",
        "600",
        "500",
        "400",
        "300",
        "200",
        "100"
      ]
    },
    {
      "cells": [
        "200",
        "400",
        "600",
        "800",
        "100",
        "200",
        "300"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "400",
        "300",
        "400",
        "500",
        "700"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodimentional.the_user_fill_the_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit icon",
  "keyword": "When "
});
formatter.match({
  "location": "Twodimentional.the_user_click_the_submit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the message",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodimentional.i_validate_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/Greens-11/Desktop/Manivannan/selinium/RSM/cucumber1/src/test/resources/feature/addtwodmap.feature");
formatter.feature({
  "name": "Add tarifff",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodmap.the_user_is_in_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill all the Required field",
  "rows": [
    {
      "cells": [
        "Mg",
        "Flm",
        "Fim",
        "Fsp",
        "Lpmc",
        "Ipms",
        "Spc"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "700",
        "600",
        "500",
        "100",
        "300",
        "200",
        "100"
      ]
    },
    {
      "cells": [
        "200",
        "400",
        "600",
        "800",
        "100",
        "200",
        "300"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "400",
        "300",
        "400",
        "500",
        "700"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click submit",
  "keyword": "When "
});
formatter.match({
  "location": "Twodmap.click_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/Greens-11/Desktop/Manivannan/selinium/RSM/cucumber1/src/test/resources/feature/adoutne.feature");
formatter.feature({
  "name": "Add customer details by using senario outline",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in home pages",
  "keyword": "Given "
});
formatter.step({
  "name": "The user filling the fields \"\u003cMg\u003e\",\"\u003cFlm\u003e\",\"\u003cFim\u003e\",\"\u003cFsp\u003e\",\"\u003cLpmc\u003e\",\"\u003cIpms\u003e\",\"\u003cSpc\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the submit icon",
  "keyword": "When "
});
formatter.step({
  "name": "See the Congratulation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Mg",
        "Flm",
        "Fim",
        "Fsp",
        "Lpmc",
        "Ipms",
        "Spc"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "700",
        "600",
        "500",
        "100",
        "300",
        "200",
        "100"
      ]
    },
    {
      "cells": [
        "200",
        "400",
        "600",
        "800",
        "100",
        "200",
        "300"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "400",
        "300",
        "400",
        "500",
        "700"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home pages",
  "keyword": "Given "
});
formatter.match({
  "location": "Senariooutline.the_user_is_in_home_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user filling the fields \"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.the_user_filling_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the submit icon",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.click_the_submit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See the Congratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "Senariooutline.see_the_Congratulation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home pages",
  "keyword": "Given "
});
formatter.match({
  "location": "Senariooutline.the_user_is_in_home_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user filling the fields \"700\",\"600\",\"500\",\"100\",\"300\",\"200\",\"100\"",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.the_user_filling_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the submit icon",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.click_the_submit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See the Congratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "Senariooutline.see_the_Congratulation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home pages",
  "keyword": "Given "
});
formatter.match({
  "location": "Senariooutline.the_user_is_in_home_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user filling the fields \"200\",\"400\",\"600\",\"800\",\"100\",\"200\",\"300\"",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.the_user_filling_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the submit icon",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.click_the_submit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See the Congratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "Senariooutline.see_the_Congratulation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in home pages",
  "keyword": "Given "
});
formatter.match({
  "location": "Senariooutline.the_user_is_in_home_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user filling the fields \"100\",\"200\",\"400\",\"300\",\"400\",\"500\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.the_user_filling_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the submit icon",
  "keyword": "When "
});
formatter.match({
  "location": "Senariooutline.click_the_submit_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See the Congratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "Senariooutline.see_the_Congratulation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});