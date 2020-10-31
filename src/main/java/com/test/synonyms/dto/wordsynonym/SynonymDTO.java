package com.test.synonyms.dto.wordsynonym;

import com.fasterxml.jackson.annotation.JsonProperty;


public class SynonymDTO {
    @JsonProperty("synonymId")
    private int synonymId;

    @JsonProperty("synonymText")
    private String synonymText;

    public SynonymDTO() {
    }

    public SynonymDTO(int synonymId, String synonymText) {
        this.synonymId = synonymId;
        this.synonymText = synonymText;
    }

    public SynonymDTO(String synonymText) {
        this.synonymText = synonymText;
    }

    public int getSynonymId() {
        return synonymId;
    }

    public void setSynonymId(int synonymId) {
        this.synonymId = synonymId;
    }

    public String getSynonymText() {
        return synonymText;
    }

    public void setSynonymText(String synonymText) {
        this.synonymText = synonymText;
    }
}
