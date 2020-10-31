package com.test.synonyms.domains;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

// Word class
@Entity
@Table(name = "words")
public class Word {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int wordId;

    @NotNull
    private String wordText;
    @OneToMany(
            mappedBy = "word", // point name from relationship in Synonym class
            cascade = CascadeType.ALL,
            orphanRemoval = true // cascade delete if we remove word we remove synonyms
    )
    private List<Synonym> synonyms;

    public Word() {
        synonyms = new ArrayList<>();
    }

    // Required by hibernate
    public Word(String wordText) {
        synonyms = new ArrayList<>();
        this.wordText = wordText;
    }

    public Word(int wordId, String wordText) {
        this.wordId = wordId;
        this.wordText = wordText;
    }

    public int getWordId() {
        return wordId;
    }

    public void setWordId(int wordId) {
        this.wordId = wordId;
    }

    public String getWordText() {
        return wordText;
    }

    public void setWordText(String wordText) {
        this.wordText = wordText;
    }

    public List<Synonym> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(List<Synonym> synonyms) {
        this.synonyms = synonyms;
    }

    public void addSynonyms(Integer synonymId, String synonymText, Word wrd) {
        Synonym newSynonym = new Synonym();
        newSynonym.setSynonymId(synonymId);
        newSynonym.setSynonymText(synonymText);
        newSynonym.setWord(wrd);
        if (synonyms == null) {
            synonyms = new ArrayList();
        }
        synonyms.add(newSynonym);
    }
}
