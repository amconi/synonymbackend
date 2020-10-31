package com.test.synonyms.dto;


public class SearchDTO {

    private String searchTerm;
    private Boolean includeTransitive = false;

    public SearchDTO() {

    }

    public Boolean getIncludeTransitive() {
        return includeTransitive;
    }

    public void setIncludeTransitive(Boolean includeTransitive) {
        this.includeTransitive = includeTransitive;
    }

    public SearchDTO(String searchTerm) {
        this.searchTerm = searchTerm;
    }

    public SearchDTO(String searchTerm, Boolean includeTransitive) {
        this.searchTerm = searchTerm;
        this.includeTransitive = includeTransitive;
    }

    public String getSearchTerm() {
        return searchTerm;
    }

    public void setSearchTerm(String searchTerm) {
        this.searchTerm = searchTerm;
    }


}
