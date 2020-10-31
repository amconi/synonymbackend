package com.test.synonyms.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.test.synonyms.domains.Word;
import com.test.synonyms.dto.wordsynonym.WordDTO;

import java.util.ArrayList;
import java.util.List;

public class ResponseSearchDTO {
    // DATA
    @JsonProperty("data")
    private List<WordDTO> wordDTO = new ArrayList<>();
    // ERROR
    @JsonProperty("isError")
    private Boolean isError = false;
    @JsonProperty("errorMessage")
    private String errorMessage = "";

    private PagerDTO pager;

    public ResponseSearchDTO() {
    }

    public List<WordDTO> getWordDTO() {
        return wordDTO;
    }

    public void setWordDTO(List<WordDTO> wordDTO) {
        this.wordDTO = wordDTO;
    }

    public Boolean getError() {
        return isError;
    }

    public void setError(Boolean error) {
        isError = error;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public PagerDTO getPager() {
        return pager;
    }

    public void setPager(PagerDTO pager) {
        this.pager = pager;
    }
}
