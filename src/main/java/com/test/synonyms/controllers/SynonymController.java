package com.test.synonyms.controllers;

import com.test.synonyms.dto.ResponseObjectDTO;
import com.test.synonyms.dto.wordsynonym.SynonymCreateDTO;
import com.test.synonyms.services.SynonymService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/synonym")
public class SynonymController {
    private SynonymService _service; // DI
    @Autowired
    public void setMyService(SynonymService service) {
        this._service = service;
    }

    /**
     * Create new synonym
     * @param synonymCreateDTO
     * @return id of the newly created synonym
     */
    @PostMapping("/create")
    public ResponseEntity<ResponseObjectDTO> create(@RequestBody SynonymCreateDTO synonymCreateDTO) {
        ResponseObjectDTO res = new ResponseObjectDTO();
        try {
            res = _service.createSynonym(synonymCreateDTO.getWordId(), synonymCreateDTO.getSynonymText());
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Delete synonym
     * @param id - synonymId for deletion
     * @return
     */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") Integer id) {
        try {
            _service.deleteSynonym(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
