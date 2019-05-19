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


public class Twodimentional {

	@Given("The user add the tarif plan")
	public void the_user_add_the_tarif_plan() {
		Hooks.driver.get("http://www.demo.guru99.com/telecom/");
	}

	@When("The user fill the valid details")
	public void the_user_fill_the_valid_details(DataTable dataTable) {
		Hooks.driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
		
		List<List<String>> tarifdetails= dataTable.asLists(String.class); 
		Hooks.driver.findElement(By.id("rental1")).sendKeys(tarifdetails.get(0).get(3));
		Hooks.driver.findElement(By.id("local_minutes")).sendKeys(tarifdetails.get(1).get(2));
		Hooks.driver.findElement(By.id("inter_minutes")).sendKeys(tarifdetails.get(2).get(1));
		Hooks.driver.findElement(By.id("sms_pack")).sendKeys(tarifdetails.get(0).get(1));
		Hooks.driver.findElement(By.id("minutes_charges")).sendKeys(tarifdetails.get(0).get(3));
		Hooks.driver.findElement(By.id("inter_charges")).sendKeys(tarifdetails.get(1).get(1));
		Hooks.driver.findElement(By.id("sms_charges")).sendKeys(tarifdetails.get(0).get(2));
	}

	@When("The user click the submit icon")
	public void the_user_click_the_submit_icon() {
		Hooks.driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();

	    
	}

	@SuppressWarnings("deprecation")
	@Then("I validate the message")
	public void i_validate_the_message() {
		Assert.assertTrue(Hooks.driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']")).isDisplayed());


	    
	}


}
