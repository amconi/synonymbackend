package com.test.synonyms.services;
import com.test.synonyms.dto.*;
import com.test.synonyms.domains.Synonym;
import com.test.synonyms.domains.Word;
import com.test.synonyms.dto.wordsynonym.SynonymDTO;
import com.test.synonyms.dto.wordsynonym.WordDTO;
import com.test.synonyms.dto.wordsynonym.WordEditDTO;
import com.test.synonyms.repositories.SynonymRepository;
import com.test.synonyms.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SynonymService {
    @Autowired
    WordRepository _repository;
    @Autowired
    SynonymRepository _repositorySynonym;

    public SynonymService() {
    }

    /**
     * Searches by word and synonym using the search criteria given as a parameter. IncludeTransitive if is a value true
     * @param search term
     * @return A list of words synonyms matching with the search criteria. If nothing is found, this method return empty results
     * returns an empty list.
     */
    public ResponseSearchDTO getSearchHome(SearchDTO search) {
        ResponseSearchDTO ret = new ResponseSearchDTO();
        if (!search.getSearchTerm().chars().allMatch(Character::isLetter)) { // only chars is allowed
            return ret;// and if is not all chars return empty object
        }

        search.setSearchTerm(search.getSearchTerm().toLowerCase()); // search is case insensitive
        List<Word> searchRes = _repository.findWordsAndSynonyms(search.getSearchTerm());// search for word or synonyms
        List<WordDTO> searchResDTO = searchRes.stream().map(this::convertWordToWordDTO).collect(Collectors.toList()); // map

        if(search.getIncludeTransitive()){ // transitive rule
            searchResDTO.forEach((WordDTO w) -> {
                List<String> selectedSynonym = w.getSynonyms().stream().map(entry -> entry.getSynonymText().toLowerCase()).collect(Collectors.toList()); // get returned synonyms
                List<Word> children = _repository.findWithTransitiveRule(selectedSynonym);
                List<SynonymDTO> synToAdd = children.stream().map(entry -> entry.getSynonyms()).flatMap(Collection::stream).collect(Collectors.toList())
                        .stream().map(entry -> new SynonymDTO(entry.getSynonymId(), entry.getSynonymText())).collect(Collectors.toList()); // get synonyms to add and map to DTO

                List<SynonymDTO> oldToAdd = w.getSynonyms();
                oldToAdd.addAll(synToAdd);
                w.setSynonyms(oldToAdd.stream().distinct().collect(Collectors.toList())); // distinct, no duplicate
            });
        }

        ret.setWordDTO(searchResDTO);
        return ret;
    }

    /**
     * Searches by word and synonym using the search criteria given as a parameter. If search is empty return all results
     * @param pageNumber paging
     * @return A list of synonyms matching with the search criteria. If nothing is found, this method
     * returns an empty list.
     */
    public ResponseSearchDTO getSearchAdministrationGrid(Integer pageNumber) {
        ResponseSearchDTO ret = new ResponseSearchDTO(); // return this object
        Pageable paging = PageRequest.of(pageNumber - 1, 1); // this is for paging in query

        PagerDTO pager = new PagerDTO(); // Create and return this object for paging component in UI
        pager.setCurrentPage(pageNumber);

        Page<Word> pageResult = _repository.findAll(paging); // return all records
        pager.setTotalPages(pageResult.getTotalPages());

        List<WordDTO> pageResultDTO = pageResult.getContent().stream().map(this::convertWordToWordDTO).collect(Collectors.toList());
        ret.setWordDTO(pageResultDTO);
        ret.setPager(pager);

        return ret;
    }

    /**
     * Return wordDTO for edit at frontend
     * @param wordId of word
     * @return A list of synonyms matching with the search criteria. If nothing is found, this method
     * returns an empty list.
     */
    public WordDTO getWordDTO(Integer wordId) {
        WordDTO ret = new WordDTO();
        Optional<Word> word = _repository.findById(wordId);
        if (word.isPresent()) {
            return convertWordToWordDTO(word.get());
        } else {
            return new WordDTO();
        }
    }

    /**
     * Return word for edit
     *
     * @param wordId of word
     * @return A list of synonyms matching with the search criteria. If nothing is found, this method
     * returns an empty list.
     */
    public Optional<Word> getWord(Integer wordId) {
        Optional<Word> word = _repository.findById(wordId);
        return word;
    }

    /**
     * Light converter from word --> wordDTO
     * @param word
     * @return DTO object
     */
    private WordDTO convertWordToWordDTO(Word word) {
        WordDTO wordDTO = new WordDTO();
        wordDTO.setWordId(word.getWordId());
        wordDTO.setWordText(word.getWordText());
        List<Synonym> syn = word.getSynonyms();
        List<SynonymDTO> synDTO = syn.stream().map(entry -> new SynonymDTO(entry.getSynonymId(), entry.getSynonymText())).collect(Collectors.toList());
        wordDTO.setSynonyms(synDTO);
        return wordDTO;
    }

    /**
     * Create word
     *
     * @param wordDTO
     * @return A list of synonyms matching with the search criteria. If nothing is found, this method
     * returns an empty list.
     */
    public ResponseObjectDTO createWord(WordDTO wordDTO) {
        String wordText = wordDTO.getWordText();
        ResponseObjectDTO validObjectDTO = wordValidation(wordText);
        if (validObjectDTO.getError()) return validObjectDTO;

        Word ret = new Word();
        ret.setWordText(wordDTO.getWordText());
        Word retObj = _repository.save(ret);
        _repository.flush();
        validObjectDTO.setId(retObj.getWordId());
        if (validObjectDTO.getId() > 0) {
            createSynonym(ret, wordDTO.getSynonyms());
        }
        return validObjectDTO;
    }

    /**
     * Edit word
     *
     * @param wordDTO
     * @return A list of synonyms matching with the search criteria. If nothing is found, this method
     * returns an empty list.
     */
    public ResponseObjectDTO editWord(WordEditDTO wordDTO) {
        String wordText = wordDTO.getWordText();
        ResponseObjectDTO validObjectDTO = wordValidation(wordText);
        if (validObjectDTO.getError()) return validObjectDTO;

        Word ret = getWord(wordDTO.getWordId()).get(); // return word for edit
        ret.setWordText(wordDTO.getWordText());
        Word retObj = _repository.save(ret);
        _repository.flush();
        validObjectDTO.setId(retObj.getWordId());
        return validObjectDTO;
    }

    /**
     * Validation for word
     *
     * @param wordText
     * @return isError = false if is everything OK
     */
    private ResponseObjectDTO wordValidation(String wordText) {
        ResponseObjectDTO returnObject = new ResponseObjectDTO();
        if (wordText.isEmpty()) {
            return new ResponseObjectDTO(true, "Word can not be empty!");
        }

        boolean allLetters = wordText.chars().allMatch(Character::isLetter);
        if (!allLetters) {
            return new ResponseObjectDTO(true, "Only letters are allowed without space!");
        }

        if (wordText.length() <= 1) {
            return new ResponseObjectDTO(true, "Synonym field must be at least 2 characters!");
        }

        Boolean isNotExist = _repository.findByWordTextIgnoreCase(wordText).isEmpty();
        if (!isNotExist) {
            return new ResponseObjectDTO(true, "Word already exist.");
        }
        return returnObject;
    }

    /**
     * Add synonym to word
     *
     * @param wordId
     * @param synonymText
     * @return Id of currently inserted synonym
     */
    public ResponseObjectDTO createSynonym(Integer wordId, String synonymText) {
        ResponseObjectDTO validObjectDTO = synonymValidation(wordId, synonymText); // validate
        if (validObjectDTO.getError()) return validObjectDTO;

        Word w = new Word(wordId, "");
        Synonym syn = new Synonym(synonymText, w);
        Synonym retObj = _repositorySynonym.save(syn); // save synonym
        _repositorySynonym.flush();
        validObjectDTO.setId(retObj.getSynonymId()); // get id after is record added

        return validObjectDTO;
    }

    /**
     * Add List of synonym to the Word
     *
     * @param word
     * @param synonyms
     * @return Id of currently inserted synonym
     */
    public void createSynonym(Word word, List<SynonymDTO> synonyms) {
        List<Synonym> res = synonyms.stream().map(entry -> new Synonym(entry.getSynonymId(), entry.getSynonymText(), word)).collect(Collectors.toList());
        _repositorySynonym.saveAll(res);
    }

    /**
     * Validation for synonyms
     *
     * @param synonymText
     * @return isError = false if is everything OK
     */
    private ResponseObjectDTO synonymValidation(Integer wordId, String synonymText) {
        ResponseObjectDTO returnObject = new ResponseObjectDTO();
        if (synonymText.isEmpty()) {
            return new ResponseObjectDTO(true, "Word can not be empty!");
        }

        boolean allLetters = synonymText.chars().allMatch(Character::isLetter);
        if (!allLetters) {
            return new ResponseObjectDTO(true, "Only letters are allowed without space!");
        }

        if (wordId <= 0) {
            return new ResponseObjectDTO(true, "Word must exist!");
        }

        if (synonymText.length() <= 1) {
            return new ResponseObjectDTO(true, "Synonym field must be at least 2 characters!");
        }

        Synonym syn = _repositorySynonym.findOneBySynonymTextIgnoreCase(synonymText);
        if(syn != null) {
            return new ResponseObjectDTO(true, "Synonym is already added!");
        }

        return returnObject;
    }

    /**
     * Delete word
     *
     * @param id - wordId
     */
    public void deleteWord(Integer id) {
        _repository.deleteById(id);
    }

    /**
     * Delete synonym
     *
     * @param id - synonymId
     */
    public void deleteSynonym(Integer id) {
        _repositorySynonym.deleteById(id);
    }

}
