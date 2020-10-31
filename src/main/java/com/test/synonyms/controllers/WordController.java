package com.test.synonyms.controllers;

import com.test.synonyms.dto.*;
import com.test.synonyms.dto.wordsynonym.WordDTO;
import com.test.synonyms.dto.wordsynonym.WordEditDTO;
import com.test.synonyms.services.SynonymService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/word")
public class WordController {
    private SynonymService _service; // DI
    @Autowired
    public void setMyService(SynonymService service) {
        this._service = service;
    }

    /**
     * Search from Home screen
     * @param searchTerm
     * @return results for a search
     */
    @GetMapping("search")
    @ResponseBody
    public ResponseEntity<ResponseSearchDTO> search(@RequestParam String searchTerm, @RequestParam Boolean includeTransitive){
        SearchDTO search = new SearchDTO(searchTerm, includeTransitive);
        try {
            ResponseSearchDTO res = _service.getSearchHome(search);
            return new ResponseEntity<ResponseSearchDTO>(res, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Data for Administration grid
     * @param pageNumber
     * @return results for a search
     */
    @GetMapping("grid")
    @ResponseBody
    public ResponseEntity<ResponseSearchDTO> grid(@RequestParam(defaultValue = "1") Integer pageNumber){
        try {
            ResponseSearchDTO res = _service.getSearchAdministrationGrid(pageNumber);
            return new ResponseEntity<ResponseSearchDTO>(res, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Word with Synonyms for edit
     * @param wordId
     * @return Word with Synonyms for edit
     */
    @GetMapping("edit")
    @ResponseBody
    public ResponseEntity<WordDTO> edit(@RequestParam Integer wordId) {
        WordDTO retData = _service.getWordDTO(wordId);
        if (retData.getWordId() > 0) {
            return new ResponseEntity<WordDTO>( retData, new HttpHeaders(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Create new word with synonyms
     * @param requestWordDTO
     * @return id of the newly created word
     */
    @PostMapping("/create")
    public ResponseEntity<ResponseObjectDTO> create(@RequestBody WordDTO requestWordDTO) {
        ResponseObjectDTO ret = _service.createWord(requestWordDTO);
        try {
            return new ResponseEntity<ResponseObjectDTO>(ret, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Edit new word
     * @param requestWordEditDTO
     * @return id of the newly created word
     */
    @PutMapping("/update")
    public ResponseEntity<ResponseObjectDTO> update(@RequestBody WordEditDTO requestWordEditDTO) {
        ResponseObjectDTO ret = _service.editWord(requestWordEditDTO);
        try {
            return new ResponseEntity<ResponseObjectDTO>(ret, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Delete word
     * @param id - wordId for deletion
     * @return
     */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") Integer id) {
        try {
            _service.deleteWord(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
