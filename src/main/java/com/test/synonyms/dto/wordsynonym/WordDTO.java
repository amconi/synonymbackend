package com.test.synonyms.dto.wordsynonym;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class WordDTO {
    @JsonProperty("wordId")
    private int wordId;

    @JsonProperty("wordText")
    private String wordText;

    @JsonProperty("synonyms")
    private List<SynonymDTO> synonyms;

    public WordDTO() {
        this.wordId = 0;
        this.synonyms = new ArrayList<>();
    }

    public WordDTO(int wordId, String wordText) {
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

    public List<SynonymDTO> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(List<SynonymDTO> synonyms) {
        this.synonyms = synonyms;
    }

}
