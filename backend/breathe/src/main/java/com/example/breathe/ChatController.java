package com.example.breathe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Local CORS for frontend
public class ChatController {

    @Autowired
    private ClaudeServices claudeServices;

    @PostMapping("/claude")
    public ResponseEntity<String> getClaudeReply(@RequestBody String userMessage) {
        String response = claudeServices.getClaudeResponse(userMessage);
        return ResponseEntity.ok(response);
    }
}
