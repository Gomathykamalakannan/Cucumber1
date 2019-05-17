package org.sample;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Senariooutline {
	static WebDriver driver;
	
	@Given("The user is in home pages")
	public void the_user_is_in_home_pages() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\Cucumber\\Driver\\chromedriver.exe");
		   driver=new ChromeDriver();
		   driver.get("http://www.demo.guru99.com/telecom/");
		
	    
	}

	@When("The user filling the fields {string},{string},{string},{string},{string},{string},{string}")
	public void the_user_filling_the_fields(String Mg, String Flm, String Fim, String Fsp, String Lpmc, String Ipms, String Spc) {
		
		driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
		
		
		driver.findElement(By.id("rental1")).sendKeys(Mg);
		driver.findElement(By.id("local_minutes")).sendKeys(Flm);
		driver.findElement(By.id("inter_minutes")).sendKeys(Fim);
		driver.findElement(By.id("sms_pack")).sendKeys(Fsp);
		driver.findElement(By.id("minutes_charges")).sendKeys(Lpmc);
		driver.findElement(By.id("inter_charges")).sendKeys(Ipms);
		driver.findElement(By.id("sms_charges")).sendKeys(Spc);
	
		
		
	    
	}

	@When("Click the submit icon")
	public void click_the_submit_icon() {
		driver.findElement(By.xpath("//input[@type=\"submit\"]")).click();
	   
	}

	@Then("See the Congratulation message")
	public void see_the_Congratulation_message() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[@style='text-align: center;font-weight: 700;font-size:28px;']")).isDisplayed());

	}

}
