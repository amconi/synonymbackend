package com.test.synonyms.repositories;

import com.test.synonyms.domains.Word;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;


@Repository
public interface WordRepository extends JpaRepository<Word, Integer>,
        JpaSpecificationExecutor<Word> {

    public List<Word> findByWordTextIgnoreCase(String searchText);

    /*
     * Search query work in both directions
     * */
    @Query("Select word from Word word where word.wordId " +
            "IN (select distinct w.wordId from Word w join w.synonyms syn " +
            "where LOWER(w.wordText) = :searchText or LOWER(syn.synonymText) = :searchText)")
    public List<Word> findWordsAndSynonyms(@Param("searchText") String searchText);


    @Query("Select word from Word word where word.wordId IN (select distinct w.wordId from Word w join w.synonyms syn " +
            "where LOWER(w.wordText) IN :words)")
    public List<Word> findWithTransitiveRule(@Param("words") Collection<String> words);
}
