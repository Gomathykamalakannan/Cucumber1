package org.sample;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.ast.DataTable;


public class Onedimentional {
	static WebDriver driver;
	@Given("The user is in add customer page")
	public void the_user_is_in_add_customer_page() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\Cucumber\\Driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get("http://www.demo.guru99.com/telecom/");

	}
	    
	

	@When("The user gives valid inputs")
	public void the_user_gives_valid_inputs(DataTable dataTable) {
		
	    
	}

	@When("The click the submit butto")
	public void the_click_the_submit_butto() {
	    
	}

	@Then("The user should see the customer ID generated")
	public void the_user_should_see_the_customer_ID_generated() {
	   
	}}
