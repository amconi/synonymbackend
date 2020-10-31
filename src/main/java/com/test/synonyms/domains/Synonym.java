package com.test.synonyms.domains;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "synonyms")
public class Synonym {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int synonymId;

    private String synonymText;

    @ManyToOne()
    @JoinColumn(name = "wordId")
    @JsonBackReference
    private Word word;

    public Synonym() {
    }

    public Synonym(int synonymId, String synonymText, Word word) {
        this.synonymId = synonymId;
        this.synonymText = synonymText;
        this.word = word;
    }

    public Synonym(String synonymText, Word word) {
        this.synonymText = synonymText;
        this.word = word;
    }

    public Word getWord() {
        return word;
    }

    public void setWord(Word word) {
        this.word = word;
    }

    public String getSynonymText() {
        return synonymText;
    }

    public void setSynonymText(String synonymText) {
        synonymText = synonymText;
    }

    public int getSynonymId() {
        return synonymId;
    }

    public void setSynonymId(int synonymId) {
        this.synonymId = synonymId;
    }
}
