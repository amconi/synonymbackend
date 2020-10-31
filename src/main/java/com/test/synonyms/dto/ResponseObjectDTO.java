package com.test.synonyms.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseObjectDTO {
    @JsonProperty("id")
    private Integer Id;

    @JsonProperty("isError")
    private Boolean isError;

    @JsonProperty("errorMessage")
    private String errorMessage;

    public ResponseObjectDTO() {
        this.isError = false;
        this.errorMessage = "";
    }

    public ResponseObjectDTO(Boolean isError, String errorMessage) {
        this.isError = isError;
        this.errorMessage = errorMessage;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
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
}
