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
	static WebDriver driver;
	
	@Given("The user is in webpage")
	public void the_user_is_in_webpage() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\Cucumber\\Driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		driver.get("http://www.demo.guru99.com/telecom/");
	    
	}

	@When("Fill all the fields")
	public void fill_all_the_fields(DataTable dataTarif) {
		driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
		
		List<Map<String,String>> Details = dataTarif.asMaps(String.class, String.class);
		
		driver.findElement(By.id("rental1")).sendKeys(Details.get(1).get("Monthly Rental"));
		driver.findElement(By.id("local_minutes")).sendKeys(Details.get(0).get("Free local minutes"));
		driver.findElement(By.id("inter_minutes")).sendKeys(Details.get(1).get("Free internation minutes"));
		driver.findElement(By.id("sms_pack")).sendKeys(Details.get(1).get("Free sms pack"));
		driver.findElement(By.id("minutes_charges")).sendKeys(Details.get(0).get("Local per minutes charges"));
		driver.findElement(By.id("inter_charges")).sendKeys(Details.get(3).get("International per minutes charges"));
		driver.findElement(By.id("sms_charges")).sendKeys(Details.get(1).get("Sms per charges"));
	    
	}

	@When("Click submit")
	public void click_submit() {
		driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();	    
	}

	@SuppressWarnings("deprecation")
	@Then("Check message")
	public void check_message() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']")).isDisplayed());
	   
	}



}
