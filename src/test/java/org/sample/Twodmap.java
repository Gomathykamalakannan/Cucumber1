package org.sample;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class Twodmap {
	
	
	@Given("The user is in webpage")
	public void the_user_is_in_webpage() {
		Hooks.driver.get("http://www.demo.guru99.com/telecom/");
	    
	}

	@When("Fill all the fields")
	public void fill_all_the_fields(DataTable dataTarif) {
		Hooks.driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
		
		List<Map<String,String>> Details = dataTarif.asMaps(String.class, String.class);
		
		Hooks.driver.findElement(By.id("rental1")).sendKeys(Details.get(1).get("Monthly Rental"));
		Hooks.driver.findElement(By.id("local_minutes")).sendKeys(Details.get(0).get("Free local minutes"));
		Hooks.driver.findElement(By.id("inter_minutes")).sendKeys(Details.get(1).get("Free internation minutes"));
		Hooks.driver.findElement(By.id("sms_pack")).sendKeys(Details.get(1).get("Free sms pack"));
		Hooks.driver.findElement(By.id("minutes_charges")).sendKeys(Details.get(0).get("Local per minutes charges"));
		Hooks.driver.findElement(By.id("inter_charges")).sendKeys(Details.get(3).get("International per minutes charges"));
		Hooks.driver.findElement(By.id("sms_charges")).sendKeys(Details.get(1).get("Sms per charges"));
	    
	}

	@When("Click submit")
	public void click_submit() {
		Hooks.driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();	    
	}

	@SuppressWarnings("deprecation")
	@Then("Check message")
	public void check_message() {
		Assert.assertTrue(Hooks.driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']")).isDisplayed());
	   
	}



}
