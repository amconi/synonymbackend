package com.test.synonyms;

import com.test.synonyms.domains.Synonym;
import com.test.synonyms.domains.Word;
import com.test.synonyms.dto.ResponseSearchDTO;
import com.test.synonyms.dto.SearchDTO;
import com.test.synonyms.dto.wordsynonym.WordDTO;
import com.test.synonyms.repositories.WordRepository;
import com.test.synonyms.services.SynonymService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
public class SearchHomeTest {
    @MockBean
    private WordRepository _repository;
    @InjectMocks
    private SynonymService _service;

    @Test
    void searchFieldIsEmptyReturnEmptyResults() {
        SearchDTO search = new SearchDTO("");
        ResponseSearchDTO res = _service.getSearchHome(search);
        Assert.assertFalse(res.getError());
        Assert.assertTrue(res.getWordDTO().isEmpty());
    }

    @Test
    void onlyLettersIsAllowed() {
        SearchDTO search = new SearchDTO("123");
        ResponseSearchDTO res = _service.getSearchHome(search);
        Assert.assertTrue(res.getError());

        search = new SearchDTO("Amazing ");
        res = _service.getSearchHome(search);
        Assert.assertTrue(res.getError());
    }

    @Test
    void searchIsCaseInsensitive() {
        Word w = new Word(0,"Amazing");
        w.setSynonyms(Arrays.asList(new Synonym("magnificent", w)));

        SearchDTO search = new SearchDTO("amazing");
        Mockito.when(_repository.findWordsAndSynonyms(search.getSearchTerm())).thenReturn(Arrays.asList(w));

        ResponseSearchDTO res = _service.getSearchHome(search);
        Assert.assertFalse(res.getError());
        Assert.assertTrue(!res.getWordDTO().isEmpty());
    }

    @Test
    void searchIsOk() {
        Word w = new Word(0,"Amazing");
        w.setSynonyms(Arrays.asList(new Synonym("magnificent", w)));

        SearchDTO search = new SearchDTO("amazing", true);
        Mockito.when(_repository.findWordsAndSynonyms(search.getSearchTerm())).thenReturn(Arrays.asList(w));

        ResponseSearchDTO res = _service.getSearchHome(search);
        Assert.assertFalse(res.getError());
        Assert.assertTrue(!res.getWordDTO().isEmpty());
    }


}
