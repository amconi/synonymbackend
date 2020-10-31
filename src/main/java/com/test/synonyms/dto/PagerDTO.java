package com.test.synonyms.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PagerDTO {
    @JsonProperty("currentPage")
    private Integer currentPage = 1;
    @JsonProperty("totalPages")
    private Integer totalPages;

    public Integer getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(Integer currentPage) {
        this.currentPage = currentPage;
    }

    public Integer getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
    }
}
