package org.sample;

import java.util.List;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;


public class Shree {
	static WebDriver driver;
	@Given("The user is in add customers pages")
	public void the_user_is_in_add_customers_pages() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\Cucumber\\Driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		
		driver.get("http://www.demo.guru99.com/telecom/");

	}

	@When("The users give the valid input")
	public void the_users_give_the_valid_input(DataTable dataTable) {
		driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();

		List<String> tarifdetails = dataTable.asList(String.class);
		driver.findElement(By.id("rental1")).sendKeys(tarifdetails.get(0));
		driver.findElement(By.id("local_minutes")).sendKeys(tarifdetails.get(1));
		driver.findElement(By.id("inter_minutes")).sendKeys(tarifdetails.get(2));
		driver.findElement(By.id("sms_pack")).sendKeys(tarifdetails.get(3));
		driver.findElement(By.id("minutes_charges")).sendKeys(tarifdetails.get(4));
		driver.findElement(By.id("inter_charges")).sendKeys(tarifdetails.get(5));
		driver.findElement(By.id("sms_charges")).sendKeys(tarifdetails.get(6));
						

	  
	}

	@When("To click the submit button")
	public void to_click_the_submit_button() {
		driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();

	 
	}

	@Then("The user should see the customers ID generate")
	public void the_user_should_see_the_customers_ID_generate() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\Cucumber\\Driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		
		driver.get("http://www.demo.guru99.com/telecom/");
	Assert.assertTrue(driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']")).isDisplayed());

	    
	}



}