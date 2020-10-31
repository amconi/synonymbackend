package com.test.synonyms.repositories;

import com.test.synonyms.domains.Synonym;
import com.test.synonyms.domains.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SynonymRepository extends JpaRepository<Synonym, Integer> {
    public Synonym findOneBySynonymTextIgnoreCase(String synonymText);
}
