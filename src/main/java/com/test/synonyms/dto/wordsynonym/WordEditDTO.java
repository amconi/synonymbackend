package com.test.synonyms.dto.wordsynonym;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WordEditDTO {
    @JsonProperty("wordId")
    private Integer wordId;
    @JsonProperty("wordText")
    private String wordText;

    public WordEditDTO(Integer wordId, String wordText) {
        this.wordId = wordId;
        this.wordText = wordText;
    }

    public Integer getWordId() {
        return wordId;
    }

    public void setWordId(Integer wordId) {
        this.wordId = wordId;
    }

    public String getWordText() {
        return wordText;
    }

    public void setWordText(String wordText) {
        this.wordText = wordText;
    }
}
