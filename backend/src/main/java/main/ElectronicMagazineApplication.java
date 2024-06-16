package main;

//import main.repositories.Initialazer;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ElectronicMagazineApplication {

	//private static Initialazer initiator;

//	@Autowired
//	public void setInitialLoader(Initialazer initiator) {
//		ElectronicMagazineApplication.initiator = initiator;
//	}

	public static void main(String[] args) {
		SpringApplication.run(ElectronicMagazineApplication.class, args);
		//initiator.initial();
	}

}
