package org.sample;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class Onemap {
	
	
	@Given("The user is in home page")
	public void the_user_is_in_home_page() {
		Hooks.driver.get("http://www.demo.guru99.com/telecom/");
		
	}
	

	@When("The user fill the field")
	public void the_user_fill_the_field(DataTable Tarifdetails) {
		
		Hooks.driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
		
		Map<String,String> TrfDetail = Tarifdetails.asMap(String.class, String.class);
		
		Hooks.driver.findElement(By.id("rental1")).sendKeys(TrfDetail.get("Monthly Rental"));
		Hooks.driver.findElement(By.id("local_minutes")).sendKeys(TrfDetail.get("Free local minutes"));
		Hooks.driver.findElement(By.id("inter_minutes")).sendKeys(TrfDetail.get("Free inter Minutes"));
		Hooks.driver.findElement(By.id("sms_pack")).sendKeys(TrfDetail.get("Free sms pack"));
		Hooks.driver.findElement(By.id("minutes_charges")).sendKeys(TrfDetail.get("Local per minute charges"));
		Hooks.driver.findElement(By.id("inter_charges")).sendKeys(TrfDetail.get("International per minute charges"));
		Hooks.driver.findElement(By.id("sms_charges")).sendKeys(TrfDetail.get("Sms per charges"));
		
		}

	@When("Click submit icon")
	public void click_submit_icon() {
		Hooks.driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();
	}

	@SuppressWarnings("deprecation")
	@Then("See message")
	public void see_message() {
		Assert.assertTrue(Hooks.driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']")).isDisplayed());
	    
	}



}
