package org.sample;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\cucumber1\\src\\test\\resources\\feature",glue="org.sample",plugin="html:target",dryRun=false,monochrome=true)
public class TestRunner {
	

}
