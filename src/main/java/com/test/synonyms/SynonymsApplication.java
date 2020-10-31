package com.test.synonyms;

import com.test.synonyms.domains.Synonym;
import com.test.synonyms.domains.Word;
import com.test.synonyms.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class SynonymsApplication {
	@Autowired
	private WordRepository wordRepository;

	public static void main(String[] args) {
		SpringApplication.run(SynonymsApplication.class, args);
	}

	@PostConstruct
	private void initDb() {
		Word w = new Word( "Amazing");
		w.setSynonyms(Arrays.asList(new Synonym("Incredible", w), new Synonym("Unbelievable", w)));
		wordRepository.save(w);

		Word w1 = new Word( "Loyal");
		w1.setSynonyms(Arrays.asList(new Synonym("faithful", w1), new Synonym("ardent", w1)));
		wordRepository.save(w1);

		Word w2 = new Word( "Incredible");
		w2.setSynonyms(Arrays.asList(new Synonym("magnificent", w2), new Synonym("marvellous", w2)));
		wordRepository.save(w2);
	}
}
