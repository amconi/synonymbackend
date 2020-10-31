package com.test.synonyms.dto.wordsynonym;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SynonymCreateDTO {
    @JsonProperty("wordId")
    private int wordId;

    @JsonProperty("synonymText")
    private String synonymText;

    public SynonymCreateDTO(int wordId, String synonymText) {
        this.wordId = wordId;
        this.synonymText = synonymText;
    }

    public int getWordId() {
        return wordId;
    }

    public void setWordId(int wordId) {
        this.wordId = wordId;
    }

    public String getSynonymText() {
        return synonymText;
    }

    public void setSynonymText(String synonymText) {
        this.synonymText = synonymText;
    }
}
