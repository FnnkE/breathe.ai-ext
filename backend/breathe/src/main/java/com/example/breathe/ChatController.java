//Necessary import statements
package com.example.breathe;

import java.util.concurrent.ConcurrentHashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Call SpringBoot MVC's
@RestController
@RequestMapping("/api/chat")

//Define class
public class ChatController {
    //Declare Hashmap that reuses the same store map in ProfileController, where key is guest and value is the saved profile object
    private static final ConcurrentHashMap <String, Profile> store = ProfileController.store;
    //Inner ChatRequest class that gets the message and puts it into an object
    public static class ChatRequest {
        public String message;
        //No Arg constructor (mandatory for spring JSON 
        public ChatRequest () {}
    }
    //Inner ChatResponse class that stores the reply from the AI 
    public static class ChatResponse {
        public String reply;
        public ChatResponse(String reply) {
            this.reply = reply;
        }
    }
    
    @PostMapping
    public ResponseEntity<ChatResponse> chat (@RequestBody ChatRequest req) {
        //Retrieve the saved instantiated profile
        Profile prof = store.get("guest");
        //Return a bad request if the profile is null
        if (prof == null) {
            return ResponseEntity.badRequest()
                .body(new ChatResponse("No Profile Saved Yet"));
        }

        //Dummy reply note that in Java: you can access method fields directly by chaining the name
        String replyText = "Hello" + prof.getName() + "you entered" + req.message;

        //Return chatresponse
        return ResponseEntity.ok(new ChatResponse(replyText));

    }



}
