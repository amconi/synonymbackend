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

		Word w1 = new Word( "Brave");
		w1.setSynonyms(Arrays.asList(new Synonym("courageous", w1), new Synonym("heroic", w1)));
		wordRepository.save(w1);

		Word w2 = new Word( "Incredible");
		w2.setSynonyms(Arrays.asList(new Synonym("magnificent", w2), new Synonym("marvellous", w2)));
		wordRepository.save(w2);

		Word w3 = new Word( "Loyal");
		w3.setSynonyms(Arrays.asList(new Synonym("faithful", w3), new Synonym("ardent", w3)));
		wordRepository.save(w3);

		Word w4 = new Word( "Old");
		w4.setSynonyms(Arrays.asList(new Synonym("ancient", w4), new Synonym("obsolete", w4)));
		wordRepository.save(w4);

		Word w5 = new Word( "Positive");
		w5.setSynonyms(Arrays.asList(new Synonym("optimistic", w5), new Synonym("cheerful", w5)));
		wordRepository.save(w5);

		Word w6 = new Word( "Strong");
		w6.setSynonyms(Arrays.asList(new Synonym("stable", w6), new Synonym("solid", w6)));
		wordRepository.save(w6);

		Word w7 = new Word( "Valid");
		w7.setSynonyms(Arrays.asList(new Synonym("authorized", w7), new Synonym("legitimate", w7)));
		wordRepository.save(w7);
	}
}
