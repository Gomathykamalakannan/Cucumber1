package org.sample;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

 static WebDriver driver;
@Before
public void Beforeclass(){
	System.setProperty("webdriver.chrome.driver","C:\\Users\\Greens-11\\Desktop\\Manivannan\\selinium\\RSM\\Cucumber\\Driver\\chromedriver.exe");
	   driver=new ChromeDriver();
	   
	   }


 @After
public void Afterclass() {
driver.close();
driver.quit();	
}
}

