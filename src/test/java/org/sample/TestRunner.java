package org.sample;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\cucumber1\\src\\test\\resources\\feature\\addmap.feature",
glue="org.sample",plugin= {"html:target","rerun:src/test/resources/feature/addmap.feature","json:target/report.json"},dryRun=false)
public class TestRunner {
	

}
  