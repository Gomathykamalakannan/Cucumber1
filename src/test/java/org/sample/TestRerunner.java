package org.sample;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="@src/test/resources/feature/addmap.feature",
glue="org.sample",
plugin= {"html:target"},dryRun=false)

public class TestRerunner {

}
