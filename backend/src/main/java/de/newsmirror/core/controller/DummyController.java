package de.newsmirror.core.controller;

import de.newsmirror.core.api.DummyApi;
import de.newsmirror.core.model.InfoDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController implements DummyApi {

    @Override
    public ResponseEntity<InfoDto> getInfo() {
        return ResponseEntity.ok(new InfoDto().description("UP").version("1.0"));
    }

}
